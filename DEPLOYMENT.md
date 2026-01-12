# Cloudflare Pages Deployment Guide

## Prerequisites

1. Cloudflare account
2. Wrangler CLI installed globally: `npm install -g wrangler`
3. Cloudflare Pages project created

## Important Limitations

⚠️ **This application uses file system operations that are NOT supported on Cloudflare Pages.**

The following features will NOT work until migrated:
- File uploads (uses `fs.writeFileSync`)
- Data persistence (uses `fs.readFileSync`/`fs.writeFileSync`)

### Required Migrations

1. **Data Storage**: Migrate from JSON files to:
   - Cloudflare KV (for projects/users data)
   - Cloudflare D1 (SQLite database)
   
2. **File Uploads**: Migrate to Cloudflare R2 (object storage)

## Build Configuration

### Option 1: Using Cloudflare Pages Dashboard

1. Go to Cloudflare Dashboard → Pages → Create a project
2. Connect your Git repository
3. Set build settings:
   - **Build command**: `npm run build && npm run build:cloudflare`
   - **Build output directory**: `.vercel/output/static`
   - **Root directory**: `/` (or leave empty)
   - **Node version**: `20`

4. Set environment variables:
   - `JWT_SECRET`: Your secret key for JWT tokens
   - `NODE_ENV`: `production`

### Option 2: Using Wrangler CLI

```bash
# Install dependencies
npm install

# Build for Cloudflare
npm run build
npm run build:cloudflare

# Deploy
wrangler pages deploy .vercel/output/static --project-name=evoke-technologies-portfolio
```

## Build Scripts

- `npm run build` - Standard Next.js build
- `npm run build:cloudflare` - Adapts Next.js output for Cloudflare Pages
- `npm run pages:deploy` - Full build and deploy to Cloudflare Pages

## Troubleshooting

### Build Fails

1. Check Node.js version (should be 20)
2. Ensure all dependencies are installed
3. Check build logs in Cloudflare dashboard

### Runtime Errors

- File system errors: Expected - migrate to KV/R2
- API route errors: Check Cloudflare Functions compatibility
- Image loading issues: Ensure images are in `public/` folder

## Next Steps

1. Set up Cloudflare KV namespace for data storage
2. Set up Cloudflare R2 bucket for file uploads
3. Update API routes to use KV/R2 instead of filesystem
4. Test deployment in preview environment
