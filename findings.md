# Findings

## Research

- The supplied reference URL `https://ta2b-final-deploy.vercel.app/` returned an access error in the browsing tool. No source code or visual details from that site were copied.
- The brief calls for premium editorial composition, large-scale imagery, restrained cinematic motion, and a strong restaurant identity rather than a generic restaurant template.
- The required surface area is home, menu, about, reservation, responsive layouts, accessible form states, SEO metadata/structured data, and three project reports.

## Creative Direction

- Subject: a fictional contemporary French fine-dining restaurant in Paris for guests who value considered experiences and a sense of discovery.
- Single job: move a visitor from intrigue to a confident reservation while giving them enough culinary and practical context to feel the world of NOIR.
- Palette: `#101211` ink, `#E9E4DA` bone, `#A9B0AA` lichen, `#B46A4D` oxidized copper, `#303936` slate, `#D8C9B0` candlelight.
- Typography: Instrument Serif for the cinematic voice, Manrope for calm readability, IBM Plex Mono for labels and time/location data.
- Layout: offset editorial columns, strong rules, generous negative space, and image crops that feel architectural rather than card-based.
- Signature: “The Night Index” — three atmosphere states (Ember / Mineral / Nocturne) that filter the suggested dishes and subtly change the visual temperature of the experience.

## Content model

- `restaurant` config owns brand, contact, hours, social links, SEO, theme tokens, and story copy.
- `menuCategories` owns category labels and items, allowing a category to be added as one data object.
- `gallery` owns image source, alt text, crop intent, and placement metadata.

## Implementation notes

- Keep image slots local and load gallery images lazily except for the hero; document every slot and generation prompt in IMAGE-ASSET-REPORT.md.
- Use CSS transitions and IntersectionObserver rather than a motion dependency. Respect `prefers-reduced-motion` globally.
- Reservation form is simulated locally with clear validation, loading, success, and error UI. It should be ready to connect to a real action later.

## Asset workflow revision

- Replaced every external image URL in the implementation with a predictable local asset slot: `/images/01.webp` through `/images/10.webp`.
- Added a local-only fallback treatment for missing gallery files so the layout remains functional while generated images are being created.
- The complete Arabic inventory is in IMAGE-ASSET-REPORT.md; each report entry maps directly to `/public/images/NN.webp`.

## Theme contrast refinement

- The navigation label `THE TABLE` exposed a broader issue: `.desktop-nav a.active` used `var(--bone)`, while the light theme remaps `--bone` to a dark surface text color. Because the header sits over hero imagery, the active label could lose contrast in light mode.
- The fix should preserve a stable light overlay palette for the header, hero, page-intro, image-story, gallery captions, and map controls, while leaving text on solid themed surfaces controlled by `--ink`, `--bone`, and `--muted`.
- The key design rule is: text over photography is always optimized for the image; text over empty/surface backgrounds follows the selected theme.

## Map interaction refinement

- `LocationMap.tsx` currently disables Leaflet wheel zoom with `scrollWheelZoom={false}` and has no reset-to-default control.
- The default view is data-driven by `site.map.latitude`, `site.map.longitude`, and `site.map.zoom`; the new control should reuse those values rather than duplicate coordinates.
- A native Leaflet control is preferable to an arbitrary overlay so it remains keyboard-focusable, positioned with the existing zoom controls, and compatible with Leaflet's event handling.

## Soundtrack expansion

- `MusicControl.tsx` currently owns one `<audio>` element pointing to `/audio/sway.mp3`, with explicit user-triggered play/pause and no autoplay.
- The project folder contains three usable MP3 files: the existing Sway track, Blue Suit Blues, and Elegant Parisian Café Sounds. No fourth MP3 file is currently present.
- The playlist should use stable local paths and data-driven titles so adding the missing fourth track later requires only one playlist entry, while previous/next controls remain reusable.

## Playback-state fix

- Track switching must use the media element's actual `paused`/`ended` state rather than relying only on React state, because a source change and a React `src` prop update can race during one click.
- The audio element now keeps its initial source declaratively and changes tracks imperatively. Switching while playing calls `play()` on the new source; switching while paused exits without calling `play()`, and `autoplay` is explicitly disabled.

## Cinematic hero video direction

- The supplied screenshot identifies the visually empty area as the homepage Night Index section. It should become an image-backed atmosphere section rather than a flat surface.
- `01.webp` is currently used by the hero background. It will move to the Night Index backdrop so the first generated image has a clear editorial role there.
- The hero will reserve `/video/noir-entry.mp4` for a silent, muted, loopable cinematic entry video. Until the generated file is placed, a local image fallback keeps the layout functional.
- Qissa's publicly visible homepage structure supports taking inspiration from an opening visual invitation and story-led progression, but NOIR's implementation will remain original in palette, copy, typography, and composition. Source reviewed: https://www.qissa.co.uk/.

## Sticky scroll treatment

- The Night Index now separates its sticky background layer from its scrolling content layer. The `01.webp` backdrop remains pinned to the viewport while the section content passes over it, then releases naturally when the section ends.
- The implementation uses CSS `position: sticky` rather than a continuous scroll listener, keeping the interaction lightweight and respecting reduced-motion behavior.

## Menu image placement

- The `Plats` folder contains exactly 15 numbered source files, `11` through `25`, with mixed PNG/JFIF extensions. They were converted to the report's required local WebP paths in `public/images/`.
- `MenuList` previously rendered only text and price. The correct placement is a data-driven `image` field on each Menu item, mapped in order: 11–14 Entrées, 15–18 Plats, 19–21 Desserts, 22 Fromages, and 23–25 Boissons.
- The final implementation keeps this mapping in `src/data/site.ts`, so replacing any generated file in `public/images/` updates the matching item without changing component code.

## New generated image installation

- The supplied `imges` folder contains exactly nine files, numbered 26 through 34.
- They were converted from JFIF to WebP and installed at `public/images/26.webp` through `public/images/34.webp`, matching the Market Memory and Window Mode data paths exactly.
- The optimized output files were verified with Pillow and served successfully by the local Vite server as `image/webp`.

## Home dish imagery review

- `HomePage.tsx` already receives menu records containing `image` paths, but the `featured-menu` section rendered only the item number, name, description, and price.
- The Night Index also rendered its mood-filtered dishes as text-only rows, even though the filtered `MenuItem` records already carry the matching local image paths.
- The Home fix should reuse those data-driven paths in both moments: compact editorial thumbnails in the featured menu and restrained thumbnails in the atmosphere suggestions. No new assets or duplicate image mapping is needed.
