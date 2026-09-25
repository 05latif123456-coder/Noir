import type { MenuCategory } from '../types'
import { Reveal } from './Reveal'

export function MenuList({ categories, compact = false }: { categories: MenuCategory[]; compact?: boolean }) {
  return <div className={`menu-list ${compact ? 'menu-list-compact' : ''}`}>
    {categories.map((category) => <section className="menu-category" key={category.name}>
      <div className="menu-category-heading"><span className="eyebrow">{category.eyebrow}</span><h2>{category.name}</h2></div>
      <div className="menu-items">
        {category.items.map((item, index) => <Reveal key={item.name} delay={index * 40}>
          <article className="menu-item">
            <div className="menu-item-main"><h3>{item.name}</h3>{item.note && <span className="menu-item-note">{item.note}</span>}<p>{item.description}</p></div>
            <span className="menu-price">€{item.price}</span>
          </article>
        </Reveal>)}
      </div>
    </section>)}
  </div>
}
