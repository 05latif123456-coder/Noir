import { marketMemory } from '../data/site'
import { Reveal } from './Reveal'

export function MarketMemory() {
  return <section className="market-memory section-pad" aria-labelledby="market-memory-title">
    <div className="section-heading-row"><div><span className="eyebrow">A dish, before it arrives</span><h2 id="market-memory-title">From Market<br /><em>to Memory.</em></h2></div><p className="market-memory-intro">Follow the quiet distance between an ingredient and the moment it becomes yours.</p></div>
    <div className="market-memory-grid">
      {marketMemory.map((step, index) => <Reveal key={step.number} delay={index * 45}><article className={`market-memory-step market-memory-step-${index + 1}`} data-candle-zone><div className="market-memory-image"><img src={step.src} alt={step.alt} loading="lazy" draggable={false} onError={(event) => { event.currentTarget.removeAttribute('src'); event.currentTarget.classList.add('image-missing') }} onContextMenu={(event) => event.preventDefault()} /></div><div className="market-memory-copy"><span className="eyebrow">{step.number} · {step.label}</span><h3>{step.title}</h3><p>{step.description}</p></div></article></Reveal>)}
    </div>
  </section>
}
