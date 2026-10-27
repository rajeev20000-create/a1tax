import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FloatingButtons } from '@/components/FloatingButtons'
import { MemberModal } from '@/components/TeamProfiles'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Industries from '@/pages/Industries'
import Resources from '@/pages/Resources'
import Contact from '@/pages/Contact'
import { Privacy, Terms } from '@/pages/Legal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppShell() {
  const [activeMember, setActiveMember] = useState<string | null>(null)
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', overflowX: 'hidden' }}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About onSelectMember={setActiveMember} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <MemberModal activeKey={activeMember} onClose={() => setActiveMember(null)} />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  )
}
