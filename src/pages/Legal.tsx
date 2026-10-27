import { NAVY, TEAL, PARA, BORDER, EMAIL, PHONE_SHORT, ADDRESS } from '@/lib/theme'
import { useReveal } from '@/lib/hooks'

const LAST_UPDATED = '27 October 2026'

type Section = { heading: string; body: string[]; bullets?: string[] }

function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: Section[] }) {
  const ref = useReveal()
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 840, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Inter', fontSize: 32, fontWeight: 700, color: NAVY, textTransform: 'uppercase', marginBottom: 8 }}>{title}</h1>
        <p style={{ color: TEAL, fontSize: 13, fontWeight: 600, marginBottom: 24, fontFamily: 'Inter' }}>Last updated: {LAST_UPDATED}</p>
        <p style={{ color: PARA, fontSize: 15, lineHeight: 1.8, marginBottom: 40 }}>{intro}</p>

        {sections.map(s => (
          <div key={s.heading} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: 'Inter', fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{s.heading}</h2>
            {s.body.map(p => (
              <p key={p} style={{ color: PARA, fontSize: 14.5, lineHeight: 1.8, marginBottom: 10 }}>{p}</p>
            ))}
            {s.bullets && (
              <ul style={{ margin: '4px 0 0', paddingLeft: 22, listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ color: PARA, fontSize: 14.5, lineHeight: 1.7 }}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div style={{ background: '#F8FAFC', border: `1px solid ${BORDER}`, borderRadius: 14, padding: '22px 24px', marginTop: 40 }}>
          <h2 style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 10 }}>Contact Us</h2>
          <p style={{ color: PARA, fontSize: 14.5, lineHeight: 1.8 }}>
            A1 Taxcellent &amp; Associates<br />
            {ADDRESS}<br />
            Email: {EMAIL}<br />
            Phone: {PHONE_SHORT}
          </p>
        </div>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="A1 Taxcellent & Associates respects your privacy. This policy explains what information we collect through this website, how we use it, and the choices available to you."
      sections={[
        {
          heading: '1. Information We Collect',
          body: ['We only collect information that you choose to provide. When you submit the enquiry form on our Contact page, we collect:'],
          bullets: [
            'Your name',
            'Your email address',
            'Your mobile number (optional)',
            'The subject and message you write to us',
          ],
        },
        {
          heading: '2. How We Use Your Information',
          body: ['We use the information you submit solely to respond to your enquiry and to provide the professional services you request. We do not sell, rent or trade your personal information to any third party.'],
        },
        {
          heading: '3. How Your Enquiry Is Processed',
          body: ['Our enquiry form is delivered to us using Formspree, a third-party form-handling service. Your submission is transmitted to and stored by Formspree before being forwarded to our email address. Formspree processes this data under its own privacy policy.'],
        },
        {
          heading: '4. Third-Party Services on This Website',
          body: ['This website embeds or links to services operated by other companies. When you interact with them, those companies may collect data under their own privacy policies:'],
          bullets: [
            'Google Maps — an embedded map is shown on our Contact page',
            'WhatsApp — our chat and QR code links open WhatsApp',
            'Instagram, Facebook and YouTube — our social media links',
          ],
        },
        {
          heading: '5. Cookies and Tracking',
          body: ['This website does not set its own tracking or advertising cookies, and we do not run analytics or profiling on visitors. Embedded third-party content such as Google Maps may set its own cookies in your browser.'],
        },
        {
          heading: '6. Data Retention',
          body: ['We retain enquiry correspondence for as long as needed to respond to you and to meet our professional and statutory record-keeping obligations. You may ask us to delete your enquiry data at any time.'],
        },
        {
          heading: '7. Confidentiality',
          body: ['Any financial, tax or business information you share with us during an engagement is treated as confidential and is handled in line with the professional obligations applicable to our practice.'],
        },
        {
          heading: '8. Your Rights',
          body: ['You may contact us at any time to ask what personal information we hold about you, to have it corrected, or to have it deleted. Use the contact details below and we will respond within a reasonable period.'],
        },
        {
          heading: '9. Security',
          body: ['We take reasonable steps to protect the information you send us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.'],
        },
        {
          heading: '10. Changes to This Policy',
          body: ['We may update this policy from time to time. The revised version will be posted on this page with a new "Last updated" date.'],
        },
      ]}
    />
  )
}

export function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms govern your use of the A1 Taxcellent & Associates website. By browsing this website or submitting an enquiry, you accept these terms."
      sections={[
        {
          heading: '1. About This Website',
          body: ['This website is operated by A1 Taxcellent & Associates. It describes our professional services in taxation, accounting, compliance, audit, registration, insurance and investment advisory.'],
        },
        {
          heading: '2. Information Is General, Not Advice',
          body: [
            'All content on this website — including articles, regulatory updates, FAQs and service descriptions — is provided for general information only. It does not constitute tax, legal, accounting, insurance or investment advice, and must not be relied upon as a substitute for professional consultation.',
            'Tax and regulatory rules change frequently and apply differently to each person and business. Please speak to us before acting on anything you read here.',
          ],
        },
        {
          heading: '3. No Client Relationship From This Website',
          body: ['Browsing this website or sending an enquiry does not create a professional or client relationship between you and A1 Taxcellent & Associates. An engagement begins only when it is expressly agreed between us in writing.'],
        },
        {
          heading: '4. Accuracy of Content',
          body: ['We take care to keep the information on this website current and accurate, but we make no warranty that it is complete, correct or up to date at any given time. We may change or remove content without notice.'],
        },
        {
          heading: '5. Investment and Insurance Products',
          body: ['Investments in mutual funds and securities are subject to market risk. Past performance is not indicative of future returns. Insurance products are subject to the terms, conditions and exclusions of the issuing insurer. Please read all scheme and policy documents carefully before investing or purchasing.'],
        },
        {
          heading: '6. Your Responsibilities',
          body: ['When you contact us or engage our services, you agree to provide information that is accurate and complete. We are not responsible for outcomes arising from information that is incorrect, incomplete or withheld.'],
        },
        {
          heading: '7. External Links',
          body: ['This website links to third-party websites and services. We do not control them and are not responsible for their content, availability or practices. Links do not imply endorsement.'],
        },
        {
          heading: '8. Intellectual Property',
          body: ['The name, logo, text, graphics and layout of this website belong to A1 Taxcellent & Associates unless stated otherwise. You may not reproduce or republish them for commercial purposes without our written permission.'],
        },
        {
          heading: '9. Limitation of Liability',
          body: ['To the extent permitted by law, A1 Taxcellent & Associates is not liable for any loss or damage arising from your use of, or reliance on, this website or its content.'],
        },
        {
          heading: '10. Governing Law',
          body: ['These terms are governed by the laws of India. Any dispute relating to this website is subject to the exclusive jurisdiction of the courts at Jaipur, Rajasthan.'],
        },
        {
          heading: '11. Changes to These Terms',
          body: ['We may revise these terms at any time. The revised version will be posted on this page with a new "Last updated" date.'],
        },
      ]}
    />
  )
}
