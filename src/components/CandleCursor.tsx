import { useEffect, useRef } from 'react'

export function CandleCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor || !window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const move = (event: PointerEvent) => {
      const target = event.target as HTMLElement
      const zone = target.closest('[data-candle-zone]')
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
      cursor.classList.toggle('is-visible', Boolean(zone))
    }
    document.addEventListener('pointermove', move, { passive: true })
    return () => document.removeEventListener('pointermove', move)
  }, [])

  return <span ref={cursorRef} className="candle-cursor" aria-hidden="true" />
}
