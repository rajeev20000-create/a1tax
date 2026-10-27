import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Clock, ShieldCheck, Users, Headset, Mail, Phone, Share2, MessageCircle, MapPin, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'
import { NAVY, TEAL, PARA, BORDER, unsplash, FORMSPREE_ENDPOINT, PHONE_SHORT, PHONE_TEL, EMAIL, INSTAGRAM_URL, WHATSAPP_LINK, WHATSAPP_QR, MAP_LAT, MAP_LNG } from '@/lib/theme'
import { branches, contactStrip } from '@/lib/data'
import { useReveal } from '@/lib/hooks'

export default function Contact() {
  const ref = useReveal()
  const navigate = useNavigate()
  const location = useLocation()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [subject, setSubject] = useState((location.state as { subject?: string } | null)?.subject ?? '')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      form.reset()
      setSubject('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const trustIcons = [
    { icon: Clock, line1: 'Quick', line2: 'Response' },
    { icon: ShieldCheck, line1: 'Trusted', line2: 'Experts' },
    { icon: Users, line1: 'Client', line2: 'Focused' },
    { icon: Headset, line1: 'Dedicated', line2: 'Support' },
  ]
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#F8FAFC' }}>
      <div style={{
        background: `linear-gradient(to right, rgba(10,25,47,0.9) 50%, rgba(10,25,47,0.6)), url(${unsplash('photo-1497366216548-37526070297c', 1920, 1080)}) center/cover`,
        color: '#fff', padding: '80px 24px', borderTop: '8px solid #fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'Inter', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase', marginBottom: 8 }}>Contact Us</h1>
          <h2 style={{ fontSize: 22, color: TEAL, fontWeight: 600, marginBottom: 16, fontFamily: 'Inter' }}>We're Here to Help You Grow</h2>
          <p style={{ color: '#D1D5DB', fontSize: 15.5, lineHeight: 1.7, maxWidth: 480, marginBottom: 32, fontFamily: 'Inter' }}>
            Have a question or need professional assistance? Reach out to us – our team will be happy to assist you.
          </p>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {trustIcons.map(t => (
              <div key={t.line1} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <t.icon size={28} color={TEAL} style={{ flexShrink: 0 }} />
                <div style={{ fontWeight: 700, lineHeight: 1.3, fontFamily: 'Inter' }}>{t.line1}<br />{t.line2}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 0.9fr', gap: 24, marginBottom: 40 }} className="contact-grid">
          {/* Form */}
          <div style={{ background: '#fff', borderRadius: 20, padding: '32px', border: `1px solid ${BORDER}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={17} color="#fff" />
              </div>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 18, color: NAVY }}>Send Us a Message</h3>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 13, marginBottom: 22 }}>Fill out the form and our team will get back to you shortly.</p>
            <form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }} className="form-grid">
                <input name="name" required placeholder="Full Name *" aria-label="Full Name" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: `2px solid ${BORDER}`, fontSize: 16, fontFamily: 'Inter', fontWeight: 400, outline: 'none', color: NAVY }}
                  onFocus={e => (e.target.style.border = `2px solid ${TEAL}`)} onBlur={e => (e.target.style.border = `2px solid ${BORDER}`)} />
                <input name="email" type="email" required placeholder="Email Address *" aria-label="Email Address" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: `2px solid ${BORDER}`, fontSize: 16, fontFamily: 'Inter', fontWeight: 400, outline: 'none', color: NAVY }}
                  onFocus={e => (e.target.style.border = `2px solid ${TEAL}`)} onBlur={e => (e.target.style.border = `2px solid ${BORDER}`)} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }} className="form-grid">
                <input name="phone" type="tel" placeholder="Mobile Number" aria-label="Mobile Number" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: `2px solid ${BORDER}`, fontSize: 16, fontFamily: 'Inter', fontWeight: 400, outline: 'none', color: NAVY }}
                  onFocus={e => (e.target.style.border = `2px solid ${TEAL}`)} onBlur={e => (e.target.style.border = `2px solid ${BORDER}`)} />
                <input name="subject" placeholder="Subject" aria-label="Subject" value={subject} onChange={e => setSubject(e.target.value)} style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: `2px solid ${BORDER}`, fontSize: 16, fontFamily: 'Inter', fontWeight: 400, outline: 'none', color: NAVY }}
                  onFocus={e => (e.target.style.border = `2px solid ${TEAL}`)} onBlur={e => (e.target.style.border = `2px solid ${BORDER}`)} />
              </div>
              <textarea name="message" required rows={4} placeholder="Your Message *" aria-label="Your Message" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: `2px solid ${BORDER}`, fontSize: 16, fontFamily: 'Inter', fontWeight: 400, outline: 'none', color: NAVY, resize: 'vertical', marginBottom: 14 }}
                onFocus={e => (e.target.style.border = `2px solid ${TEAL}`)} onBlur={e => (e.target.style.border = `2px solid ${BORDER}`)} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: PARA, marginBottom: 20 }}>
                <input id="consent" type="checkbox" required style={{ width: 15, height: 15, flexShrink: 0 }} />
                <span>
                  <label htmlFor="consent" style={{ cursor: 'pointer' }}>I agree to the </label>
                  <button type="button" onClick={() => navigate('/privacy')} style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', color: TEAL, fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</button>
                </span>
              </div>

              {status === 'success' && (
                <div role="status" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: 'rgba(13,148,136,0.08)', border: `1px solid ${TEAL}`, borderRadius: 10, padding: '12px 14px', marginBottom: 14 }}>
                  <CheckCircle2 size={17} color={TEAL} style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ color: NAVY, fontSize: 13.5, lineHeight: 1.6, fontFamily: 'Inter' }}>Thank you — your message has been sent. Our team will get back to you shortly.</span>
                </div>
              )}
              {status === 'error' && (
                <div role="alert" style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: 'rgba(220,38,38,0.06)', border: '1px solid #DC2626', borderRadius: 10, padding: '12px 14px', marginBottom: 14 }}>
                  <AlertCircle size={17} color="#DC2626" style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ color: NAVY, fontSize: 13.5, lineHeight: 1.6, fontFamily: 'Inter' }}>Sorry, your message could not be sent. Please try again, or reach us on {PHONE_SHORT}.</span>
                </div>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn-ripple" style={{
                width: '100%', background: TEAL, color: '#fff', border: 'none',
                borderRadius: 10, padding: '14px', fontSize: 15, fontWeight: 700, cursor: status === 'sending' ? 'wait' : 'pointer', fontFamily: 'Inter',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                boxShadow: '0 6px 20px rgba(13,148,136,0.3)', opacity: status === 'sending' ? 0.7 : 1,
              }}>
                {status === 'sending' ? 'Sending…' : <>Send Message <ArrowRight size={16} /></>}
              </button>
            </form>
          </div>

          {/* Get in touch */}
          <div style={{ background: '#fff', borderRadius: 20, padding: '32px', border: `1px solid ${BORDER}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={17} color="#fff" />
              </div>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 18, color: NAVY }}>Get In Touch</h3>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 13, marginBottom: 22 }}>You can also reach us using the following details.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: Phone, label: 'Call Us', val: PHONE_SHORT, href: PHONE_TEL },
                { icon: Mail, label: 'Email Us', val: EMAIL, href: `mailto:${EMAIL}` },
                { icon: Share2, label: 'Instagram', val: '@a1taxcellent', href: INSTAGRAM_URL },
                { icon: Clock, label: 'Office Hours', val: 'Mon – Sat: 9:30 AM – 7:00 PM', href: undefined },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(13,148,136,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <c.icon size={16} color={TEAL} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 12.5, color: '#94A3B8', marginBottom: 2 }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ color: NAVY, fontSize: 14, fontFamily: 'Inter', textDecoration: 'none' }}>{c.val}</a>
                    ) : (
                      <div style={{ color: NAVY, fontSize: 14, fontFamily: 'Inter' }}>{c.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp glass card */}
          <div style={{ background: NAVY, borderRadius: 20, padding: '32px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,211,102,0.15) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(37,211,102,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Headset size={24} color="#25D366" />
              </div>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 17, color: '#fff', marginBottom: 8 }}>Need Instant Help?</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 20 }}>Chat with our experts on WhatsApp</p>
              <div style={{ background: '#fff', borderRadius: 14, padding: 10, display: 'inline-block', marginBottom: 20 }}>
                <img src={WHATSAPP_QR} alt="WhatsApp QR code" width={140} height={140} style={{ display: 'block', borderRadius: 6 }} />
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#25D366', color: '#fff', borderRadius: 10, padding: '13px', fontSize: 14, fontWeight: 700, fontFamily: 'Inter', textDecoration: 'none' }}>
                <MessageCircle size={16} /> Chat Now
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div style={{ borderRadius: 20, overflow: 'hidden', height: 280, marginBottom: 56, border: `1px solid ${BORDER}` }}>
          <iframe
            title="Office location"
            src={`https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=16&output=embed`}
            style={{ width: '100%', height: '100%', border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Branch offices */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 8 }}>
            <span style={{ width: 32, height: 1, background: TEAL }} />
            <span style={{ color: TEAL, fontSize: 14, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter' }}>Our Branch Offices</span>
            <span style={{ width: 32, height: 1, background: TEAL }} />
          </div>
          <p style={{ color: PARA, fontSize: 15 }}>We are present in multiple locations to serve you better.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 56 }}>
          {branches.map(b => (
            <div key={b.city} className="card-hover" style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: `1px solid ${BORDER}`, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              <img src={unsplash(b.img, 400, 260)} alt={b.city} style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} />
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-20px auto 0', border: '4px solid #fff', flexShrink: 0 }}>
                <MapPin size={17} color="#fff" />
              </div>
              <div style={{ padding: '8px 16px 20px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 14, color: TEAL, textTransform: 'uppercase', marginBottom: 16 }}>{b.city}</h3>
                <p style={{ color: PARA, fontSize: 12, lineHeight: 1.6, marginBottom: 12 }}>
                  <MapPin size={12} color={TEAL} style={{ display: 'inline', marginRight: 4, verticalAlign: '-1px' }} />{b.address}
                </p>
                <p style={{ color: PARA, fontSize: 12, marginBottom: 16 }}>
                  <Mail size={12} color={TEAL} style={{ display: 'inline', marginRight: 4, verticalAlign: '-1px' }} />{b.email}
                </p>
                <a href={`https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}`} target="_blank" rel="noopener noreferrer" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, border: `1px solid ${TEAL}`, color: TEAL, borderRadius: 6, padding: '8px 0', fontSize: 11.5, fontWeight: 700, fontFamily: 'Inter', textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = TEAL; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = TEAL }}>
                  Directions <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div style={{ background: NAVY, borderRadius: 8, padding: '20px 16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {contactStrip.map((s, i) => (
            <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 24px', borderLeft: i > 0 ? '1px solid #374151' : 'none' }}>
              <s.icon size={22} color={TEAL} style={{ flexShrink: 0 }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#fff', fontFamily: 'Inter', fontWeight: 700, fontSize: 13 }}>{s.title}</div>
                <div style={{ color: '#9CA3AF', fontSize: 11.5 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .contact-grid { @media (max-width: 1100px) { grid-template-columns: 1fr !important; } }
        .form-grid { @media (max-width: 480px) { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
