import { useRef, useState } from 'react'
import { chefNotes } from '../data/site'

export function ChefMessage() {
  const [index, setIndex] = useState(0)
  const note = chefNotes[index]
  const drag = useRef({ startX: 0, dragging: false })

  const goTo = (next: number) => setIndex((next + chefNotes.length) % chefNotes.length)

  const onPointerDown = (event: React.PointerEvent) => {
    drag.current = { startX: event.clientX, dragging: true }
  }
  const onPointerUp = (event: React.PointerEvent) => {
    if (!drag.current.dragging) return
    drag.current.dragging = false
    const delta = event.clientX - drag.current.startX
    if (Math.abs(delta) > 48) goTo(index + (delta < 0 ? 1 : -1))
  }

  return <section className="chef-message section-pad" aria-labelledby="chef-message-title" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
    <div className="chef-message-inner">
      <span className="eyebrow">A note from the kitchen</span>
      <p id="chef-message-title" key={index}>“{note.text}”</p>
      <div className="chef-message-meta"><span>{note.signature}</span><span>{note.time}</span></div>
      <div className="chef-message-nav">
        <button type="button" className="chef-message-arrow" aria-label="Previous note" onClick={() => goTo(index - 1)}>←</button>
        <span className="chef-message-count" aria-live="polite"><b>{String(index + 1).padStart(2, '0')}</b> / {String(chefNotes.length).padStart(2, '0')}</span>
        <button type="button" className="chef-message-arrow" aria-label="Next note" onClick={() => goTo(index + 1)}>→</button>
      </div>
    </div>
  </section>
}
