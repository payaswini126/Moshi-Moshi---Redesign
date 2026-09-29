
- Keep the Moshi Moshi site as a single-page editorial agency experience with authentic campaign photography, semantic Electric Black color tokens, pointer-responsive portrait cards, an infinite client wordmark rail, and reduced-motion fallbacks, because its portfolio narrative depends on fast scanning and playful transitions.
- The hero carries a circular "The Communication Company" sticker badge: ambient bob on the wrapper, pointer tilt via --rx/--ry on the inner element (nesting keeps the two transforms from fighting), hidden below md, touch ignored.
- All images (logo, client logos, work photography) are real files under src/assets imported directly — never reference hosted asset-proxy URLs or .asset.json pointers, so the site bundles cleanly for any host.
