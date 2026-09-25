import type { ChefNote, GalleryImage, MarketMemoryStep, MenuCategory, Mood, TableView } from '../types'

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
      { name: 'Huître Gillardeau, feuille de figuier', description: 'Oyster, fig leaf oil, green apple, smoked crème fraîche', price: '28', mood: 'mineral', image: '/images/11.webp' },
      { name: 'Betterave brûlée', description: 'Chioggia beet, blackcurrant vinegar, aged goat curd, rye', price: '24', mood: 'ember', image: '/images/12.webp' },
      { name: 'Langoustine, safran froid', description: 'Raw langoustine, saffron consommé, fennel pollen, finger lime', price: '32', mood: 'mineral', image: '/images/13.webp' },
      { name: 'Pigeon en deux temps', description: 'Pressed leg, quince, pink pepper and a clear jus', price: '30', mood: 'nocturne', image: '/images/14.webp' },
    ],
  },
  {
    name: 'Plats',
    eyebrow: 'The centre of gravity',
    items: [
      { name: 'Merlu de ligne, algue nori', description: 'Line-caught hake, nori beurre blanc, leek ash, sea herbs', price: '52', mood: 'mineral', note: 'A quiet signature', image: '/images/15.webp' },
      { name: 'Canard de Challans', description: 'Roasted breast, fermented cherry, black garlic, bitter leaves', price: '58', mood: 'nocturne', image: '/images/16.webp' },
      { name: 'Céleri-rave braisé', description: 'Celeriac, burnt hay cream, walnut, winter truffle', price: '44', mood: 'ember', image: '/images/17.webp' },
      { name: 'Agneau de lait, ail noir', description: 'Milk-fed lamb, black garlic, anchovy, preserved lemon', price: '62', mood: 'nocturne', image: '/images/18.webp' },
    ],
  },
  {
    name: 'Desserts',
    eyebrow: 'The last light',
    items: [
      { name: 'Poire · verjus · poivre long', description: 'Poached pear, verjus granita, long pepper meringue', price: '19', mood: 'mineral', image: '/images/19.webp' },
      { name: 'Chocolat noir, huile d’olive', description: '70% chocolate crémeux, Arbequina oil, buckwheat crisp', price: '21', mood: 'nocturne', image: '/images/20.webp' },
      { name: 'Millefeuille de saison', description: 'Feuilletage minute, vanilla, toasted milk and fruit', price: '20', mood: 'ember', image: '/images/21.webp' },
    ],
  },
  {
    name: 'Fromages',
    eyebrow: 'A little longer',
    items: [
      { name: 'Le chariot de la cave', description: 'Five affinages chosen nightly by our maître de maison', price: '24', mood: 'ember', image: '/images/22.webp' },
    ],
  },
  {
    name: 'Boissons',
    eyebrow: 'In the glass',
    items: [
      { name: 'Accord sans détour', description: 'Four glasses, chosen around the evening’s first gesture', price: '68', mood: 'mineral', image: '/images/23.webp' },
      { name: 'Accord nocturne', description: 'Six glasses, from Jura whites to old-vine reds', price: '96', mood: 'nocturne', image: '/images/24.webp' },
      { name: 'Thé fumé au pin', description: 'Warm pine tips, lapsang, bay leaf and lemon verbena', price: '12', mood: 'ember', image: '/images/25.webp' },
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

export const marketMemory: MarketMemoryStep[] = [
  { number: '01', label: 'The market', title: 'Before the plate has a name', description: 'A cold morning selection: sea greens, dark roots, bruised citrus and the first quiet decision of the day.', src: '/images/26.webp', alt: 'Seasonal French ingredients arranged on dark stone before service' },
  { number: '02', label: 'The instinct', title: 'What the hand notices', description: 'The chef edits the market with touch, temperature and restraint, keeping only what the evening can carry.', src: '/images/27.webp', alt: 'Chef hand selecting a delicate seasonal ingredient in a dark kitchen' },
  { number: '03', label: 'The heat', title: 'A brief change of state', description: 'A flame, a pan, a burnt edge. The ingredient crosses from raw clarity into something warmer and less certain.', src: '/images/28.webp', alt: 'Seasonal ingredient meeting low flame in a refined restaurant kitchen' },
  { number: '04', label: 'The gesture', title: 'Nothing placed by accident', description: 'Sauce follows the curve of the plate. One leaf closes the composition. The smallest movement becomes a signature.', src: '/images/29.webp', alt: 'Chef finishing a contemporary French dish with a precise final gesture' },
  { number: '05', label: 'The plate', title: 'A memory with an edge', description: 'The finished dish keeps a trace of the market while becoming unmistakably NOIR: mineral, warm and quietly strange.', src: '/images/30.webp', alt: 'Contemporary French tasting-menu dish on a dark ceramic plate' },
  { number: '06', label: 'The room', title: 'Where the story lands', description: 'The plate leaves the pass and enters the low light, where conversation, wine and time complete it.', src: '/images/31.webp', alt: 'Finished dish arriving at a candlelit contemporary Paris dining table' },
]

export const tableViews: TableView[] = [
  { id: 'A', name: 'Table A', view: 'The low window', detail: 'A narrow view of Paris after dark, with the room reflected faintly in the glass.', atmosphere: 'Quiet / mineral' },
  { id: 'B', name: 'Table B', view: 'The pass', detail: 'A glimpse of the final gestures from the kitchen, close enough to hear the plates arrive.', atmosphere: 'Focused / warm' },
  { id: 'C', name: 'Table C', view: 'The stone wall', detail: 'The most private corner: charcoal stone, a small candle, and the longest pause between courses.', atmosphere: 'Deep / nocturne' },
  { id: 'D', name: 'Table D', view: 'The boulevard', detail: 'A front-row seat to the city’s movement, softened by linen, glass and low amber light.', atmosphere: 'Open / cinematic' },
]

export const chefNotes: ChefNote[] = [
  { text: 'The best ingredient is attention.', signature: 'Élise Moreau', time: '21:47 — between courses' },
  { text: 'A dish should leave before it explains itself.', signature: 'Élise Moreau', time: '22:16 — at the pass' },
  { text: 'We cook for the moment the room becomes quieter.', signature: 'Élise Moreau', time: '23:08 — late seating' },
]

export const windowMode = {
  title: 'Paris, from the other side of the glass.',
  description: 'A small pause between courses. Stay here for a moment and let the city move without you.',
  preview: '/images/32.webp',
  scenes: [
    { src: '/images/32.webp', alt: 'Rain-dark Paris window seen from a quiet restaurant at night' },
    { src: '/images/33.webp', alt: 'Candle reflection and distant Paris lights on restaurant glass' },
    { src: '/images/34.webp', alt: 'Soft interior reflection layered over a blurred Paris boulevard at night' },
  ],
}

export const moodItems = (mood: Mood) => menuCategories.flatMap((category) => category.items.filter((item) => item.mood === mood)).slice(0, 3)
