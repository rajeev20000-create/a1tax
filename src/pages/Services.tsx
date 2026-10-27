import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { NAVY, TEAL, CARD_NAVY, BORDER, PARA } from '@/lib/theme'
import { services, process } from '@/lib/data'
import { useReveal } from '@/lib/hooks'
import { SectionHeader } from '@/components/SectionHeader'

function ServicesGrid() {
  const ref = useReveal()
  const navigate = useNavigate()
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#F8FAFC', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader as="h1" label="Our Core Services" title={`End-to-End Financial & <span style='color:${TEAL}'>Business Solutions</span>`} sub="From tax filing to wealth planning — every financial service your business needs, delivered by qualified experts." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {services.map((s) => (
            <div key={s.title} className="card-hover" onClick={() => navigate('/contact', { state: { subject: s.title } })} style={{ background: '#fff', borderRadius: 22, padding: 28, border: `1px solid ${BORDER}`, cursor: 'pointer' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg, rgba(13,148,136,0.12), rgba(13,148,136,0.1))`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <s.icon size={24} color={TEAL} />
              </div>
              <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 28, lineHeight: 1.3, color: CARD_NAVY, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: '#64748B', fontSize: 17, lineHeight: 1.7, marginBottom: 16, fontFamily: 'Inter', fontWeight: 400 }}>{s.desc}</p>
              <button aria-label={`Enquire about ${s.title}`} style={{ background: 'none', border: 'none', color: TEAL, fontSize: 16, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, padding: 0, fontFamily: 'Inter' }}>
                Learn More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const ref = useReveal()
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#fff', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader label="How We Work" title={`Our Simple, <span style='color:${TEAL}'>Five-Step Process</span>`} sub="A clear, transparent process from first conversation to ongoing support." />
        <div style={{ position: 'relative', paddingLeft: 52 }} className="timeline-line">
          {process.map((p) => (
            <div key={p.title} style={{ position: 'relative', marginBottom: 28 }} className="card-hover">
              <div style={{ position: 'absolute', left: -42, top: 20, width: 20, height: 20, borderRadius: '50%', background: TEAL, border: '3px solid #fff', boxShadow: `0 0 0 2px ${BORDER}`, zIndex: 1 }} />
              <div style={{ background: '#F8FAFC', borderRadius: 18, padding: '22px 24px', border: `1px solid ${BORDER}`, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <p.icon size={20} color="#fff" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ color: PARA, fontSize: 14, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <ServicesGrid />
      <Process />
    </>
  )
}
