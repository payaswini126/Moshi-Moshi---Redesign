# Moshi Moshi — The Communication Company

Marketing site for Moshi Moshi, an independent advertising and communications
agency based in Bengaluru, Gurugram and Mumbai.

## Stack

- TanStack Start (React 19, SSR)
- Tailwind CSS v4
- Vite, bundled with Nitro (Cloudflare Workers preset by default; Nitro
  auto-detects other targets such as Vercel from the deploy environment)

## Development

```sh
npm install
npm run dev
```

The site runs at http://localhost:8080.

## Production build

```sh
npm run build
```

Output is written to `dist/`.

All campaign photography and client logos live in `src/assets` and are bundled
into the build — no external image hosting required.
