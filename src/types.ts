export type Mood = 'ember' | 'mineral' | 'nocturne'

export type MenuItem = {
  name: string
  description: string
  price: string
  mood: Mood
  image?: string
  note?: string
}

export type MenuCategory = {
  name: string
  eyebrow: string
  items: MenuItem[]
}

export type GalleryImage = {
  src: string
  alt: string
  label: string
  position: string
  className: string
}

export type MarketMemoryStep = {
  number: string
  label: string
  title: string
  description: string
  src: string
  alt: string
}

export type TableView = {
  id: string
  name: string
  view: string
  detail: string
  atmosphere: string
}

export type ChefNote = {
  text: string
  signature: string
  time: string
}
