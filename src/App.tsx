import { useEffect, useState } from 'react'
import { SiteShell } from './components/SiteShell'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { AboutPage } from './pages/AboutPage'
import { ReservationPage } from './pages/ReservationPage'

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'NOIR — Contemporary French dining in Paris', description: 'A contemporary French table shaped by shadow, season, and the after-hours character of Paris.' },
  '/menu': { title: 'The menu — NOIR Paris', description: 'Explore NOIR’s contemporary French menu: a sequence of quiet surprises, shaped by the market.' },
  '/about': { title: 'The world of NOIR — Paris', description: 'Meet the people, gestures, and night logic behind NOIR contemporary French restaurant in Paris.' },
  '/reserve': { title: 'Reservations — NOIR Paris', description: 'Request a table at NOIR, a contemporary French restaurant in the 9th arrondissement of Paris.' },
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/')
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname.replace(/\/$/, '') || '/')
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  useEffect(() => {
    const meta = pageMeta[path] ?? pageMeta['/']
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://noir-paris.example${path === '/' ? '/' : path}`)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [path])

  const navigate = (href: string) => {
    window.history.pushState({}, '', href)
    setPath(href)
  }
  const page = path === '/menu' ? <MenuPage /> : path === '/about' ? <AboutPage navigate={navigate} /> : path === '/reserve' ? <ReservationPage /> : <HomePage navigate={navigate} />
  return <SiteShell path={path}>{page}</SiteShell>
}
