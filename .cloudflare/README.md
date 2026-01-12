# Cloudflare Pages Deployment

## Important Notes

⚠️ **File System Operations**: This application currently uses Node.js file system operations (`fs.readFileSync`, `fs.writeFileSync`) which are **not supported** on Cloudflare Pages. The filesystem is read-only in Cloudflare's serverless environment.

## Migration Required

To deploy successfully, you need to migrate data storage to one of these Cloudflare services:

1. **Cloudflare KV** - For JSON data (projects, users)
2. **Cloudflare R2** - For file uploads (images)
3. **Cloudflare D1** - For relational database needs

## Build Commands

```bash
# Install dependencies
npm install

# Build for Cloudflare Pages
npm run build:cloudflare

# Deploy to Cloudflare Pages
npm run pages:deploy
```

## Environment Variables

Set these in Cloudflare Pages dashboard:
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV=production`

## Current Limitations

- File uploads won't work until migrated to R2
- Data persistence won't work until migrated to KV/D1
- API routes using `fs` operations will fail
