# Deployment Guide

This portfolio is production-ready and can be deployed to multiple platforms.

## ⚡ Quick Deploy Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

That's it! Vercel automatically detects Next.js and configures everything.

**Command Line:**
```bash
npm install -g vercel
vercel login
npm run deploy:vercel
```

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site"
4. Select your GitHub repository
5. Build settings are pre-configured in `netlify.toml`
6. Click "Deploy"

**Command Line:**
```bash
npm install -g netlify-cli
netlify login
npm run deploy:netlify
```

### Option 3: GitHub Pages

1. Enable GitHub Pages in your repository settings
2. Set source to "GitHub Actions"
3. Push to main branch
4. GitHub Actions will automatically build and deploy

The workflow is already configured in `.github/workflows/deploy.yml`.

## 🛠️ Build Configuration

### Static Export
The portfolio is configured for static export in `next.config.ts`:
```typescript
output: 'export'
```

This generates static HTML files that can be hosted anywhere.

### Build Command
```bash
npm run build
```

This creates an `out/` directory with all static files.

## 📁 Output Directory Structure

After building, the `out/` directory contains:
- `index.html` - Main page
- `404.html` - Custom 404 page
- `_next/` - JavaScript bundles and assets
- Static assets from `public/` directory

## 🔧 Configuration Files

### `next.config.ts`
- Enables static export
- Configures image optimization
- Sets trailing slashes for better routing

### `vercel.json`
- Build command configuration
- Output directory specification
- Routing rules for Vercel

### `netlify.toml`
- Build command and publish directory
- Redirect rules for SPA routing
- Node.js version specification

### `.nojekyll`
- Required for GitHub Pages
- Prevents Jekyll from ignoring `_next` directory

## 🚨 Troubleshooting 404 Errors

### Common Issues:

1. **Missing trailing slashes**
   - Fixed with `trailingSlash: true` in `next.config.ts`

2. **Assets not loading**
   - All assets are in `public/` directory
   - Use relative paths starting with `/`

3. **WebGL not working**
   - Ensure HTTPS is enabled on hosting platform
   - Check browser WebGL support

4. **Routing issues**
   - All routes are static HTML files
   - Custom 404 page handles missing routes

### Testing Locally

Test the production build locally:
```bash
# Build the project
npm run build

# Serve the out directory
npx serve out

# Visit http://localhost:3000
```

## 🔒 Environment Variables

This portfolio doesn't require environment variables. If you add any:

**Vercel:**
- Add in project settings → Environment Variables

**Netlify:**
- Add in Site settings → Environment variables

**GitHub Actions:**
- Add in repository Settings → Secrets and variables → Actions

## 📊 Performance

The portfolio is optimized for performance:
- Static HTML generation
- Optimized JavaScript bundles
- GPU-accelerated WebGL effects
- Lazy-loaded images
- CSS-in-JS with Tailwind

## 🌐 Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain management
2. Add custom domain
3. Update DNS records

### GitHub Pages
1. Add `CNAME` file to `out/` directory
2. Or set custom domain in repository settings

## 📝 Deployment Checklist

Before deploying:
- [ ] Test build locally: `npm run build`
- [ ] Check for TypeScript errors: `npm run lint`
- [ ] Verify all assets load correctly
- [ ] Test on multiple browsers
- [ ] Check mobile responsiveness
- [ ] Verify WebGL effects work
- [ ] Test 404 page
- [ ] Check all links work

## 🎯 Production URLs

After deployment, your portfolio will be available at:

**Vercel:** `https://your-project.vercel.app`
**Netlify:** `https://your-project.netlify.app`
**GitHub Pages:** `https://username.github.io/repository-name`

## 🔄 Continuous Deployment

Push to your main branch and the site automatically updates on:
- ✅ Vercel (instant)
- ✅ Netlify (instant)
- ✅ GitHub Pages (via GitHub Actions)

## 💡 Tips

1. **Use Vercel for best Next.js support**
2. **Enable HTTPS for WebGL features**
3. **Monitor build logs for errors**
4. **Set up deployment notifications**
5. **Use preview deployments for testing**

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Docs: https://nextjs.org/docs
- GitHub Pages: https://pages.github.com

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Test locally
npm run dev

# Build for production
npm run build

# Test production build
npx serve out

# Deploy (choose one)
npm run deploy:vercel
# or
npm run deploy:netlify
```

Your portfolio is now ready for the world! 🌍✨

---

## 🚨 Troubleshooting 404 Errors

### If you see "404: NOT_FOUND" on Vercel:

1. **Check Build Logs**
   - Go to your deployment on Vercel
   - Click on the failed deployment
   - Review build logs for errors

2. **Verify Output Directory**
   - Ensure `out/` directory exists after build
   - Should contain `index.html` and `404.html`

3. **Common Fixes:**

   **For Vercel:**
   - Use Vercel's automatic detection (don't use custom vercel.json)
   - Or use minimal config:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "out"
   }
   ```

   **For WebGL Issues:**
   - Components use dynamic imports with `ssr: false`
   - Error boundaries catch WebGL failures
   - Falls back gracefully if WebGL not supported

4. **Manual Deployment Steps:**
   ```bash
   # Clean build
   rm -rf .next out node_modules
   npm install
   npm run build
   
   # Verify output
   ls -la out/
   
   # Should see:
   # - index.html
   # - 404.html
   # - _next/ directory
   ```

5. **If Still Getting 404:**
   - Delete and recreate the Vercel project
   - Use "Import Git Repository" instead of CLI
   - Let Vercel auto-detect Next.js settings
   - Don't override build/output settings

### Testing Before Deploy

Always test locally first:
```bash
npm run build
npx serve out -l 3000
# Visit http://localhost:3000
```

If it works locally but not on Vercel/Netlify:
- Check platform-specific build logs
- Verify Node.js version (needs 18+)
- Check for environment-specific issues
- Review platform documentation

### Platform-Specific Notes

**Vercel:**
- Best for Next.js (native support)
- Auto-detects configuration
- No custom config needed usually

**Netlify:**
- Uses `netlify.toml` for config
- Ensure redirects don't conflict
- Check `_redirects` file if present

**GitHub Pages:**
- Requires `.nojekyll` file
- May need `basePath` if using subdirectory
- Use GitHub Actions for deployment

### Need More Help?

Check these resources:
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- Vercel Documentation: https://vercel.com/docs
- Netlify Documentation: https://docs.netlify.com

Or open an issue in the repository with:
- Build logs
- Error messages
- Platform you're deploying to
- Steps you've tried
