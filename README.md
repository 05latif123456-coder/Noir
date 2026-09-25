# NOIR — Contemporary French dining in Paris

NOIR is an original TA2B developer-test project: a cinematic, editorial restaurant website for a fictional contemporary French table in Paris. The experience is designed as an extension of the restaurant rather than a conventional hospitality brochure — dark mineral surfaces, precise type, slow image movement, and copy that leaves room for curiosity.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## AI image workflow

The website is prepared for locally generated image assets. Follow this simple workflow:

1. Generate the images using [IMAGE-ASSET-REPORT.md](./IMAGE-ASSET-REPORT.md).
2. Name them `01.webp`, `02.webp`, `03.webp`, and so on.
3. Place them in `public/images/`.
4. The website automatically uses each file in its mapped location.

The report inventories every image-dependent visual location, including the hero, cinematic kitchen scene, gallery, About page imagery, shared page-intro background, and dedicated food/drink image prompts for every Menu item (`11.webp` through `25.webp`). The current generated files are already placed in `public/images/`; if a file is missing later, the app falls back to a local CSS placeholder and never requests an external stock-image URL.

## Concept and art direction

The creative direction is “after-hours Paris”: ink black, cool slate, bone paper, candlelight, and an oxidized-copper accent. Instrument Serif gives the restaurant a cinematic voice; Manrope keeps navigation and long-form copy calm; IBM Plex Mono carries the practical layer of hours, coordinates, and labels.

The large hero opens on an atmospheric room instead of a generic welcome message. Editorial offsets, hairline rules, generous whitespace, and quiet image crops make the interface feel closer to a printed restaurant journal than a card grid.

## AI video workflow

The hero is prepared for a local silent entry video. Generate the video from the prompt below, export it as an MP4, and place it at `public/video/noir-entry.mp4`. The site uses it automatically with `muted`, `loop`, and `playsInline`; until the file exists, a local image fallback keeps the hero functional. Reduced-motion users see the fallback image instead of the moving video.

```text
Create a silent 8–10 second cinematic opening video for NOIR, a fictional contemporary French fine-dining restaurant in Paris. The feeling is an intimate after-hours arrival: begin in near-black architectural shadow, then make a very slow, steady forward camera movement through a dark threshold into a refined dining room. Reveal charcoal stone, deep walnut, quiet linen table settings, a single low candle, faint copper reflections, and distant Paris night light through tall windows. Let the room emerge gradually from darkness as if the visitor is entering a private world. Use restrained editorial restaurant cinematography, realistic materials, subtle atmospheric haze, gentle light movement, deep shadows, cool graphite tones, muted cream highlights, and a small amount of oxidized copper warmth. Keep the central and upper areas visually calm so white NOIR typography can sit above the image. No people looking at the camera, no logos, no readable text, no menu, no voice, no music, no sound effects, no fast cuts, no camera shake, no glossy gold luxury clichés, no bright commercial lighting, no surreal objects, no morphing architecture. Silent video, 16:9, 1920x1080, 24 fps, premium film grain, seamless-feeling loop, slow precise motion, realistic high-end restaurant campaign film.
```

## Personal feature

The Night Index is a three-state sensory menu explorer: Ember, Mineral, and Nocturne. Each state changes the menu suggestions and the temperature of the section. It gives guests a way to browse by feeling — a natural behavior for a restaurant built around atmosphere — while remaining useful and lightweight.

The site also includes an opt-in soundtrack playlist fixed to the lower-left corner. It never autoplays: visitors choose whether to play or pause the local tracks in `public/audio/`, and can move backward or forward with the adjacent controls. The current playlist contains `sway.mp3`, `blue-suit-blues.mp3`, and `parisian-cafe.mp3`; add a fourth track by appending one data object to `site.soundtrack` in `src/data/site.ts`.

The header also includes a persistent dark/light mode toggle. Desktop uses a moon/sun icon; mobile expands the control into a labeled pill. The preference is saved locally in the browser.

## Technology and architecture

- Vite, React 19, and TypeScript
- Plain CSS with design tokens in `src/styles.css`; Leaflet + React Leaflet are used only for the interactive Paris location map
- `src/data/site.ts` contains restaurant config, menu content, mood states, and gallery metadata
- `src/components/` contains the shared shell, reveal behavior, icon set, menu renderer, page intro, reservation form, and location map
- `src/pages/` contains the four route-level experiences
- Routing is intentionally small and dependency-free: the app listens to `history.pushState` and `popstate`

The data/presentation split is designed for future multi-restaurant work. A second restaurant can supply another config, theme variables, menu array, and gallery set while keeping the components and page compositions intact.

## Motion

Motion is restrained and functional: the hero breathes slowly to create a living room, content reveals on entry to establish reading rhythm, the Night Index holds its photographic backdrop while its story scrolls across it, image hover reveals detail, and the mobile menu provides a clear spatial transition. `prefers-reduced-motion` disables decorative animation and forces reveals visible.

## Accessibility and SEO

The project uses semantic sections, labels and required fields on the reservation form, keyboard-visible focus states, skip navigation, tab semantics for filters, descriptive image alt text, sufficient contrast, reduced-motion support, page-specific titles/descriptions, canonical URLs, Open Graph tags, a Restaurant JSON-LD block, `robots.txt`, and `sitemap.xml`.

## Challenges and honest next steps

The main challenge was balancing a strong art direction with a practical reservation path. The visual system is intentionally distinctive, but the form stays familiar and linear. The supplied reference URL was not accessible to the browsing tool, so no reference source code or visual asset was copied; the authoritative TA2B brief drove the direction.

With more time, I would connect reservations to a real availability API, commission additional local WebP or AVIF variants, add automated visual regression at the requested viewport widths, and introduce server-rendered metadata for a production deployment.

## Development time estimate

For this implementation: roughly 7–9 focused hours — 1 hour for brief/creative direction, 3.5 hours for the component and page build, 1 hour for responsive and interaction work, 1 hour for build/runtime verification, and 1–2 hours for audit and documentation.

See [IMAGE-ASSET-REPORT.md](./IMAGE-ASSET-REPORT.md), [TA2B-TEST-ANSWERS.md](./TA2B-TEST-ANSWERS.md), and [PROJECT-AUDIT.md](./PROJECT-AUDIT.md) for the full handoff.
