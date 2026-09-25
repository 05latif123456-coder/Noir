import { useEffect, useState, type ReactNode } from 'react'
import { site } from '../data/site'
import { ArrowUpRight, CloseIcon, MenuIcon } from './Icons'
import { MusicControl } from './MusicControl'
import { ThemeToggle } from './ThemeToggle'

export function SiteShell({ children, path }: { children: ReactNode; path: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [path])
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const navigate = (href: string) => {
    if (href.startsWith('http')) return
    window.history.pushState({}, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return <div className="app-shell">
    <header className={`site-header ${open ? 'is-open' : ''}`}>
      <a className="wordmark" href="/" onClick={(event) => { event.preventDefault(); navigate('/') }} aria-label="NOIR home">NOIR<span className="wordmark-dot">.</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {site.navigation.map((item) => <a key={item.href} className={path === item.href ? 'active' : ''} href={item.href} onClick={(event) => { event.preventDefault(); navigate(item.href) }}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <a className="header-reserve" href="/reserve" onClick={(event) => { event.preventDefault(); navigate('/reserve') }}>Reserve <ArrowUpRight /></a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <CloseIcon /> : <MenuIcon />}</button>
      </div>
      <div className="mobile-menu" id="mobile-menu" aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <span className="eyebrow">Paris · 09</span>
          <nav aria-label="Mobile navigation">
            {site.navigation.map((item, index) => <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); navigate(item.href) }}><span>0{index + 1}</span>{item.label}</a>)}
            <a href="/reserve" onClick={(event) => { event.preventDefault(); navigate('/reserve') }}><span>04</span>Reserve a table</a>
          </nav>
          <div className="mobile-menu-foot"><span>{site.phone}</span><span>{site.hours[1][0]}</span></div>
        </div>
      </div>
    </header>
    <main id="main-content">{children}</main>
    <Footer navigate={navigate} />
    <MusicControl />
  </div>
}

function Footer({ navigate }: { navigate: (href: string) => void }) {
  return <footer className="site-footer">
    <div className="footer-top">
      <a className="wordmark footer-mark" href="/" onClick={(event) => { event.preventDefault(); navigate('/') }}>NOIR<span className="wordmark-dot">.</span></a>
      <p>For nights with a little more<br />to say.</p>
      <a className="footer-reserve" href="/reserve" onClick={(event) => { event.preventDefault(); navigate('/reserve') }}>Reserve your table <ArrowUpRight /></a>
    </div>
    <div className="footer-bottom">
      <span>{site.address.replace('\n', ' · ')}</span>
      <span>© NOIR 2026</span>
      <div className="footer-links"><a href="https://www.instagram.com/">Instagram</a><a href="/about" onClick={(event) => { event.preventDefault(); navigate('/about') }}>Journal</a></div>
    </div>
  </footer>
}
