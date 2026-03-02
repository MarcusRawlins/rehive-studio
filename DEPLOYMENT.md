# Deployment Guide - Rehive Studio

## Deploy to Render

### 1. Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit - Rehive Studio marketing site"
git remote add origin https://github.com/YOUR_USERNAME/rehive-studio.git
git push -u origin main
```

### 2. Configure Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: rehive-studio
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free or Starter

### 3. Custom Domain

In Render Settings:
1. Go to "Settings" → "Custom Domain"
2. Add: `studio.getrehive.com`
3. Update DNS records:
   - Type: CNAME
   - Name: studio
   - Value: [your-render-url].onrender.com

### 4. Environment Variables (Optional)

If you need environment variables:
- Go to "Environment" tab in Render
- Add variables from `.env.example`

## Alternative: Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

Configure custom domain in Vercel dashboard.

## Pre-Deployment Checklist

- [ ] Update demo site URLs with real links
- [ ] Add real screenshots to portfolio section
- [ ] Set up contact form backend (email service)
- [ ] Add Calendly booking link
- [ ] Add tech stack logos
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Add OG images for social sharing
- [ ] Configure SEO metadata

## DNS Configuration

For getrehive.com (assuming managed DNS):
```
Type: CNAME
Name: studio
Value: rehive-studio.onrender.com (or Vercel URL)
TTL: 3600
```

## Post-Deployment

1. Test all links
2. Verify contact form submission
3. Check mobile responsiveness
4. Monitor Core Web Vitals
5. Set up uptime monitoring

---

Built by 🦫 Brunel
