import express from 'express'
import compression from 'compression'
import nodemailer from 'nodemailer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '../dist')

const {
  PORT = 3000,
  SMTP_HOST = 'smtp.gmail.com',
  SMTP_PORT = 465,
  SMTP_USER,
  SMTP_PASS,
  MAIL_TO,
} = process.env

// Credentials come only from the environment. Never hardcode them —
// this repository is public.
const mailReady = Boolean(SMTP_USER && SMTP_PASS)
const recipient = MAIL_TO || SMTP_USER

if (!mailReady) {
  console.warn('[mail] SMTP_USER / SMTP_PASS not set — /api/contact will return 503')
}

const transporter = mailReady
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null

const app = express()
app.set('trust proxy', 1) // behind Traefik
app.use(compression())
// JSON is what the React form sends. urlencoded is the no-JavaScript
// fallback, since the <form> still has a real action/method.
app.use(express.json({ limit: '32kb' }))
app.use(express.urlencoded({ extended: false, limit: '32kb' }))

// A malformed body must not render Express's HTML stack trace.
app.use((err, _req, res, next) => {
  if (err?.type === 'entity.parse.failed' || err?.status === 400) {
    return res.status(400).json({ ok: false, error: 'Malformed request.' })
  }
  if (err?.type === 'entity.too.large') {
    return res.status(413).json({ ok: false, error: 'Message is too long.' })
  }
  return next(err)
})

/* ---------- rate limit: 5 submissions per IP per 15 minutes ---------- */
const WINDOW_MS = 15 * 60 * 1000
const MAX_HITS = 5
const hits = new Map()

setInterval(() => {
  const cutoff = Date.now() - WINDOW_MS
  for (const [ip, times] of hits) {
    const kept = times.filter(t => t > cutoff)
    if (kept.length) hits.set(ip, kept)
    else hits.delete(ip)
  }
}, WINDOW_MS).unref()

function rateLimited(ip) {
  const now = Date.now()
  const times = (hits.get(ip) || []).filter(t => t > now - WINDOW_MS)
  if (times.length >= MAX_HITS) return true
  times.push(now)
  hits.set(ip, times)
  return false
}

/* ---------- helpers ---------- */
const clean = (v, max) => String(v ?? '').trim().slice(0, max)
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
const escapeHtml = v =>
  String(v).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]),
  )

/* ---------- contact endpoint ---------- */
app.post('/api/contact', async (req, res) => {
  // Honeypot: real users never fill this hidden field.
  // Pretend success so bots don't learn they were caught.
  if (clean(req.body?._gotcha, 100)) return res.json({ ok: true })

  if (!transporter) {
    return res.status(503).json({ ok: false, error: 'Email is not configured on the server.' })
  }

  if (rateLimited(req.ip)) {
    return res.status(429).json({ ok: false, error: 'Too many messages. Please try again later.' })
  }

  const name = clean(req.body?.name, 120)
  const email = clean(req.body?.email, 200)
  const phone = clean(req.body?.phone, 40)
  const subject = clean(req.body?.subject, 200)
  const message = clean(req.body?.message, 5000)

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Name, email and message are required.' })
  }
  if (!isEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' })
  }

  try {
    await transporter.sendMail({
      // Gmail only allows sending as the authenticated account.
      from: `"A1 Taxcellent Website" <${SMTP_USER}>`,
      to: recipient,
      replyTo: `"${name}" <${email}>`, // hitting Reply answers the visitor
      subject: subject ? `Website enquiry: ${subject}` : `Website enquiry from ${name}`,
      text: [
        `Name    : ${name}`,
        `Email   : ${email}`,
        `Phone   : ${phone || '-'}`,
        `Subject : ${subject || '-'}`,
        '',
        message,
      ].join('\n'),
      html: `
        <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td style="padding:4px 12px 4px 0"><b>Name</b></td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0"><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
          <tr><td style="padding:4px 12px 4px 0"><b>Phone</b></td><td>${escapeHtml(phone || '-')}</td></tr>
          <tr><td style="padding:4px 12px 4px 0"><b>Subject</b></td><td>${escapeHtml(subject || '-')}</td></tr>
        </table>
        <hr style="margin:16px 0;border:none;border-top:1px solid #ddd">
        <div style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</div>
      `,
    })
    res.json({ ok: true })
  } catch (err) {
    // Log server-side; never leak SMTP details to the browser.
    console.error('[mail] send failed:', err.message)
    res.status(502).json({ ok: false, error: 'Could not send your message. Please try again.' })
  }
})

app.get('/healthz', (_req, res) => res.json({ ok: true, mail: mailReady }))

/* ---------- static site ---------- */
app.use(
  express.static(DIST, {
    setHeaders(res, filePath) {
      // Hashed filenames are content-addressed; index.html must stay fresh.
      if (filePath.includes(`${path.sep}assets${path.sep}`)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      } else if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache, must-revalidate')
      }
    },
  }),
)

// HashRouter means the server only ever sees "/", but keep a fallback.
app.get(/.*/, (_req, res) => res.sendFile(path.join(DIST, 'index.html')))

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[server] listening on ${PORT} — mail ${mailReady ? 'enabled' : 'DISABLED'}`)
})
