import { PageIntro } from '../components/PageIntro'
import { Reveal } from '../components/Reveal'
import { ArrowUpRight } from '../components/Icons'

export function AboutPage({ navigate }: { navigate: (href: string) => void }) {
  return <>
    <PageIntro kicker="The world of NOIR" title={<>A room with<br /><em>its own weather.</em></>} detail="Somewhere between the last train and the first light, we make a table for the curious." />
    <section className="about-lead section-pad"><div className="about-lead-image" role="img" aria-label="Textured dark stone wall and a single warm light in the NOIR dining room" /><Reveal><p className="display-quote">NOIR is less a restaurant than a change in atmosphere.</p></Reveal></section>
    <section className="editorial-block section-pad"><div className="editorial-label"><span className="eyebrow">01 — The restaurant</span></div><div className="editorial-copy"><h2>French technique.<br /><em>Night logic.</em></h2><p>We cook with the precision of a classic French kitchen, then leave the window open. A dish can carry the memory of a Lyonnaise sauce and the clean edge of something not yet named.</p><p>The room was built around the same idea: charcoal stone, pale oak, linen, a line of copper catching candlelight. Nothing asks to be photographed. Everything rewards a second look.</p></div></section>
    <section className="about-split-image section-pad"><div className="about-split-image-main" role="img" aria-label="A chef's hands finishing a fine dining plate" /><div className="about-split-image-side"><span className="eyebrow">02 — The gesture</span><p>“The best ingredient is attention.”</p><span className="signature">Élise Moreau</span></div></section>
    <section className="editorial-block editorial-reverse section-pad"><div className="editorial-label"><span className="eyebrow">03 — The kitchen</span></div><div className="editorial-copy"><h2>What the market<br /><em>leaves behind.</em></h2><p>Chef Élise Moreau cooks in conversation with the market at Rungis and the small growers beyond Paris. The menu is never planned too far ahead; it is listened for.</p><a className="text-button" href="/menu" onClick={(event) => { event.preventDefault(); navigate('/menu') }}>See tonight’s menu <span>↗</span></a></div></section>
    <section className="about-pullquote"><div className="pullquote-orbit"><span>NOIR</span></div><p>“A dinner should give you a new way to remember the city you are in.”</p><span className="eyebrow">— Élise Moreau, chef & founder</span></section>
    <section className="about-cta section-pad"><span className="eyebrow">When you’re ready</span><h2>Come into<br /><em>the dark.</em></h2><button className="copper-button" onClick={() => navigate('/reserve')}>Reserve a table <ArrowUpRight /></button></section>
  </>
}
