import { useState } from 'react'
import { tableViews } from '../data/site'

function randomTable(current: string) {
  const available = tableViews.filter((table) => table.id !== current)
  return available[Math.floor(Math.random() * available.length)] ?? tableViews[0]
}

export function Table09() {
  const [selected, setSelected] = useState(() => tableViews[Math.floor(Math.random() * tableViews.length)])

  return <section className="table-09 section-pad" aria-labelledby="table-09-title">
    <div className="table-09-layout">
      <div><span className="eyebrow">A room with four readings</span><h2 id="table-09-title">Table<br /><em>09.</em></h2><p className="table-09-intro">There is no bad seat at NOIR. Only a different way to read the evening.</p></div>
      <div className="table-09-experience">
        <div className="table-09-map" aria-label="Illustrated selection of four fictional NOIR tables">
          {tableViews.map((table) => <button key={table.id} type="button" className={selected.id === table.id ? 'selected' : ''} aria-label={`Select ${table.name}`} aria-pressed={selected.id === table.id} onClick={() => setSelected(table)}><span>{table.id}</span></button>)}
          <span className="table-09-room-line" aria-hidden="true" />
        </div>
        <div className="table-09-detail" aria-live="polite"><span className="eyebrow">{selected.name} · {selected.atmosphere}</span><h3>{selected.view}</h3><p>{selected.detail}</p><button type="button" className="text-button" onClick={() => setSelected(randomTable(selected.id))}>Let the room decide <span>↻</span></button></div>
      </div>
    </div>
  </section>
}
