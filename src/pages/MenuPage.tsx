import { useState } from 'react'
import { menuCategories } from '../data/site'
import { PageIntro } from '../components/PageIntro'
import { MenuList } from '../components/MenuList'

export function MenuPage() {
  const [active, setActive] = useState('All')
  const categories = active === 'All' ? menuCategories : menuCategories.filter((category) => category.name === active)
  return <>
    <PageIntro kicker="The menu · Spring 2026" title={<>A sequence of<br /><em>quiet surprises.</em></>} detail="Our menu follows the market and changes with the room. Choose a full progression, or stay a little longer with the à la carte." />
    <section className="menu-page-content section-pad">
      <div className="menu-filter" role="tablist" aria-label="Menu categories">{['All', ...menuCategories.map((category) => category.name)].map((category) => <button key={category} className={active === category ? 'active' : ''} role="tab" aria-selected={active === category} onClick={() => setActive(category)}>{category}</button>)}</div>
      <div className="menu-note-row"><span className="eyebrow">À la carte</span><p>Our tasting menu is available nightly at €145. Wine pairings begin at €68.</p></div>
      <MenuList categories={categories} />
    </section>
  </>
}
