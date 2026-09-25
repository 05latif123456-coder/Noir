import type { ReactNode } from 'react'
import { ArrowDown } from './Icons'

export function PageIntro({ kicker, title, detail }: { kicker: string; title: ReactNode; detail: string }) {
  return <section className="page-intro">
    <div className="page-intro-kicker"><span className="eyebrow">{kicker}</span><span className="intro-line" /></div>
    <h1>{title}</h1>
    <div className="page-intro-foot"><p>{detail}</p><ArrowDown /></div>
  </section>
}
