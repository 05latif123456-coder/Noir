export type Mood = 'ember' | 'mineral' | 'nocturne'

export type MenuItem = {
  name: string
  description: string
  price: string
  mood: Mood
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
