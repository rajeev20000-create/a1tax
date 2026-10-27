import { NAVY, TEAL, PARA, BORDER, unsplash } from '@/lib/theme'
import { industries, industryStrip } from '@/lib/data'
import { useReveal } from '@/lib/hooks'

export default function Industries() {
  const ref = useReveal()
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#F3F4F6' }}>
      <div style={{
        background: `linear-gradient(to right, rgba(10,25,47,0.9) 50%, rgba(10,25,47,0.7)), url(${unsplash('photo-1551288049-bebda4e38f71', 1920, 1080)}) center/cover`,
        color: '#fff', padding: '80px 24px', borderTop: '8px solid #fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ width: '100%', maxWidth: 640 }}>
            <h1 style={{ fontFamily: 'Inter', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase', marginBottom: 8 }}>Industries We Serve</h1>
            <h2 style={{ fontSize: 18, color: TEAL, fontWeight: 600, letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Inter' }}>Tailored Financial Solutions For Every Need</h2>
            <p style={{ color: '#D1D5DB', fontSize: 15.5, lineHeight: 1.7, maxWidth: 640, fontFamily: 'Inter' }}>
              We understand that every industry has unique challenges and financial requirements. At A1 Taxcellent & Associates, we provide end-to-end financial solutions designed to support individuals and businesses across all sectors.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 24, marginTop: -100, marginBottom: 48 }} className="industries-grid">
          {industries.map(ind => (
            <div key={ind.title} className="card-hover" style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: `1px solid ${BORDER}`, boxShadow: '0 10px 25px rgba(0,0,0,0.08)', display: 'flex', flexDirection: 'column' }}>
              <img src={unsplash(ind.img, 400, 260)} alt={ind.title} style={{ width: '100%', height: 128, objectFit: 'cover', display: 'block' }} />
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-28px auto 0', border: '4px solid #fff', flexShrink: 0 }}>
                <ind.icon size={24} color="#fff" />
              </div>
              <div style={{ padding: '8px 16px 24px', flex: 1 }}>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 13, color: NAVY, textAlign: 'center', textTransform: 'uppercase', marginBottom: 16 }}>{ind.title}</h3>
                <ul style={{ color: PARA, fontSize: 12, lineHeight: 1.9, paddingLeft: 16, margin: 0, listStyleType: 'disc' }}>
                  {ind.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 16, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
            <span style={{ width: 32, height: 1, background: TEAL }} />
            <span style={{ color: TEAL, fontSize: 14, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter' }}>Solutions for Every Journey</span>
            <span style={{ width: 32, height: 1, background: TEAL }} />
          </div>
          <p style={{ color: PARA, fontSize: 15 }}>From individuals to enterprises, from startups to established businesses — we are with you at every step of your financial journey.</p>
        </div>

        <div style={{ background: NAVY, borderRadius: 8, padding: '20px 16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {industryStrip.map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 8 }}>
              <s.icon size={22} color={TEAL} style={{ flexShrink: 0 }} />
              <div style={{ textAlign: 'left', lineHeight: 1.3 }}>
                <span style={{ display: 'block', color: '#fff', fontFamily: 'Inter', fontWeight: 700, fontSize: 14 }}>{s.label}</span>
                <span style={{ color: '#9CA3AF', fontSize: 12 }}>{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .industries-grid { margin-top: 24px !important; } }`}</style>
    </section>
  )
}
