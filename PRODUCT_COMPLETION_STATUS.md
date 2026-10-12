# Product Completion Status — Truck2rent

Updated: 2026-10-13
Product family: historical Truck2rent logistics UI/motion-design archive.
Canonical preservation branch: `revive/truck2rent-2026` · [Draft PR #2](https://github.com/shikakker/truck2rent/pull/2).
Live cargo marketplace/native app/backend: **NOT PRESENT**; do not invent tracking or transactions.

## Current repair and exact-HEAD evidence

- **P0 viewer delivery:** `index.html` pinned bodymovin 5.12.2 from cdnjs but provided a mismatched hard-coded `integrity` digest. Browsers reject a script whose SRI digest does not match downloaded bytes, leaving motion controls permanently inactive.
- **RED:** `scripts/cdn-integrity.test.mjs` added in `99e7cbd`. Previous digest `sha512-a4l1...` failed the known pinned-file integrity contract in isolated Node test.
- **GREEN:** replaced with independently published bodymovin/lottie 5.12.2 SRI `sha512-jEnuDt6jfecCjthQAJ+ed0MTVA++5ZKmlUcmDGBv2vUI/REn6FuIdixLNnQT+vKusE2hhTk2is3cFvv5wA+Sgg==` in commit `0b47ffc`. Test is wired to `npm test` in `b5aef80` to prevent recurrence.
- **CI:** exact-head GitHub Actions run `38309269051` **PASS**: archive validator and SRI test **1/1 PASS**, no npm dependencies required. Latest PR parallel run may also exist.
- **Missing:** real browser fetch verifying CDN response integrity, animation render, mobile QA 375/768/1024/1440 and shareable preview; no canonical Vercel project connected. No production app exists. **PARTIAL publication; repository CI PASS**.

## T01–T10 core tasks

| ID | Status | Task and verification |
|---|---|---|
| T01 | DONE | Preserve original After Effects, XML, JSON, images and exports |
| T02 | DONE | Parse original animation JSON via archive validation CI |
| T03 | DONE IN CODE / BROWSER PENDING | Interactive loader preview with Lottie |
| T04 | DONE | Correct pinned CDN runtime digest; automated SRI contract PASS |
| T05 | DONE IN CODE / BROWSER PENDING | Pause/play/restart controls |
| T06 | DONE IN CODE / BROWSER PENDING | 0.5×/1×/2× speeds |
| T07 | DONE IN CODE / BROWSER PENDING | Reduced-motion-aware autoplay |
| T08 | DONE | Opt-in historical iframe with allow-scripts sandbox |
| T09 | DONE | README accurately separates design artifacts from non-existent native/backend app |
| T10 | BLOCKED | Live preview/browser sizing and asset-rights review not verified |

## I01–I10 improvements

| ID | Status | Improvement |
|---|---|---|
| I01 | DONE | Pin third-party Lottie CDN version |
| I02 | DONE | Correct matching SRI for pinned asset |
| I03 | DONE | Automate SRI integrity regression |
| I04 | DONE | Keep version+integrity contract in permanent GitHub CI |
| I05 | DONE | Do not rewrite historical assets |
| I06 | DONE | Defensive runtime-load error message |
| I07 | DONE IN CODE / BROWSER PENDING | Responsive grid and metadata on mobile |
| I08 | DONE IN CODE / BROWSER PENDING | Reduced-motion preference |
| I09 | DEFERRED WITH REASON | Browser a11y/focus/live-announcement tests pending preview |
| I10 | DEFERRED WITH REASON | Asset license/redistribution permission depends on rights holders |

## F01–F10 viewer feature inventory

| ID | Status | Feature |
|---|---|---|
| F01 | EXISTS | Logistics design case overview |
| F02 | EXISTS | Preserved motion preview |
| F03 | EXISTS | Play/pause |
| F04 | EXISTS | Restart |
| F05 | EXISTS | Playback speed controls |
| F06 | EXISTS | Reduced-motion default |
| F07 | EXISTS | Opt-in historical demo |
| F08 | EXISTS | Attribution to original artifact files |
| F09 | DEFERRED WITH REASON | Shareable hosted live case pending deployment |
| F10 | DEFERRED WITH REASON | Native/backend transport marketplace absent; cannot honestly demo delivery or tracking |

**Release:** Draft PR only; no production promotion; overall **PARTIAL** until rendered QA, even though CI is green.
