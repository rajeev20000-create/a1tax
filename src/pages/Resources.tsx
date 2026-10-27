import { useState } from 'react'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'
import { NAVY, TEAL, PARA, BORDER } from '@/lib/theme'
import { blogPosts, regulations, faqs, filterChips } from '@/lib/data'
import { useReveal } from '@/lib/hooks'
import { SectionHeader } from '@/components/SectionHeader'

function ResourcesGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [query, setQuery] = useState('')
  const ref = useReveal()

  const q = query.trim().toLowerCase()
  const visiblePosts = blogPosts.filter(p =>
    (activeFilter === 'All' || p.cat === activeFilter) &&
    (q === '' || `${p.title} ${p.summary} ${p.cat}`.toLowerCase().includes(q))
  )

  return (
    <section ref={ref} className="section-reveal" style={{ background: '#fff', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader as="h1" label="Resources" title={`Expert Insights, <span style='color:${TEAL}'>Free for Everyone</span>`} sub="In-depth articles on taxation, GST, compliance, and financial planning — written by our own team." />

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 520 }}>
            <Search size={16} color="#94A3B8" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
            <input placeholder="Search articles..." aria-label="Search articles" value={query} onChange={e => setQuery(e.target.value)} style={{ width: '100%', padding: '13px 16px 13px 44px', borderRadius: 12, border: `2px solid ${BORDER}`, fontSize: 14, fontFamily: 'Inter', outline: 'none', color: NAVY, transition: 'border 0.2s' }}
              onFocus={e => (e.target.style.border = `2px solid ${TEAL}`)}
              onBlur={e => (e.target.style.border = `2px solid ${BORDER}`)} />
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 48 }}>
          {filterChips.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              background: activeFilter === f ? NAVY : '#F1F5F9',
              color: activeFilter === f ? '#fff' : '#64748B',
              border: 'none', borderRadius: 20, padding: '8px 18px', fontSize: 13, fontWeight: 500,
              cursor: 'pointer', fontFamily: 'Inter', transition: 'all 0.2s',
            }}>{f}</button>
          ))}
        </div>

        {visiblePosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 24px', marginBottom: 64, background: '#F8FAFC', borderRadius: 18, border: `1px solid ${BORDER}` }}>
            <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 6 }}>No articles found</h3>
            <p style={{ color: PARA, fontSize: 14, fontFamily: 'Inter' }}>Try a different search term or category.</p>
          </div>
        ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, marginBottom: 64 }}>
          {visiblePosts.map(p => (
            <div key={p.title} className="card-hover" style={{ background: '#F8FAFC', borderRadius: 18, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
              <div style={{ height: 180, overflow: 'hidden' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
              <div style={{ padding: '20px 20px 22px' }}>
                <span style={{ background: `rgba(13,148,136,0.1)`, color: TEAL, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, fontFamily: 'Inter' }}>{p.cat}</span>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 15, color: NAVY, marginTop: 12, marginBottom: 8, lineHeight: 1.45 }}>{p.title}</h3>
                <p style={{ color: PARA, fontSize: 13, lineHeight: 1.6, marginBottom: 14, fontFamily: 'Inter' }}>{p.summary}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#94A3B8', fontSize: 12 }}>{p.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}

        <div>
          <h3 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 22, color: NAVY, marginBottom: 24 }}>Latest Regulatory Updates</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {regulations.map(r => (
              <div key={r.title} className="card-hover" style={{ background: '#F8FAFC', borderRadius: 16, padding: '22px 24px', border: `1px solid ${BORDER}` }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10, flexWrap: 'wrap' }}>
                  <span style={{ color: '#94A3B8', fontSize: 12 }}>{r.date}</span>
                  <span style={{ background: '#F1F5F9', color: '#475569', fontSize: 11, fontWeight: 600, padding: '2px 10px', borderRadius: 20 }}>{r.authority}</span>
                  <span style={{ background: `rgba(13,148,136,0.1)`, color: TEAL, fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 20 }}>{r.tag}</span>
                </div>
                <h4 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 8 }}>{r.title}</h4>
                <p style={{ color: PARA, fontSize: 13.5, lineHeight: 1.65, fontFamily: 'Inter' }}>{r.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useReveal()
  return (
    <section ref={ref} className="section-reveal" style={{ background: '#F8FAFC', padding: '100px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <SectionHeader label="FAQ" title={`Frequently Asked <span style='color:${TEAL}'>Questions</span>`} sub="Quick answers to common questions about our services, processes, and fees." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => (
            <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{
              background: '#fff', borderRadius: 14, border: `1px solid ${open === i ? TEAL : BORDER}`,
              overflow: 'hidden', cursor: 'pointer', transition: 'border 0.2s',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px' }}>
                <h3 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 15, color: NAVY, flex: 1, paddingRight: 16 }}>{f.q}</h3>
                <div style={{ color: open === i ? TEAL : '#94A3B8', flexShrink: 0, transition: 'color 0.2s' }}>
                  {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>
              {open === i && (
                <div style={{ padding: '0 20px 18px', color: '#475569', fontSize: 14, lineHeight: 1.75, fontFamily: 'Inter' }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Resources() {
  return (
    <>
      <ResourcesGrid />
      <FAQ />
    </>
  )
}
