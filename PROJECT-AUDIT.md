# NOIR — Project Audit

Audit performed after the first production build. The supplied reference URL was unavailable to the browsing tool; this audit is against the TA2B brief and the implemented code.

## Verification performed

- `npm.cmd run build` — passes TypeScript and Vite production build.
- Local dev server smoke test — `/`, `/menu`, `/about`, `/reserve`, and `/robots.txt` all returned HTTP 200.
- Route/link review — shared header, footer, CTA, and in-content links point to the four implemented routes or intentional external/social URLs.
- Form review — required fields, email validation, phone validation, loading, success, and error states are implemented.
- Audio review — three local soundtrack files are served from `public/audio/` as `audio/mpeg`; playback is user-triggered only, with previous/next controls, error handling, track labels, and no autoplay.
- Playback-state review — switching tracks now reads the media element's actual paused state, preventing a stopped track from unexpectedly starting and preserving playback when the prior track was active.
- Copy-deterrent review — display text is non-selectable, gallery images disable dragging and context-menu saving, and form controls explicitly remain selectable.
- Theme review — the skip-link UI was removed as requested, and the header now provides a persistent dark/light toggle with desktop moon/sun icons and a wider mobile control.
- Location review — added a reusable Leaflet map driven by restaurant data, with a custom NOIR marker, accessible popup, attribution, zoom controls, professional location copy, and an external directions link.
- Map interaction review — added a keyboard-accessible reset-to-default control, enabled mouse-wheel zoom, and kept the reset action tied to the shared restaurant map data rather than duplicated coordinates.
- Contrast review — pinned text over image-backed sections to stable light colors in both themes and kept surface-based sections theme-aware. Removed custom map overlay copy at the requested location while retaining required OpenStreetMap attribution.
- Hero media review — moved `01.webp` to the Night Index background, prepared a local silent `/video/noir-entry.mp4` hero slot, added a local fallback image, and documented the generation prompt and exact placement path.
- Hero video verification — installed the generated MP4 at `public/video/noir-entry.mp4`; the dev server serves it successfully as `video/mp4`, and the existing hero text remains rendered above the video layer.
- Sticky interaction review — separated the Night Index background from its content so the photo remains pinned during the section narrative and releases at the boundary, using CSS sticky positioning without a scroll listener.
- Responsive review — CSS includes mobile recomposition, stacked forms, mobile navigation, reduced gallery density, and touch-friendly controls.

## Issues found and fixed

### Build typing

The initial TypeScript build rejected the side-effect CSS import under the installed TypeScript version. Added `src/vite-env.d.ts` with the Vite client type reference. The production build now passes.

### Missing explicit submission error path

The form initially had validation errors but no visible simulated service failure. Added a testable simulated failure path: an email containing `fail` returns an actionable error message after the loading delay. A real backend can replace that branch later.

### Metadata completeness

Added Open Graph/Twitter metadata, canonical URL, Restaurant JSON-LD, `robots.txt`, `sitemap.xml`, page-specific title/description updates, and image alt text.

### Motion and accessibility

Added skip navigation, focus styles, native labels, semantic status/alert messaging, keyboard-usable controls, and a `prefers-reduced-motion` override that removes decorative movement and forces reveal content visible.

### Visual refinement and soundtrack

Added a small fixed listening playlist that persists across route changes, starts only on user interaction, exposes play/pause and track navigation to assistive technology, animates only while playing, and compresses into a touch-friendly pill on mobile. Refined hover/focus states, menu-row interactions, button icon movement, overflow containment, and reduced-motion handling without changing the existing NOIR identity.

### Theme contrast refinement

The active `THE TABLE` navigation label and related controls could inherit the light theme's dark surface token while sitting over photography. Added stable `--on-image*` tokens for the header, hero, page introductions, image story, gallery captions, theme control, mobile menu toggle, and music control. Text on solid surfaces remains theme-aware, so dark/light mode now changes only the contexts where it should.

## Remaining production notes

- Image slots are local and predictable (`/images/01.webp` through `/images/10.webp`). The generated files should be exported as licensed local AVIF/WebP assets with responsive sources and measured dimensions.
- The app intentionally uses client-side routing for a dependency-light prototype; SSR or pre-rendered routes would improve crawlability and first response in production.
- Browser console and screen-reader testing should be run in a full browser matrix before launch; the available environment provided build and HTTP smoke-test coverage, not an automated visual browser runner.
- No unnecessary UI, motion, or icon dependencies are present. Leaflet is isolated to the location map; the production bundle remains a single application chunk plus CSS.

## Quality verdict

The project meets the requested functional surface and has a maintainable path to multi-restaurant content/theme reuse. The primary remaining gap is production asset/licensing and backend integration, both explicitly isolated and documented rather than hidden behind placeholder behavior.
