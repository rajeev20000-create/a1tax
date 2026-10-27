import { TEAL, HEADING_NAVY, PARA } from '@/lib/theme'

export function SectionHeader({ label, title, sub, light = false, as: Heading = 'h2' }: { label: string; title: string; sub?: string; light?: boolean; as?: 'h1' | 'h2' }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 48 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
        <span style={{ width: 32, height: 1, background: TEAL }} />
        <span style={{ color: TEAL, fontSize: 14, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter' }}>{label}</span>
        <span style={{ width: 32, height: 1, background: TEAL }} />
      </div>
      <Heading style={{ fontFamily: 'Inter', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: light ? '#fff' : HEADING_NAVY, lineHeight: 1.2, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p style={{ color: light ? 'rgba(255,255,255,0.6)' : PARA, fontSize: 17, lineHeight: 1.65, maxWidth: 620, margin: '0 auto', fontFamily: 'Inter', fontWeight: 400 }}>{sub}</p>}
    </div>
  )
}
