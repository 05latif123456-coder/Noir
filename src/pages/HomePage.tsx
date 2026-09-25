import { useState } from 'react'
import { gallery, menuCategories, moods, moodItems, site } from '../data/site'
import type { Mood } from '../types'
import { ArrowDown, ArrowUpRight } from '../components/Icons'
import { Reveal } from '../components/Reveal'
import { LocationMap } from '../components/LocationMap'
import { CandleCursor } from '../components/CandleCursor'
import { ChefMessage } from '../components/ChefMessage'
import { MarketMemory } from '../components/MarketMemory'
import { Table09 } from '../components/Table09'
import { UnwrittenMenu } from '../components/UnwrittenMenu'
import { WindowMode } from '../components/WindowMode'

function HomeDishImage({ src, name, className = '' }: { src?: string; name: string; className?: string }) {
  if (!src) return null
  return <img className={`home-dish-image ${className}`} src={src} alt={`${name} dish`} loading="lazy" draggable={false} onError={(event) => { event.currentTarget.removeAttribute('src'); event.currentTarget.classList.add('image-missing') }} onContextMenu={(event) => event.preventDefault()} />
}

export function HomePage({ navigate }: { navigate: (href: string) => void }) {
  const [mood, setMood] = useState<Mood>('ember')
  const selected = moods[mood]
  return <>
    <CandleCursor />
    <section className="hero" aria-labelledby="hero-title" data-candle-zone>
      <div className="hero-image" role="img" aria-label="Atmospheric fallback image for the NOIR opening" />
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" onError={(event) => { event.currentTarget.style.display = 'none' }}>
        <source src="/video/noir-entry.mp4" type="video/mp4" />
      </video>
      <div className="hero-shade" />
      <div className="hero-topline"><span>Paris · 09</span><span>Contemporary French dining</span><span>Est. 2026</span></div>
      <div className="hero-content">
        <p className="hero-kicker">A table for the in-between hours</p>
        <h1 id="hero-title">NOIR<span className="hero-title-mark">.</span></h1>
        <div className="hero-subline"><span>{site.address.split('\n')[0]}</span><span>Paris, France</span></div>
      </div>
      <a className="hero-scroll" href="#opening"><span>Enter the evening</span><ArrowDown /></a>
    </section>

    <section className="opening section-pad" id="opening">
      <div className="section-index">01 <span /></div>
      <div className="opening-grid">
        <Reveal><p className="display-quote">A room for the hour when Paris changes its voice.</p></Reveal>
        <Reveal delay={120}><div className="body-copy"><p>NOIR is a contemporary French table shaped by shadow, season, and the instincts of the night. Our menu moves between the familiar and the unnameable — a warm loaf, a cold flame, the last green thing from the market.</p><p>Come for dinner. Stay until the room softens.</p><a className="text-button" href="/about" onClick={(event) => { event.preventDefault(); navigate('/about') }}>Discover our world <span>↗</span></a></div></Reveal>
      </div>
      <div className="opening-stamp"><span>48° 52′ N</span><span>2° 20′ E</span></div>
    </section>

    <section className={`night-index section-pad tone-${mood}`}>
      <div className="night-index-sticky" aria-hidden="true"><div className="night-index-backdrop" /></div>
      <div className="night-index-inner">
        <div className="section-index">02 <span /></div>
        <div className="night-index-head"><div><span className="eyebrow">The Night Index</span><h2>Choose a temperature<br />for the evening.</h2></div><p>There is no single way through NOIR. Follow the room, follow your appetite, or let us decide.</p></div>
        <div className="mood-switcher" role="tablist" aria-label="Choose an atmosphere">
          {(Object.keys(moods) as Mood[]).map((key) => <button key={key} className={mood === key ? 'selected' : ''} role="tab" aria-selected={mood === key} onClick={() => setMood(key)}><span>0{Object.keys(moods).indexOf(key) + 1}</span>{moods[key].label}<i /></button>)}
        </div>
        <div className="night-index-content"><div className="mood-copy"><span className="mood-detail">{selected.detail}</span><p>{selected.description}</p><a className="text-button" href="/menu" onClick={(event) => { event.preventDefault(); navigate('/menu') }}>Read the full menu <span>↗</span></a></div><div className="mood-dishes">{moodItems(mood).map((item) => <article key={item.name}><HomeDishImage src={item.image} name={item.name} /><span>{item.name}</span><small>{item.description}</small><b>€{item.price}</b></article>)}</div></div>
      </div>
    </section>

    <section className="menu-preview section-pad">
      <div className="section-index">03 <span /></div>
      <div className="section-heading-row"><div><span className="eyebrow">From the kitchen</span><h2>Small gestures.<br /><em>Long memory.</em></h2></div><a className="outlined-button" href="/menu" onClick={(event) => { event.preventDefault(); navigate('/menu') }}>View the menu <ArrowUpRight /></a></div>
      <div className="featured-menu">{menuCategories[1].items.slice(0, 3).map((item, index) => <Reveal key={item.name} delay={index * 80}><article className="featured-item"><span className="featured-number">0{index + 1}</span><HomeDishImage src={item.image} name={item.name} className="featured-dish-image" /><div><h3>{item.name}</h3><p>{item.description}</p></div><span className="menu-price">€{item.price}</span></article></Reveal>)}</div>
    </section>

    <UnwrittenMenu items={menuCategories[1].items.slice(0, 3)} />
    <MarketMemory />
    <Table09 />

    <section className="image-story" data-candle-zone>
      <div className="image-story-image" role="img" aria-label="Chef plating a dish in the NOIR kitchen" />
      <div className="image-story-overlay"><span className="eyebrow">The kitchen, 21:47</span><p>Every plate is a conversation between what the market gives us and what the night asks for.</p><a className="text-button light" href="/about" onClick={(event) => { event.preventDefault(); navigate('/about') }}>Meet the people behind NOIR <span>↗</span></a></div>
    </section>

    <ChefMessage />
    <WindowMode />

    <section className="gallery-section section-pad">
      <div className="section-index">04 <span /></div>
      <div className="section-heading-row"><div><span className="eyebrow">A glimpse inside</span><h2>Look closer.</h2></div><span className="gallery-note">The details matter<br />after midnight.</span></div>
      <div className="gallery-grid">{gallery.map((image, index) => <Reveal key={image.src} className={image.className} delay={index * 60}><figure><img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} draggable={false} onError={(event) => { event.currentTarget.removeAttribute('src'); event.currentTarget.classList.add('image-missing') }} onContextMenu={(event) => event.preventDefault()} style={{ objectPosition: image.position }} /><figcaption><span>{image.label}</span><span>0{index + 1}</span></figcaption></figure></Reveal>)}</div>
    </section>

    <section className="visit-section section-pad">
      <div className="section-index">05 <span /></div>
      <div className="visit-grid"><div><span className="eyebrow">Find us in Paris</span><h2>Follow the<br /><em>low light.</em></h2></div><div className="visit-details"><p className="large-address">{site.address.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</p><div className="location-map-heading"><span className="eyebrow">Find the room</span><p>At the edge of the grands boulevards, where the city stays awake.</p></div><LocationMap /><div className="visit-meta"><div><span className="eyebrow">Hours</span>{site.hours.map(([day, time]) => <p key={day}><span>{day}</span><b>{time}</b></p>)}</div><div><span className="eyebrow">Contact</span><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a></div></div><a className="copper-button" href="/reserve" onClick={(event) => { event.preventDefault(); navigate('/reserve') }}>Reserve your experience <span>↗</span></a></div></div>
    </section>
  </>
}
