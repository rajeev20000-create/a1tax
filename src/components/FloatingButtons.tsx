import { MessageCircle, Phone } from 'lucide-react'
import { TEAL, PHONE_TEL, WHATSAPP_LINK } from '@/lib/theme'

export function FloatingButtons() {
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 900, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="animate-pulse-soft" title="WhatsApp" aria-label="Chat with us on WhatsApp" style={{ width: 52, height: 52, borderRadius: '50%', background: '#25D366', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37,211,102,0.4)' }}>
        <MessageCircle size={22} />
      </a>
      <a href={PHONE_TEL} title="Call" aria-label="Call us" style={{ width: 52, height: 52, borderRadius: '50%', background: TEAL, color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(13,148,136,0.4)' }}>
        <Phone size={20} />
      </a>
    </div>
  )
}
