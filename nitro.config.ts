import { defineConfig } from "nitro";

// Default build writes to dist/ folder. On Vercel (VERCEL env var set),
// Nitro uses its own .vercel/output layout for proper routing.
export default defineConfig(
  process.env.VERCEL
    ? {}
    : { output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" } },
);
