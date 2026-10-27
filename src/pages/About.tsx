import { ArrowRight } from 'lucide-react'
import { NAVY, TEAL, BORDER } from '@/lib/theme'
import { founders, members } from '@/lib/data'
import { useReveal } from '@/lib/hooks'
import { SectionHeader } from '@/components/SectionHeader'

function AboutIntro() {
  const ref = useReveal()
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Inter', fontSize: 32, fontWeight: 700, color: NAVY, textTransform: 'uppercase', marginBottom: 12 }}>About Us</h1>
        <h2 style={{ fontSize: 18, color: TEAL, fontWeight: 600, marginBottom: 24, fontFamily: 'Inter' }}>Your Trusted Partner for Complete Financial Solutions</h2>
        <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>A1 Taxcellent & Associates is a trusted financial consulting firm dedicated to delivering reliable, transparent and result-oriented professional services.</p>
        <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>We provide end-to-end solutions in Taxation, Accounting, Compliance, Audit, Registration, Insurance and Investment Advisory for individuals, startups and businesses.</p>
        <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.8 }}>Our mission is to ensure financial clarity, regulatory compliance and sustainable growth for our clients through expert guidance, innovation and personalized service.</p>
      </div>
    </section>
  )
}

function FounderSpotlight({ onSelect }: { onSelect: (key: string) => void }) {
  const ref = useReveal()
  const founder = founders[0]
  return (
    <section ref={ref} className="section-reveal" style={{ background: NAVY, padding: '80px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }} className="founder-spotlight-grid">
        <div style={{ flex: '0 0 auto' }}>
          <div style={{ width: 220, height: 260, borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', border: `3px solid ${TEAL}` }}>
            <img src={founder.photo} alt={founder.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
        </div>
        <div style={{ flex: '1 1 320px' }}>
          <span style={{ color: TEAL, fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter' }}>Founder's Message</span>
          <h2 style={{ fontFamily: 'Inter', fontSize: 30, fontWeight: 800, color: '#fff', margin: '10px 0 4px' }}>{founder.name}</h2>
          <p style={{ color: TEAL, fontSize: 15, fontWeight: 600, marginBottom: 18, fontFamily: 'Inter' }}>{founder.title} · {founder.tag}</p>
          <p style={{ color: '#D1D5DB', fontSize: 15, lineHeight: 1.75, marginBottom: 24, fontFamily: 'Inter' }}>
            With {founder.experienceYears}+ years guiding individuals and businesses through taxation, compliance, and financial growth, Hitesh founded A1 Taxcellent & Associates on a simple principle — every client deserves accurate, honest, and personal financial guidance.
          </p>
          <button onClick={() => onSelect(founder.key)} className="card-hover" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: TEAL, color: '#fff', border: 'none', borderRadius: 8, padding: '12px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter' }}>
            View Full Profile <ArrowRight size={14} />
          </button>
        </div>
      </div>
      <style>{`.founder-spotlight-grid { @media (max-width: 640px) { flex-direction: column; text-align: center; } }`}</style>
    </section>
  )
}

function Team({ onSelect }: { onSelect: (key: string) => void }) {
  const ref = useReveal()
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#F8FAFC', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader label="Our Team" title={`Meet the <span style='color:${TEAL}'>Experts</span> Behind Your Success`} sub="Qualified, experienced, and passionate about your financial wellbeing." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 340px))', gap: 24, justifyContent: 'center' }}>
          {members.map((m) => (
            <button key={m.key} onClick={() => onSelect(m.key)} className="card-hover" style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: `1px solid ${BORDER}`, cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit' }}>
              <div style={{ height: 260, overflow: 'hidden', position: 'relative' }}>
                <img src={m.photo} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${NAVY}cc, transparent 60%)` }} />
                <div style={{ position: 'absolute', bottom: 14, left: 16 }}>
                  <span style={{ background: TEAL, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, fontFamily: 'Inter' }}>{m.designation}</span>
                </div>
              </div>
              <div style={{ padding: '18px 20px 20px' }}>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 18, color: NAVY, marginBottom: 4 }}>{m.name}</h3>
                <div style={{ color: TEAL, fontWeight: 600, fontSize: 13.5, marginBottom: 16 }}>{m.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: NAVY, color: '#fff', borderRadius: 8, padding: '10px 0', fontSize: 13, fontWeight: 600, fontFamily: 'Inter' }}>
                  View Full Profile <ArrowRight size={13} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About({ onSelectMember }: { onSelectMember: (key: string) => void }) {
  return (
    <>
      <AboutIntro />
      <FounderSpotlight onSelect={onSelectMember} />
      <Team onSelect={onSelectMember} />
    </>
  )
}
