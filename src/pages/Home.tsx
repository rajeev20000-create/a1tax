import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Clock, Users, MapPin, ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { NAVY, TEAL, BORDER, unsplash } from '@/lib/theme'
import { whyUs, stats, testimonials } from '@/lib/data'
import { useReveal, useCountUp } from '@/lib/hooks'
import { SectionHeader } from '@/components/SectionHeader'

function Hero() {
  const navigate = useNavigate()
  const heroStats = [
    { icon: Clock, label: '21+', sub: 'Years of Experience' },
    { icon: Users, label: '1000+', sub: 'Happy Clients' },
    { icon: MapPin, label: 'Multi-City', sub: 'Presence' },
    { icon: ShieldCheck, label: 'Fast & Reliable', sub: 'Compliance' },
  ]
  return (
    <section style={{
      background: `linear-gradient(to right, rgba(10,25,47,0.95) 40%, rgba(10,25,47,0.4)), url(${unsplash('photo-1560520653-9e0e4c89eb11', 1920, 1080)}) center/cover`,
      color: '#fff', padding: '96px 24px', borderBottom: `4px solid ${TEAL}`,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ width: '100%', maxWidth: 680 }}>
          <p style={{ color: TEAL, fontWeight: 500, letterSpacing: '0.05em', marginBottom: 12, fontSize: 14, fontFamily: 'Inter' }}>WELCOME TO A1 TAXCELLENT & ASSOCIATES</p>
          <h1 style={{ fontFamily: 'Inter', fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
            Complete Financial<br />
            <span style={{ color: TEAL }}>Solutions</span> Under<br />
            One Roof
          </h1>
          <p style={{ color: '#D1D5DB', fontSize: 18, lineHeight: 1.6, marginBottom: 32, fontFamily: 'Inter', fontWeight: 400, maxWidth: 560 }}>
            Your Trusted Partner for Taxation, GST, Accounting & Bookkeeping, Audit, Company Registration, Insurance, Mutual Funds & Business Advisory.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
            <button onClick={() => navigate('/contact')} className="btn-ripple" style={{
              background: TEAL, color: '#fff', border: 'none',
              borderRadius: 6, padding: '12px 24px', fontSize: 16, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Inter', display: 'flex', alignItems: 'center', gap: 8, transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0f766e')}
              onMouseLeave={e => (e.currentTarget.style.background = TEAL)}>
              Book Free Consultation <ArrowRight size={16} />
            </button>
            <button onClick={() => navigate('/services')} style={{
              background: 'transparent', color: '#fff', border: '1px solid #9CA3AF',
              borderRadius: 6, padding: '12px 24px', fontSize: 16, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Inter', display: 'flex', alignItems: 'center', gap: 8, transition: 'background 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = NAVY }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff' }}>
              Explore Services <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, borderTop: '1px solid #374151', paddingTop: 32 }} className="hero-stats-grid">
            {heroStats.map((b) => (
              <div key={b.sub} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <b.icon size={26} color={TEAL} style={{ flexShrink: 0 }} />
                <div>
                  <span style={{ display: 'block', color: '#fff', fontFamily: 'Inter', fontWeight: 700, fontSize: 18 }}>{b.label}</span>
                  <span style={{ color: '#9CA3AF', fontSize: 12, fontFamily: 'Inter' }}>{b.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function WhyChooseUs() {
  const ref = useReveal()
  return (
    <section ref={ref} className="section-reveal" style={{ background: NAVY, padding: '80px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader label="Why Choose Us" title="We Add Value to Your Business" light />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }} className="whyus-grid">
          {whyUs.map((r) => (
            <div key={r.title} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <r.icon size={36} color={TEAL} style={{ marginBottom: 16 }} />
              <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 8 }}>{r.title}</h3>
              <p style={{ color: '#9CA3AF', fontSize: 12, lineHeight: 1.6, fontFamily: 'Inter', fontWeight: 400 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .whyus-grid { grid-template-columns: repeat(3, 1fr) !important; } } @media (max-width: 560px) { .whyus-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

function StatItem({ stat, visible }: { stat: typeof stats[number]; visible: boolean }) {
  const val = useCountUp(stat.target, stat.suffix, visible)
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(13,148,136,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
        <stat.icon size={19} color={TEAL} />
      </div>
      <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 44px)', color: '#fff' }}>{val}</div>
      <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, fontWeight: 500, marginTop: 6, fontFamily: 'Inter' }}>{stat.label}</div>
    </div>
  )
}

function Statistics() {
  const ref = useReveal()
  const [visible, setVisible] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = boxRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#F8FAFC', padding: '80px 24px' }}>
      <div ref={boxRef} style={{ maxWidth: 1280, margin: '0 auto', background: NAVY, borderRadius: 24, padding: '48px 32px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }} className="stats-grid">
        {stats.map(s => <StatItem key={s.label} stat={s} visible={visible} />)}
      </div>
      <style>{`.stats-grid { @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
    </section>
  )
}

function Testimonials() {
  const [idx, setIdx] = useState(0)
  const ref = useReveal()
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#F8FAFC', padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
          <span style={{ width: 32, height: 1, background: TEAL }} />
          <span style={{ color: TEAL, fontSize: 14, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter' }}>What Our Clients Say</span>
          <span style={{ width: 32, height: 1, background: TEAL }} />
        </div>
        <div style={{ position: 'relative', background: '#fff', borderRadius: 16, padding: '40px', border: `1px solid ${BORDER}`, boxShadow: '0 10px 30px rgba(0,0,0,0.06)', textAlign: 'left' }} className="testi-card">
          <Quote size={64} color="#F1F5F9" style={{ position: 'absolute', top: 16, right: 32 }} />
          <div style={{ display: 'flex', gap: 2, marginBottom: 16, position: 'relative' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={18} color="#FBBF24" fill="#FBBF24" />)}
          </div>
          <p style={{ color: '#475569', fontSize: 18, lineHeight: 1.75, fontFamily: 'Inter', fontWeight: 400, fontStyle: 'italic', marginBottom: 24, position: 'relative' }}>
            "{testimonials[idx].text}"
          </p>
          <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 16, color: NAVY }}>
            - {testimonials[idx].name}, <span style={{ fontWeight: 400, color: '#64748B' }}>{testimonials[idx].company}</span>
          </div>
          <button onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)} style={{ position: 'absolute', top: '50%', left: -20, transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: NAVY, color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            onMouseEnter={e => (e.currentTarget.style.background = TEAL)} onMouseLeave={e => (e.currentTarget.style.background = NAVY)}><ChevronLeft size={18} /></button>
          <button onClick={() => setIdx(i => (i + 1) % testimonials.length)} style={{ position: 'absolute', top: '50%', right: -20, transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: NAVY, color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            onMouseEnter={e => (e.currentTarget.style.background = TEAL)} onMouseLeave={e => (e.currentTarget.style.background = NAVY)}><ChevronRight size={18} /></button>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .testi-card { padding: 24px 20px !important; }
        }
      `}</style>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Testimonials />
      <Statistics />
    </>
  )
}
