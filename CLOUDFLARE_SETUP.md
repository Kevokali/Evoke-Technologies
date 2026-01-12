# Cloudflare Pages Setup Complete

## ✅ Configuration Files Created

1. **wrangler.toml** - Cloudflare Pages configuration
2. **DEPLOYMENT.md** - Detailed deployment guide
3. **package.json** - Updated with Cloudflare build scripts
4. **next.config.js** - Updated for Cloudflare compatibility

## 📦 Installed Packages

- `@cloudflare/next-on-pages` - Adapter for Next.js on Cloudflare Pages
- `wrangler` - Cloudflare CLI tool

## 🚀 Build Commands

```bash
# Standard build
npm run build

# Build for Cloudflare Pages
npm run build:cloudflare

# Full build and deploy
npm run pages:deploy

# Or use the combined command
npm run cf:build
```

## ⚠️ Important Notes

### 1. Deprecation Warning
`@cloudflare/next-on-pages` is deprecated. Consider migrating to OpenNext:
- https://opennext.js.org/cloudflare
- For now, the current setup will work but may need updates in the future

### 2. File System Limitations
**Your application uses file system operations that won't work on Cloudflare Pages:**

- ❌ `fs.readFileSync()` - Reading JSON files
- ❌ `fs.writeFileSync()` - Writing JSON files  
- ❌ `fs.writeFileSync()` - Saving uploaded images

**Required Migrations:**
- Use **Cloudflare KV** for projects/users data
- Use **Cloudflare R2** for image uploads
- Or use **Cloudflare D1** (SQLite) for database

### 3. Build Output
The build output will be in `.vercel/output/static` (this is normal for next-on-pages)

## 📋 Deployment Steps

### Via Cloudflare Dashboard:

1. Go to Cloudflare Dashboard → Pages
2. Create new project or connect repository
3. Set build settings:
   - **Build command**: `npm run cf:build`
   - **Build output directory**: `.vercel/output/static`
   - **Node version**: `20`
4. Add environment variables:
   - `JWT_SECRET` - Your JWT secret key
   - `NODE_ENV` - `production`

### Via Wrangler CLI:

```bash
npm run cf:build
wrangler pages deploy .vercel/output/static --project-name=evoke-technologies-portfolio
```

## 🔧 Next Steps

1. **Test the build locally:**
   ```bash
   npm run cf:build
   ```

2. **Set up Cloudflare services** (if you want file uploads/data persistence):
   - Create KV namespace for data
   - Create R2 bucket for uploads
   - Update API routes to use these services

3. **Deploy to Cloudflare Pages** using the dashboard or CLI

## 🐛 Troubleshooting

If build fails:
- Check Node.js version (should be 20)
- Ensure all dependencies installed: `npm install --legacy-peer-deps`
- Check build logs in Cloudflare dashboard

If runtime errors occur:
- File system errors are expected until migration to KV/R2
- Check API routes for Cloudflare compatibility
- Ensure environment variables are set
