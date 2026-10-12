# Truck2rent — logistics product design & motion archive

Historical product-design case for **Truck2rent**, a 2018–2019 logistics concept around cargo/transport discovery, carrier selection and shipment-oriented UX.

> This repository proves product/UI/motion work. It does **not** contain the native iOS/Android application, production backend, database or realtime tracking implementation.

## Live portfolio layer

`index.html` is a new, dependency-light presentation layer around the preserved artifacts. It adds:

- responsive case-study framing;
- an interactive preview of the existing `data.json` animation;
- play / pause / restart controls;
- 0.5×, 1× and 2× playback speed;
- reduced-motion-aware autoplay;
- loading and failure states;
- an opt-in sandboxed viewer for the generated historical `demo.html`;
- explicit engineering boundaries so the archive is not misrepresented.

The historical files remain the source of truth and are not rewritten.

## Preserved source material

- `T2R ANIMATION.aep` — After Effects authoring artifact.
- `data.json` / `data.xml` — animation/export data.
- `demo.html` — generated historical presentation.
- `animation t2r/`, `animation 2/`, `animation 3/`, `splash 2/` — exported motion assets.
- `images/` — visual assets.

## Product scope represented by the archive

```text
cargo owner creates order
        ↓
transport / carrier discovery
        ↓
carrier / offer selection
        ↓
shipment / tracking-oriented experience
```

Historical product materials describe Truck2rent as a service for finding transport and cargo without intermediaries. Treat historical external URLs as archival until independently verified.

## Validation

Requires Node.js 22+ only for repository validation; the viewer itself is static HTML.

```bash
npm test
```

The validation checks that key historical artifacts still exist, `data.json` parses, and accessibility/safety markers remain in the portfolio viewer.

GitHub Actions runs the same validation on pushes and pull requests.

## Ten completed revival tasks

1. Preserved the original After Effects and exported animation assets.
2. Added a modern authored portfolio entry point.
3. Added responsive desktop/mobile presentation.
4. Connected the viewer to the preserved animation JSON.
5. Added play/pause/restart interaction.
6. Added playback-speed controls.
7. Added reduced-motion behavior and explicit status feedback.
8. Added an opt-in sandbox around the generated historical demo.
9. Added automated archive integrity validation and CI.
10. Reframed the documentation around verified product-design evidence and explicit engineering boundaries.

## Historical references

- Behance case: `https://www.behance.net/gallery/89898609/Truck2rent-logistic-service`
- Portfolio family: `https://whoisegor.ru`

## Portfolio positioning

Use this repository as evidence of **logistics product design, marketplace UX, mobile-product presentation and motion design**. Do not use it as evidence that the production transport marketplace or native applications were engineered here.

## License / rights

No repository-wide code or media license is assumed. Verify client, brand, photography, icon, font, animation and third-party asset rights before redistribution.
