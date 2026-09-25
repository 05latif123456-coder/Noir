import type { GalleryImage, MenuCategory, Mood } from '../types'

export const site = {
  name: 'NOIR',
  location: 'Paris, France',
  tagline: 'A contemporary French table after dark.',
  address: '14 boulevard Montmartre\n75009 Paris, France',
  phone: '+33 (0)1 84 80 09 17',
  email: 'bonjour@noir-paris.example',
  map: {
    latitude: 48.8719442,
    longitude: 2.3416045,
    zoom: 16,
    googleMapsUrl: 'https://www.google.com/maps/place/Hard+Rock+Cafe+Paris/@48.8683557,2.3522421,15z/data=!4m6!3m5!1s0x47e66e3e98c5d695:0x94e5dd63f243f837!8m2!3d48.8719442!4d2.3416045!16s%2Fg%2F1tcz7my5?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D',
  },
  hours: [
    ['Tuesday — Thursday', '19:00 — 23:30'],
    ['Friday — Saturday', '19:00 — 00:30'],
    ['Sunday — Monday', 'Closed'],
  ],
  navigation: [
    { label: 'The table', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Our world', href: '/about' },
  ],
  theme: {
    ink: '#101211',
    bone: '#E9E4DA',
    lichen: '#A9B0AA',
    copper: '#B46A4D',
    slate: '#303936',
    candle: '#D8C9B0',
  },
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Journal', href: '/about' },
  ],
  soundtrack: [
    { src: '/audio/sway.mp3', label: 'Sway', artist: 'Michael Bubl\u00e9' },
    { src: '/audio/blue-suit-blues.mp3', label: 'Blue Suit Blues', artist: 'Midnight Chicago' },
    { src: '/audio/parisian-cafe.mp3', label: 'Parisian Cafe', artist: 'Nocturne' },
  ],
}

export const moods: Record<Mood, { label: string; description: string; detail: string }> = {
  ember: {
    label: 'Ember',
    description: 'The room after the first pour — warm, aromatic, unhurried.',
    detail: 'Smoke · citrus · soft heat',
  },
  mineral: {
    label: 'Mineral',
    description: 'A colder line through the menu, cut with salt, stone and green.',
    detail: 'Sea · leaf · chalk',
  },
  nocturne: {
    label: 'Nocturne',
    description: 'The late seating — deep, fermented, and built for another glass.',
    detail: 'Cocoa · root · umami',
  },
}

export const menuCategories: MenuCategory[] = [
  {
    name: 'Entrées',
    eyebrow: 'The opening notes',
    items: [
      { name: 'Huître Gillardeau, feuille de figuier', description: 'Oyster, fig leaf oil, green apple, smoked crème fraîche', price: '28', mood: 'mineral' },
      { name: 'Betterave brûlée', description: 'Chioggia beet, blackcurrant vinegar, aged goat curd, rye', price: '24', mood: 'ember' },
      { name: 'Langoustine, safran froid', description: 'Raw langoustine, saffron consommé, fennel pollen, finger lime', price: '32', mood: 'mineral' },
      { name: 'Pigeon en deux temps', description: 'Pressed leg, quince, pink pepper and a clear jus', price: '30', mood: 'nocturne' },
    ],
  },
  {
    name: 'Plats',
    eyebrow: 'The centre of gravity',
    items: [
      { name: 'Merlu de ligne, algue nori', description: 'Line-caught hake, nori beurre blanc, leek ash, sea herbs', price: '52', mood: 'mineral', note: 'A quiet signature' },
      { name: 'Canard de Challans', description: 'Roasted breast, fermented cherry, black garlic, bitter leaves', price: '58', mood: 'nocturne' },
      { name: 'Céleri-rave braisé', description: 'Celeriac, burnt hay cream, walnut, winter truffle', price: '44', mood: 'ember' },
      { name: 'Agneau de lait, ail noir', description: 'Milk-fed lamb, black garlic, anchovy, preserved lemon', price: '62', mood: 'nocturne' },
    ],
  },
  {
    name: 'Desserts',
    eyebrow: 'The last light',
    items: [
      { name: 'Poire · verjus · poivre long', description: 'Poached pear, verjus granita, long pepper meringue', price: '19', mood: 'mineral' },
      { name: 'Chocolat noir, huile d’olive', description: '70% chocolate crémeux, Arbequina oil, buckwheat crisp', price: '21', mood: 'nocturne' },
      { name: 'Millefeuille de saison', description: 'Feuilletage minute, vanilla, toasted milk and fruit', price: '20', mood: 'ember' },
    ],
  },
  {
    name: 'Fromages',
    eyebrow: 'A little longer',
    items: [
      { name: 'Le chariot de la cave', description: 'Five affinages chosen nightly by our maître de maison', price: '24', mood: 'ember' },
    ],
  },
  {
    name: 'Boissons',
    eyebrow: 'In the glass',
    items: [
      { name: 'Accord sans détour', description: 'Four glasses, chosen around the evening’s first gesture', price: '68', mood: 'mineral' },
      { name: 'Accord nocturne', description: 'Six glasses, from Jura whites to old-vine reds', price: '96', mood: 'nocturne' },
      { name: 'Thé fumé au pin', description: 'Warm pine tips, lapsang, bay leaf and lemon verbena', price: '12', mood: 'ember' },
    ],
  },
]

export const gallery: GalleryImage[] = [
  { src: '/images/03.webp', alt: 'Candlelit tables in a dark contemporary dining room', label: 'The room', position: 'center', className: 'gallery-wide' },
  { src: '/images/04.webp', alt: 'Fine dining plate with a composed arrangement of vegetables', label: 'The plate', position: 'center', className: 'gallery-tall' },
  { src: '/images/05.webp', alt: 'Fresh green herbs and ingredients on a stone surface', label: 'The market', position: 'center', className: 'gallery-small' },
  { src: '/images/06.webp', alt: 'Chef working in a softly lit professional kitchen', label: 'The gesture', position: 'center', className: 'gallery-medium' },
  { src: '/images/07.webp', alt: 'Darkly styled contemporary dish with sauce and herbs', label: 'The detail', position: 'center', className: 'gallery-small' },
]

export const moodItems = (mood: Mood) => menuCategories.flatMap((category) => category.items.filter((item) => item.mood === mood)).slice(0, 3)
