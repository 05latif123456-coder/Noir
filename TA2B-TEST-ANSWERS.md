# NOIR — TA2B Test Answers

## 1. Concept

NOIR is a contemporary French restaurant in Paris imagined as an after-hours table: a place between the last train and first light. The digital experience moves visitors from intrigue to a reservation through atmosphere, practical clarity, and a menu that reads like a sequence rather than a catalogue.

## 2. Art direction

The palette uses ink black `#101211`, bone `#E9E4DA`, cool lichen `#A9B0AA`, slate `#303936`, candlelight `#D8C9B0`, and oxidized copper `#B46A4D`. This avoids generic black-and-gold luxury while keeping one warm accent for action and emphasis. Instrument Serif gives the brand a human, editorial voice; Manrope makes the interface readable; IBM Plex Mono creates a discreet layer of coordinates, hours, and metadata.

Composition is asymmetrical and architectural: a large serif gesture on one side, practical detail on the other, punctuated by rules and small labels. Imagery is dark, tactile, and close to the hand — rooms, gestures, ingredients, and plates — rather than generic food glamour.

## 3. Hero

The hero is a full-screen room at night with the name reduced to its essential wordmark. “A table for the in-between hours” establishes the restaurant’s point of view before a visitor has to make a choice. Paris, the address, and a low-pressure “Enter the evening” scroll invitation give context without falling back to a welcome headline and a standard button.

## 4. User experience

The primary journey is: enter the atmosphere → understand the philosophy → explore the Night Index or curated menu → look closer through the gallery → find practical details → reserve. The persistent desktop navigation stays quiet and short; mobile navigation becomes a full-screen, numbered menu so it remains legible and touch-friendly. The reservation CTA appears in the header, the visit section, the footer, and the About closing section.

The reservation journey is a single focused form with familiar labels, required fields, input types, and clear feedback. It validates name/date/time, email, and phone; shows a loading state; simulates success; and exposes an intentional error path when a test email contains `fail`.

## 5. Personal feature

The Night Index is a mood-led menu browser with Ember, Mineral, and Nocturne states. It filters the menu to three related dishes and changes the section’s color temperature. It addresses the opportunity that guests often choose a restaurant by desired feeling as much as by dish name. It adds discovery without creating a distracting gimmick or increasing the dependency surface.

## 6. Animations

- Hero image breathing: a very slow scale keeps the opening room from feeling like a static background and establishes the pace of the evening.
- Hero content rise-in: introduces hierarchy in one orchestrated entrance.
- Reveal-on-scroll: reveals sections as they enter reading range so long pages feel paced rather than dumped at once.
- Night Index transition: changes background temperature and dish suggestions to make the selected mood legible.
- Gallery hover crop: rewards desktop pointer exploration with more detail, while keeping the image useful without hover.
- Mobile navigation transition: makes the change from page to menu spatially clear.
- Reduced motion: disables decorative movement and makes reveals immediately visible.

## 7. Technology

Vite, React, and TypeScript provide a fast build, typed data, and a small runtime. Plain CSS was chosen over a utility framework because the visual system is highly art-directed and benefits from a small set of readable tokens. Leaflet and React Leaflet are used only for the interactive Paris location map; no animation library or router is required for the rest of the scope. CSS transitions, IntersectionObserver, and a tiny history-based router are sufficient. The trade-off is that a production multi-page platform would likely move toward Next.js or another SSR framework for server-rendered metadata and content delivery.

## 8. Architecture

`src/data/site.ts` contains the restaurant config, menu categories, atmosphere states, and gallery metadata. `src/components/` contains reusable shell, footer, icon, reveal, page-intro, menu list, and reservation form pieces. `src/pages/` holds page-level compositions. `src/styles.css` contains design tokens, component styles, responsive rules, and reduced-motion handling. This keeps content and brand values out of layout components.

## 9. Multi-restaurant architecture

For twenty restaurants, the config becomes a restaurant record containing identity, contact details, SEO, theme tokens, typography choices, menu categories, gallery images, and page copy. The existing shell, menu renderer, forms, gallery, intro, and editorial sections remain reusable. Theme values already live in CSS variables, and content already lives in typed data. Different identities can vary imagery, color tokens, display type, section ordering, and feature flags without duplicating the base application.

## 10. Client modification

To add a menu category, add one `MenuCategory` object to `menuCategories`; the menu filter and renderer update automatically. To change the primary color, change the copper token in `site.theme` and the matching CSS variable; action buttons, rules, and active states inherit it. To modify restaurant content, update `site` and the menu/gallery arrays. The presentation components do not need rebuilding.

## 11. Responsive strategy

Desktop uses offset columns, multi-column menu rows, a centered nav, and an editorial gallery grid. Tablet collapses the densest layouts while retaining the scale of the type and image moments. Mobile is deliberately recomposed: a full-screen menu replaces the desktop nav, grids stack, mood tabs become a vertical list, gallery tiles use a smaller two-column rhythm, and form fields become one column. The CSS includes layout rules for the requested 1440, 1280, 1024, 768, 390, and 375px families.

## 12. Performance

The app has a small dependency surface and a single production JS chunk. Below-the-fold gallery images use lazy loading; the hero is the only eager visual. All image slots now point to predictable local files so generated assets can be optimized as AVIF/WebP variants and served with responsive `srcset` delivery. Motion uses CSS transforms and IntersectionObserver rather than per-frame JavaScript.

## 13. Accessibility

The project uses semantic main/section/footer landmarks, a skip link, a logical heading hierarchy, explicit form labels, required attributes, descriptive alt text, native controls where possible, visible focus styles, keyboard-usable buttons, tab semantics for menu/mood filters, `role="alert"` for errors, `role="status"` for success, and a global reduced-motion mode.

## 14. SEO

The document includes a meaningful base title and description, page-specific title/description updates, canonical URLs, Open Graph and Twitter metadata, a Restaurant JSON-LD block with address/phone/hours/cuisine, useful alt text, `robots.txt`, and `sitemap.xml`. A production SSR deployment should render page-specific head tags on the server as well.

## 15. Difficulties

The main design challenge was avoiding the familiar “dark luxury restaurant” shortcut. The cooler palette and Night Index make the identity more specific. The supplied reference URL could not be accessed by the available inspection tool, so the reference was not used as an asset or code source. A second challenge was making a dramatic visual system coexist with a form that remains understandable and usable.

## 16. What I would improve

I would commission/licence additional local image variants, add server-side route metadata, connect reservations to real availability and confirmation email, test with screen readers, run Lighthouse on a deployed build, and add visual regression checks at every brief viewport.

## 17. Development time

Estimated implementation time is 7–9 focused hours: 1 hour brief and direction, 3.5 hours build, 1 hour responsive/interactions, 1 hour verification, and 1–2 hours audit/documentation.
