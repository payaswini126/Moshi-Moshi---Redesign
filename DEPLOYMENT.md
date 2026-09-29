# Deployment Guide

## Build for Production

```sh
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Deployment Options

### 1. Vercel (Recommended)

Nitro auto-detects Vercel and configures routing automatically.

```sh
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `.vercel/output` (auto-configured)
- Install Command: `npm install`

### 2. Cloudflare Pages

Nitro includes Cloudflare Workers preset by default.

**Build Settings:**
- Build Command: `npm run build`
- Build Output Directory: `dist`
- Root Directory: `/`

### 3. Netlify

```sh
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

**Build Settings:**
- Build Command: `npm run build`
- Publish Directory: `dist`

### 4. Static Hosting (Nginx, Apache, S3, etc.)

After building, upload the contents of `dist/` to your web server.

**Nginx configuration example:**
```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/moshi-moshi/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Environment Variables

No environment variables are required for basic deployment.

## Pre-deployment Checklist

- [ ] All images are bundled in `src/assets`
- [ ] Run `npm run build` locally to verify
- [ ] Test the production build with `npm run preview`
- [ ] Verify responsive design on mobile devices
- [ ] Check reduced-motion fallbacks work correctly

## Performance Notes

- All campaign photography and client logos are bundled
- No external image hosting dependencies
- Optimized for fast scanning and playful transitions
- Single-page architecture for seamless portfolio narrative
