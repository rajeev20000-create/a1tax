import { useEffect } from 'react'
import { X, GraduationCap, Award, Briefcase, Star } from 'lucide-react'
import { NAVY, TEAL, BORDER } from '@/lib/theme'
import { teamProfiles, type Founder, type Member } from '@/lib/data'

export function FounderProfileView({ data }: { data: Founder }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap', marginBottom: 56 }} className="founder-grid">
        <div style={{ flex: '1 1 400px', position: 'relative' }}>
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)', height: 360 }}>
            <img src={data.photo} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
        </div>
        <div style={{ flex: '1 1 320px' }}>
          <p style={{ color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{data.tag}</p>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: NAVY, marginBottom: 4, fontFamily: 'Inter' }}>{data.name}</h2>
          <p style={{ color: TEAL, fontSize: 14, fontWeight: 600, marginBottom: 16 }}>{data.title}</p>
          <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{data.servicesLine}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20, marginBottom: 32 }}>
        <div style={{ background: '#F9FAFB', border: `1px solid ${BORDER}`, borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ background: NAVY, color: '#fff', textAlign: 'center', padding: '10px 0', fontWeight: 600, fontSize: 13, fontFamily: 'Inter' }}>ACADEMIC QUALIFICATIONS</div>
          <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {data.academicQuals.map(q => (
              <div key={q} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <GraduationCap size={17} color={TEAL} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: 12.5, fontWeight: 500, color: NAVY }}>{q}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#F9FAFB', border: `1px solid ${BORDER}`, borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: NAVY, color: '#fff', textAlign: 'center', padding: '10px 0', fontWeight: 600, fontSize: 13, fontFamily: 'Inter' }}>EXPERIENCE</div>
          <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <Award size={36} color={TEAL} />
              <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <span style={{ display: 'block', fontSize: 28, fontWeight: 800, color: NAVY, fontFamily: 'Inter' }}>{data.experienceYears}+</span>
                <span style={{ fontSize: 9.5, fontWeight: 700, color: NAVY }}>YEARS OF PROFESSIONAL<br />EXPERIENCE</span>
              </div>
            </div>
            <p style={{ fontSize: 11.5, color: '#4B5563' }}>{data.experienceDesc}</p>
          </div>
        </div>

        <div style={{ background: '#F9FAFB', border: `1px solid ${BORDER}`, borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ background: NAVY, color: '#fff', textAlign: 'center', padding: '10px 0', fontWeight: 600, fontSize: 13, fontFamily: 'Inter' }}>SOFTWARE EXPERTISE</div>
          <div style={{ padding: 18, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
            {data.software.map(s => (
              <span key={s} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 20, padding: '5px 12px', fontSize: 11, fontWeight: 600, color: NAVY }}>{s}</span>
            ))}
          </div>
        </div>

        <div style={{ background: '#F9FAFB', border: `1px solid ${BORDER}`, borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ background: NAVY, color: '#fff', textAlign: 'center', padding: '10px 0', fontWeight: 600, fontSize: 13, fontFamily: 'Inter' }}>CORE EXPERTISE</div>
          <div style={{ padding: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {data.expertise.map(e => (
              <div key={e.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: TEAL, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <e.icon size={12} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: NAVY, lineHeight: 1.3 }}>{e.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: NAVY, borderRadius: 8, padding: '20px 16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', borderBottom: `4px solid ${TEAL}` }}>
        {data.values.map((v, i) => (
          <div key={v.title} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px', borderLeft: i > 0 ? '1px solid #374151' : 'none' }}>
            <v.icon size={20} color={TEAL} style={{ flexShrink: 0 }} />
            <div style={{ textAlign: 'left', lineHeight: 1.3 }}>
              <span style={{ display: 'block', color: '#fff', fontFamily: 'Inter', fontWeight: 700, fontSize: 12.5 }}>{v.title.toUpperCase()}</span>
              <span style={{ color: '#9CA3AF', fontSize: 10 }}>{v.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <style>{`.founder-grid { @media (max-width: 700px) { flex-direction: column; } }`}</style>
    </div>
  )
}

export function TeamMemberProfileView({ data }: { data: Member }) {
  return (
    <div>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 32 }} className="member-grid">
        <div style={{ flex: '0 0 220px' }}>
          <div style={{ borderRadius: 16, overflow: 'hidden', height: 260, boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}>
            <img src={data.photo} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
        </div>
        <div style={{ flex: '1 1 320px' }}>
          <h2 style={{ fontSize: 20, color: TEAL, fontWeight: 700, marginBottom: 4, fontFamily: 'Inter' }}>{data.designation}</h2>
          <h1 style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: 12, textTransform: 'uppercase', fontFamily: 'Inter' }}>{data.name}</h1>
          <span style={{ background: TEAL, color: '#fff', padding: '5px 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', borderRadius: 6, textTransform: 'uppercase' }}>{data.title}</span>
          <p style={{ color: '#374151', fontSize: 13.5, lineHeight: 1.7, marginTop: 16 }}>{data.bio}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#F0FDFA', color: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><GraduationCap size={17} /></div>
            <div><span style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Qualification</span><span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{data.qualification}</span></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#F0FDFA', color: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Award size={17} /></div>
            <div><span style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Certification</span><span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{data.certification}</span></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#F0FDFA', color: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Briefcase size={17} /></div>
            <div><span style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experience</span><span style={{ fontSize: 13, fontWeight: 700, color: TEAL }}>{data.experienceLabel} <span style={{ color: NAVY }}>{data.experienceSub}</span></span></div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#F0FDFA', color: TEAL, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Star size={17} /></div>
            <div>
              <span style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Expertise</span>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {data.expertise.map(e => (
                  <li key={e} style={{ fontSize: 12, color: '#374151', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: TEAL, flexShrink: 0 }} /> {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: NAVY, borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ background: '#0B2A5B', padding: '8px 16px', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', color: '#fff' }}>ABOUT {data.name.toUpperCase()}</div>
            <div style={{ padding: 16, fontSize: 12, lineHeight: 1.7, color: '#D1D5DB' }}>{data.about}</div>
          </div>
          <div style={{ background: '#F0FDFA', border: '1px solid #CCFBF1', borderRadius: 10, padding: 16 }}>
            <h4 style={{ color: TEAL, fontWeight: 700, fontSize: 13, textAlign: 'center', marginBottom: 14, letterSpacing: '0.05em' }}>KEY STRENGTHS</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {data.strengths.map(s => (
                <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: NAVY }}>
                  <s.icon size={13} color={TEAL} /> {s.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: NAVY, borderRadius: 10, padding: 20, display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ color: '#fff', fontSize: 13, fontStyle: 'italic', lineHeight: 1.6, flex: '1 1 220px', margin: 0 }}>"{data.quote}"</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, borderLeft: '1px solid #374151', paddingLeft: 20 }}>
          {data.values.map(v => (
            <div key={v.title} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><v.icon size={13} color={TEAL} /></div>
              <div style={{ lineHeight: 1.2 }}>
                <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: '#fff' }}>{v.title}</span>
                <span style={{ fontSize: 9.5, color: '#9CA3AF' }}>{v.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.member-grid { @media (max-width: 600px) { flex-direction: column; } }`}</style>
    </div>
  )
}

export function MemberModal({ activeKey, onClose }: { activeKey: string | null; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (activeKey) {
      window.addEventListener('keydown', handler)
      document.body.style.overflow = 'hidden'
    }
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [activeKey, onClose])

  if (!activeKey) return null
  const profile = teamProfiles.find(p => p.key === activeKey)
  if (!profile) return null

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(10,25,47,0.75)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 20px', overflowY: 'auto' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 16, maxWidth: 900, width: '100%', padding: 32, position: 'relative', boxShadow: '0 30px 80px rgba(0,0,0,0.4)' }}>
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 16, right: 16, width: 36, height: 36, borderRadius: '50%', background: '#F1F5F9', border: 'none', color: NAVY, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
          <X size={18} />
        </button>
        {profile.type === 'founder' ? <FounderProfileView data={profile} /> : <TeamMemberProfileView data={profile} />}
      </div>
    </div>
  )
}
