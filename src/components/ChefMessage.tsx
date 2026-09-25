import { useState } from 'react'
import { chefNotes } from '../data/site'

export function ChefMessage() {
  const [index, setIndex] = useState(0)
  const note = chefNotes[index]

  return <section className="chef-message section-pad" aria-labelledby="chef-message-title"><div className="chef-message-inner"><span className="eyebrow">A note from the kitchen</span><p id="chef-message-title">“{note.text}”</p><div className="chef-message-meta"><span>{note.signature}</span><span>{note.time}</span></div><button type="button" className="text-button" onClick={() => setIndex((current) => (current + 1) % chefNotes.length)}>Read another line <span>↻</span></button></div></section>
}
