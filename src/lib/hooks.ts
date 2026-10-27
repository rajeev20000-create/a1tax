import { useState, useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export function useCountUp(target: number, suffix = '', start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let current = 0
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setVal(current)
      if (current >= target) clearInterval(timer)
    }, 24)
    return () => clearInterval(timer)
  }, [target, start])
  return `${val}${suffix}`
}
