import { useEffect, useState } from 'react'
import { windowMode } from '../data/site'
import { CloseIcon } from './Icons'

export function WindowMode() {
  const [open, setOpen] = useState(false)
  const [scene, setScene] = useState(0)

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  const nextScene = () => setScene((current) => (current + 1) % windowMode.scenes.length)

  return <section className="window-mode section-pad" aria-labelledby="window-mode-title">
    <div className="window-mode-card" data-candle-zone style={{ backgroundImage: `linear-gradient(90deg, rgba(16,18,17,.82), rgba(16,18,17,.2)), url(${windowMode.preview})` }}>
      <div className="window-mode-copy"><span className="eyebrow">The Window Mode</span><h2 id="window-mode-title">Stay for<br /><em>the city.</em></h2><p>{windowMode.description}</p><button type="button" className="text-button light" onClick={() => setOpen(true)}>Open the window <span>↗</span></button></div>
    </div>
    {open && <div className="window-mode-overlay" role="dialog" aria-modal="true" aria-labelledby="window-mode-dialog-title"><div className="window-mode-scene" style={{ backgroundImage: `linear-gradient(90deg, rgba(16,18,17,.52), rgba(16,18,17,.12)), url(${windowMode.scenes[scene].src})` }}><button type="button" className="window-mode-close" aria-label="Close window mode" onClick={() => setOpen(false)}><CloseIcon /></button><div className="window-mode-overlay-copy"><span className="eyebrow">NOIR · {String(scene + 1).padStart(2, '0')}</span><h2 id="window-mode-dialog-title">{windowMode.title}</h2><p>{windowMode.description}</p><button type="button" className="text-button light" onClick={nextScene}>Change the view <span>↻</span></button></div></div></div>}
  </section>
}
