# NOIR — TA2B Developer Test

## Goal

Build and document a production-quality, original NOIR contemporary French fine-dining website with home, menu, about, and reservation experiences; responsive behavior; meaningful motion; accessibility; SEO; a data-driven architecture; and complete audit/report deliverables.

## Phases

- [complete] Phase 1 — Bootstrap project, define design system, and capture research
- [complete] Phase 2 — Build shared shell, routing, and content/data model
- [complete] Phase 3 — Build homepage and personal interactive feature
- [complete] Phase 4 — Build menu, about, and reservation pages
- [complete] Phase 5 — Responsive, accessibility, SEO, and performance pass
- [complete] Phase 6 — Production build, audit, fixes, and documentation
- [complete] Phase 7 — Refine visual polish and add opt-in music control
- [complete] Phase 8 — Add non-invasive content and image copy deterrents
- [complete] Phase 9 — Replace external image dependencies with local generated-asset slots
- [complete] Phase 10 — Place and validate the supplied numbered image set
- [complete] Phase 11 — Remove skip-link UI and add persistent dark/light theme toggle
- [complete] Phase 12 — Add the requested professional Paris location map
- [complete] Phase 13 — Refine theme text contrast and remove map overlay copy
- [complete] Phase 14 — Separate image-overlay text tokens from theme surface tokens
- [complete] Phase 15 — Add map reset control and wheel zoom interaction
- [complete] Phase 16 — Expand the soundtrack into a local multi-track playlist
- [complete] Phase 17 — Preserve playback state while switching tracks
- [complete] Phase 18 — Move image 01 to the Night Index and prepare a silent hero video
- [complete] Phase 19 — Add sticky scroll storytelling to the image 01 section
- [complete] Phase 20 — Install and verify the generated NOIR hero video
- [complete] Phase 21 — Add detailed Menu dish image prompts to the asset report
- [complete] Phase 22 — Place numbered dish images into the Menu items
- [complete] Phase 23 — Add new immersive Home experiences and local image slots
- [complete] Phase 24 — Audit and repair light/dark theme contrast across all surfaces
- [complete] Phase 25 — Refine Table 09 map contrast and mobile layout

## Decisions Made

- Use Vite + React + TypeScript with plain CSS for a small, understandable dependency surface.
- Treat NOIR as an “after-hours Paris” identity: ink, bone, oxidized copper, and cool slate rather than generic gold-on-black luxury.
- Use Instrument Serif for expressive editorial display type, Manrope for interface/body text, and IBM Plex Mono for utility metadata.
- Keep content in typed data/config modules so a future restaurant can swap identity, menu, gallery, and contact data without duplicating presentation code.
- Personal feature: “The Night Index”, a sensory menu filter that shifts the menu preview between ember, mineral, and nocturne atmospheres.

## Errors Encountered

| Error | Attempt | Resolution |
|---|---:|---|
| Supplied TA2B reference URL unavailable to web inspection tool | 1 | Proceeded from the authoritative brief and documented the limitation in findings.md and project reports. |
| Workspace is not a Git repository | 1 | Avoided Git operations; treated the directory as a fresh project bootstrap. |
| PowerShell rejected `$home` as a read-only system variable during a runtime check | 1 | Re-ran the check with a task-specific variable name. |
| apply_patch rejected a combined delete/add operation for IMAGE-ASSET-REPORT.md | 1 | Split the replacement into separate delete and add operations, then applied the code/documentation changes. |
| HTTP smoke check ran before the development server was running | 1 | Started the dev server and re-ran the page check successfully. |
| Background Vite process exited before the map smoke check | 1 | Switched to a live terminal session for the runtime verification. |
| HTTP check after the theme/map refinement ran after the live server session ended | 1 | Restarted Vite in a live session and re-ran the check. |
| Combined documentation patch did not match the existing PROJECT-AUDIT heading | 1 | Split the documentation update into smaller targeted patches and applied them successfully. |
| Leaflet type definitions rejected `L.control(...)` as callable | 1 | Switched to the equivalent `new L.Control(...)` API and the production build passed. |
| Development server was not listening during the first playlist smoke test | 1 | Started the Vite server as a detached process and repeated route/audio checks successfully. |
| Track switching could let React and the media element disagree about the active source | 1 | Made the media element source imperative, used `audio.paused` as the playback source of truth, and explicitly kept autoplay disabled. |
| Development server stopped during the first hero-video smoke test | 1 | Restarted Vite as a detached process and verified the homepage plus MP4 asset successfully. |

## Next Step

Table 09 now has stable contrast in both themes, clearer rounded controls, and a smaller centered mobile map. Production build, route smoke tests, and whitespace checks passed; the verified working tree is ready to commit and push.
