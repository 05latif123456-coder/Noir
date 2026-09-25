import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { site } from '../data/site'
import { ArrowUpRight, CloseIcon, MenuIcon } from './Icons'
import { MusicControl } from './MusicControl'
import { ThemeToggle } from './ThemeToggle'
import { CandleCursor } from './CandleCursor'

function PageTransition({ path }: { path: string }) {
  const previousPath = useRef(path)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (previousPath.current === path) return
    previousPath.current = path
    setVisible(true)
    const timeout = window.setTimeout(() => setVisible(false), 620)
    return () => window.clearTimeout(timeout)
  }, [path])

  if (!visible) return null
  return <div className="page-transition" role="status" aria-live="polite"><span className="page-transition-mark">NOIR<span>.</span></span><span className="page-transition-label">Entering the room</span></div>
}

export function SiteShell({ children, path }: { children: ReactNode; path: string }) {
  const [open, setOpen] = useState(false)
  const [leaving, setLeaving] = useState(false)

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

  const leaveSite = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setLeaving(true)
    window.setTimeout(() => { window.location.href = href }, 720)
  }

  return <div className="app-shell">
    <CandleCursor />
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
    <Footer navigate={navigate} onLeave={leaveSite} />
    <MusicControl />
    <PageTransition path={path} />
    {leaving && <div className="exit-overlay" role="status" aria-live="polite"><span className="page-transition-mark">NOIR<span>.</span></span><p>Until the next evening.</p></div>}
  </div>
}

function Footer({ navigate, onLeave }: { navigate: (href: string) => void; onLeave: (event: MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  return <footer className="site-footer">
    <div className="footer-top">
      <a className="wordmark footer-mark" href="/" onClick={(event) => { event.preventDefault(); navigate('/') }}>NOIR<span className="wordmark-dot">.</span></a>
      <p>For nights with a little more<br />to say.</p>
      <a className="footer-reserve" href="/reserve" onClick={(event) => { event.preventDefault(); navigate('/reserve') }}>Reserve your table <ArrowUpRight /></a>
    </div>
    <div className="footer-bottom">
      <span>{site.address.replace('\n', ' · ')}</span>
      <span>© NOIR 2026</span>
      <div className="footer-links"><a href="https://www.instagram.com/" onClick={(event) => onLeave(event, 'https://www.instagram.com/')}>Instagram</a><a href="/about" onClick={(event) => { event.preventDefault(); navigate('/about') }}>Journal</a><a href="https://www.instagram.com/" onClick={(event) => onLeave(event, 'https://www.instagram.com/')}>Leave the room <ArrowUpRight /></a></div>
    </div>
  </footer>
}
