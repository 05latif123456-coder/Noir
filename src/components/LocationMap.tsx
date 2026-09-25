import { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { site } from '../data/site'
import { ArrowUpRight } from './Icons'

const noirPin = L.divIcon({
  className: 'noir-map-pin',
  html: '<span class="noir-map-pin-core"></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -16],
})

function DefaultLocationControl({ position, zoom }: { position: [number, number]; zoom: number }) {
  const map = useMap()

  useEffect(() => {
    const control = new L.Control({ position: 'topleft' })
    const resetView = () => map.setView(position, zoom, { animate: true })
    let button: HTMLButtonElement | null = null

    control.onAdd = () => {
      button = L.DomUtil.create('button', 'noir-map-default-btn') as HTMLButtonElement
      button.type = 'button'
      button.title = 'Return to NOIR'
      button.setAttribute('aria-label', 'Return map to NOIR')
      button.innerHTML = '<svg class="noir-map-default-glyph" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v4M12 18v4M2 12h4M18 12h4"></path></svg>'
      L.DomEvent.on(button, 'click', resetView)
      L.DomEvent.disableClickPropagation(button)
      L.DomEvent.disableScrollPropagation(button)
      return button
    }

    control.addTo(map)

    return () => {
      if (button) L.DomEvent.off(button, 'click', resetView)
      control.remove()
    }
  }, [map, position, zoom])

  return null
}

export function LocationMap() {
  const position: [number, number] = [site.map.latitude, site.map.longitude]

  return <div className="location-map-shell">
    <MapContainer center={position} zoom={site.map.zoom} scrollWheelZoom={true} zoomControl={false} className="location-map" aria-label="Map showing the NOIR restaurant location">
      <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <DefaultLocationControl position={position} zoom={site.map.zoom} />
      <ZoomControl position="topright" />
      <Marker position={position} icon={noirPin}>
        <Popup>
          <div className="map-popup"><strong>NOIR</strong><span>{site.address.replace('\n', ' · ')}</span><a href={site.map.googleMapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight /></a></div>
        </Popup>
      </Marker>
    </MapContainer>
  </div>
}
