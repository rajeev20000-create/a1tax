import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { NAVY, TEAL, WHATSAPP_GREEN, BORDER, PHONE_TEL, WHATSAPP_LINK } from '@/lib/theme'
import logo from '@/assets/logo/logo.png'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  function go(path: string) {
    navigate(path)
    setOpen(false)
  }

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 1000,
      background: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 150 }}>
        <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
          <img src={logo} alt="A1 Taxcellent and Associates" style={{ height: 130, width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: TEAL, marginTop: 1, whiteSpace: 'nowrap', textAlign: 'center' }}>
            Complete Financial Solution Under One Roof
          </span>
        </Link>

        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
          {links.map((l) => {
            const isActive = pathname === l.path
            return (
              <button key={l.path} onClick={() => go(l.path)} style={{
                position: 'relative', background: 'none', border: 'none',
                color: isActive ? TEAL : '#374151', fontSize: 14, fontWeight: 600,
                padding: '6px 0', cursor: 'pointer', transition: 'color 0.2s', fontFamily: 'Inter', letterSpacing: 0,
                borderBottom: isActive ? `2px solid ${TEAL}` : '2px solid transparent',
              }}
                onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = TEAL }}
                onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#374151' }}
              >
                {l.label.toUpperCase()}
              </button>
            )
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="hidden-mobile">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" style={{
            width: 40, height: 40, borderRadius: '50%', border: `1px solid ${WHATSAPP_GREEN}`, color: WHATSAPP_GREEN,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s, color 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = WHATSAPP_GREEN; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = WHATSAPP_GREEN }}>
            <MessageCircle size={18} />
          </a>
          <a href={PHONE_TEL} title="Call us" aria-label="Call us" style={{
            width: 40, height: 40, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: TEAL, color: '#fff', border: 'none', flexShrink: 0, transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0f766e')}
            onMouseLeave={e => (e.currentTarget.style.background = TEAL)}>
            <Phone size={16} />
          </a>
        </div>

        <button onClick={() => setOpen(o => !o)} style={{
          display: 'none', background: 'none', border: 'none', color: NAVY, cursor: 'pointer', marginLeft: 'auto',
        }} className="show-mobile" aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ background: '#ffffff', padding: '16px 24px 24px', borderTop: `1px solid ${BORDER}` }}>
          {links.map((l) => (
            <button key={l.path} onClick={() => go(l.path)} style={{
              display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none',
              color: pathname === l.path ? TEAL : '#111827', fontSize: 15, fontWeight: pathname === l.path ? 700 : 600, padding: '12px 0',
              borderBottom: `1px solid ${BORDER}`, cursor: 'pointer', fontFamily: 'Inter',
            }}>{l.label}</button>
          ))}
          <button onClick={() => go('/contact')} style={{
            marginTop: 16, width: '100%', background: TEAL,
            color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0',
            fontSize: 16, lineHeight: '24px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter',
          }}>Book Free Consultation</button>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 1101px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
