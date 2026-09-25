import { useState } from 'react'
import type { MenuItem } from '../types'
import { Reveal } from './Reveal'

export function UnwrittenMenu({ items }: { items: MenuItem[] }) {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return <section className="unwritten-menu section-pad" aria-labelledby="unwritten-menu-title">
    <div className="section-heading-row"><div><span className="eyebrow">A menu in fragments</span><h2 id="unwritten-menu-title">The Unwritten<br /><em>Menu.</em></h2></div><p className="unwritten-intro">Some things are better discovered than announced. Open one line and let the evening take shape.</p></div>
    <div className="unwritten-list">
      {items.map((item, index) => {
        const isOpen = openItem === item.name
        return <Reveal key={item.name} delay={index * 70}>
          <article className={`unwritten-item ${isOpen ? 'is-open' : ''}`}>
            <button type="button" className="unwritten-trigger" aria-expanded={isOpen} onClick={() => setOpenItem(isOpen ? null : item.name)}>
              <span className="unwritten-number">0{index + 1}</span>
              <span className="unwritten-name">{item.name}</span>
              <span className="unwritten-action">{isOpen ? 'Close' : 'Open the line'} <i aria-hidden="true">{isOpen ? '−' : '+'}</i></span>
            </button>
            <div className="unwritten-reveal" aria-hidden={!isOpen}>
              <div className="unwritten-reveal-image">{item.image && <img src={item.image} alt={`${item.name} dish`} loading="lazy" draggable={false} onError={(event) => { event.currentTarget.removeAttribute('src'); event.currentTarget.classList.add('image-missing') }} onContextMenu={(event) => event.preventDefault()} />}</div>
              <div className="unwritten-copy"><span className="eyebrow">{item.note ?? 'A quiet discovery'}</span><p>{item.description}</p><span className="menu-price">€{item.price}</span></div>
            </div>
          </article>
        </Reveal>
      })}
    </div>
  </section>
}
