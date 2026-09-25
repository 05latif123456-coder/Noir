import { useEffect, useRef } from 'react'

/** Walks up from the element under the pointer until it finds an opaque background color. */
function hasLightBackground(element: Element | null): boolean {
  let current: Element | null = element
  while (current) {
    const color = getComputedStyle(current).backgroundColor
    if (color && !color.startsWith('rgba(0, 0, 0, 0)')) {
      const [r, g, b] = color.match(/\d+/g)!.map(Number)
      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
      return luminance > 0.55
    }
    current = current.parentElement
  }
  return false
}

export function CandleCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor || !window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let lastTarget: Element | null = null
    const move = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      cursor.style.left = `${event.clientX}px`
      cursor.style.top = `${event.clientY}px`
      cursor.classList.add('is-visible')
      if (target !== lastTarget) {
        lastTarget = target
        cursor.classList.toggle('is-inverted', target ? hasLightBackground(target) : false)
      }
    }
    document.addEventListener('pointermove', move, { passive: true })
    return () => document.removeEventListener('pointermove', move)
  }, [])

  return <span ref={cursorRef} className="candle-cursor" aria-hidden="true" />
}