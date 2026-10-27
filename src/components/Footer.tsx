import { useLocation, useNavigate } from 'react-router-dom'
import { PlayCircle, ThumbsUp, Share2, MessageCircle, ChevronRight, MapPin, Phone, Mail, Globe } from 'lucide-react'
import { TEAL, WHATSAPP_GREEN, FOOTER_DARK, INSTAGRAM_URL, YOUTUBE_URL, FACEBOOK_URL, WHATSAPP_LINK, PHONE_SHORT, EMAIL, WEBSITE } from '@/lib/theme'
import { branches } from '@/lib/data'
import logo from '@/assets/logo/logo.png'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact Us', path: '/contact' },
]

export function Footer() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <footer style={{ background: FOOTER_DARK, color: '#D1D5DB', padding: '64px 24px 32px', borderTop: `4px solid ${TEAL}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Branding */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
              <div style={{ background: '#fff', borderRadius: 10, padding: '6px 10px', display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="A1 Taxcellent and Associates" style={{ height: 36, width: 'auto', objectFit: 'contain' }} />
              </div>
            </div>
            <p style={{ fontSize: 12.5, lineHeight: 1.7, marginBottom: 24, color: '#9CA3AF' }}>
              We provide end-to-end financial solutions in taxation, accounting, compliance, audit and business advisory for individuals, startups and businesses. We are committed to your growth and financial success.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { Icon: PlayCircle, href: YOUTUBE_URL, hoverBg: '#FF0000', label: 'YouTube' },
                { Icon: ThumbsUp, href: FACEBOOK_URL, hoverBg: '#1877F2', label: 'Facebook' },
                { Icon: Share2, href: INSTAGRAM_URL, hoverBg: TEAL, label: 'Instagram' },
                { Icon: MessageCircle, href: WHATSAPP_LINK, hoverBg: WHATSAPP_GREEN, label: 'WhatsApp' },
              ].map(({ Icon, href, hoverBg, label }, i) => (
                <a key={i} href={href ?? '#'} target={href ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label} style={{ width: 32, height: 32, borderRadius: '50%', background: '#1F2937', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', flexShrink: 0 }}
                  onMouseEnter={e => (e.currentTarget.style.background = hoverBg)}
                  onMouseLeave={e => (e.currentTarget.style.background = '#1F2937')}>
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Inter', fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', marginBottom: 24 }}>QUICK LINKS</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map(l => {
                const isActive = pathname === l.path
                return (
                  <li key={l.path}>
                    <button onClick={() => navigate(l.path)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', color: isActive ? TEAL : '#D1D5DB', fontSize: 14, fontFamily: 'Inter', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                      onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = TEAL }}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#D1D5DB' }}>
                      {l.label} <ChevronRight size={12} color={isActive ? TEAL : '#6B7280'} />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Inter', fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', marginBottom: 24 }}>OUR SERVICES</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Taxation Services', 'GST Services', 'Accounting & Bookkeeping', 'Audit & Assurance', 'Registration Services', 'Insurance Solutions', 'Mutual Funds & Wealth Planning'].map(s => (
                <li key={s}>
                  <button onClick={() => navigate('/services')} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: '#D1D5DB', fontSize: 14, fontFamily: 'Inter', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                    onMouseLeave={e => (e.currentTarget.style.color = '#D1D5DB')}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: TEAL, flexShrink: 0 }} /> {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches & Contact */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Inter', fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', marginBottom: 24 }}>OUR BRANCHES & CONTACT</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 14, marginBottom: 20 }}>
              {branches.map(b => (
                <div key={b.city} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <MapPin size={13} color={TEAL} /> {b.city.replace(' (Head Office)', '').replace(' (UAE)', '')}
                </div>
              ))}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, borderTop: '1px solid #374151', paddingTop: 16 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Phone size={13} color={TEAL} /> {PHONE_SHORT}</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Mail size={13} color={TEAL} /> {EMAIL}</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Globe size={13} color={TEAL} /> {WEBSITE}</li>
            </ul>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 13, border: '1px solid #374151', borderRadius: 6, padding: '10px 16px', color: '#D1D5DB', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1F2937')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              Connect with us on WhatsApp <MessageCircle size={17} color={WHATSAPP_GREEN} />
            </a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #374151', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 12, color: '#6B7280' }}>
          <div>© 2025 A1 Taxcellent & Associates. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {[{ label: 'Privacy Policy', path: '/privacy' }, { label: 'Terms & Conditions', path: '/terms' }].map((l, i) => (
              <span key={l.path} style={{ display: 'flex', gap: 12 }}>
                {i > 0 && <span>|</span>}
                <button onClick={() => navigate(l.path)} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
                  onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}>{l.label}</button>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`.footer-grid { @media (max-width: 900px) { grid-template-columns: 1fr 1fr !important; } @media (max-width: 560px) { grid-template-columns: 1fr !important; } }`}</style>
    </footer>
  )
}
