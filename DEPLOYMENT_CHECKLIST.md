# Deployment Checklist for Jalandhar Leather Website

## Pre-Deployment Setup

### 1. Repository Setup
- [ ] Code pushed to GitHub repository
- [ ] Repository is public or accessible to Netlify
- [ ] All sensitive data is in environment variables (not in code)

### 2. Sanity CMS Setup
- [ ] Sanity project created at sanity.io
- [ ] Project ID and dataset configured
- [ ] API token generated with appropriate permissions
- [ ] Schemas deployed to Sanity (`npx sanity deploy`)
- [ ] Admin panel accessible at localhost:3000/admin

### 3. Content Preparation
- [ ] Logo files uploaded to `/public/logo/` directory:
  - [ ] `logo.png` (horizontal logo for header)
  - [ ] `icon.png` (JL monogram for favicon)
  - [ ] `site.png` (square logo for social media)
- [ ] Basic content added through admin panel:
  - [ ] Site settings (contact info, USPs)
  - [ ] Hero section content
  - [ ] At least 2-3 sample products with images
  - [ ] Company information for "Our Story" page

### 4. Environment Variables Check
- [ ] `.env.local` file configured locally
- [ ] Environment variables tested in development
- [ ] All API connections working (Sanity, forms)

## Netlify Deployment Process

### 1. Netlify Account Setup
- [ ] Netlify account created/logged in
- [ ] GitHub account connected to Netlify

### 2. Site Creation
- [ ] New site created from GitHub repository
- [ ] Repository connected successfully
- [ ] Build settings configured:
  - **Build command**: `npm run build`
  - **Publish directory**: `out`
  - **Base directory**: (leave empty)

### 3. Environment Variables Configuration
Add these variables in Netlify Dashboard → Site Settings → Environment Variables:
- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID` = your_sanity_project_id
- [ ] `NEXT_PUBLIC_SANITY_DATASET` = production
- [ ] `SANITY_API_TOKEN` = your_sanity_api_token

### 4. Deploy Settings
- [ ] Automatic deploys enabled for main branch
- [ ] Build hooks configured if needed
- [ ] Deploy notifications set up (optional)

### 5. Custom Domain (Optional)
- [ ] Custom domain purchased/configured
- [ ] DNS settings updated to point to Netlify
- [ ] SSL certificate automatically provisioned
- [ ] HTTPS redirect enabled

## Post-Deployment Testing

### 1. Basic Functionality
- [ ] Website loads correctly at the Netlify URL
- [ ] All pages accessible (Home, Collection, Our Story, Craftsmanship, Contact, Bulk Orders)
- [ ] Navigation menus working (desktop and mobile)
- [ ] Images loading correctly
- [ ] Forms submitting successfully

### 2. Content Management
- [ ] Admin panel accessible at your-domain.com/admin
- [ ] Can create/edit/delete products
- [ ] Can update site settings
- [ ] Changes reflect on the live website
- [ ] Image uploads working in CMS

### 3. Mobile & Browser Testing
- [ ] Website responsive on mobile devices
- [ ] Testing on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Touch interactions working on mobile
- [ ] Mobile menu functioning correctly

### 4. Performance & SEO
- [ ] Page loading speeds acceptable (use PageSpeed Insights)
- [ ] Meta tags and descriptions showing correctly
- [ ] Sitemap accessible at your-domain.com/sitemap.xml
- [ ] Robots.txt accessible at your-domain.com/robots.txt
- [ ] Social media previews working (Open Graph)

### 5. Forms & Contact
- [ ] Contact form submitting successfully
- [ ] Bulk order form working
- [ ] Newsletter signup functional
- [ ] Form validation working correctly
- [ ] Error messages displaying properly

## Final Steps

### 1. Content Population
- [ ] Add all real products with high-quality images
- [ ] Update site settings with real contact information
- [ ] Add actual company story and craftsmanship content
- [ ] Populate hero sections with marketing content

### 2. SEO Setup
- [ ] Google Search Console set up
- [ ] Google Analytics configured (if needed)
- [ ] Submit sitemap to search engines
- [ ] Set up Google My Business (if applicable)

### 3. Backup & Monitoring
- [ ] Export Sanity data for backup
- [ ] Set up uptime monitoring (optional)
- [ ] Configure Netlify form notifications
- [ ] Document admin credentials securely

### 4. Handover
- [ ] Admin panel access shared with client
- [ ] Brief training on content management
- [ ] Documentation provided (README.md)
- [ ] Support contact information shared

## Troubleshooting Common Issues

### Build Failures
- Check environment variables are set correctly
- Verify all dependencies are in package.json
- Check for TypeScript errors in the code
- Review build logs in Netlify dashboard

### CMS Issues
- Verify Sanity project ID and dataset name
- Check API token has correct permissions
- Ensure schemas are deployed to Sanity
- Verify CORS settings in Sanity dashboard

### Form Problems
- Check form action URLs
- Verify Netlify form detection (forms need `netlify` attribute)
- Test form submissions in incognito mode
- Check spam folder for form notifications

### Performance Issues
- Optimize images before uploading
- Check for large bundle sizes
- Review Core Web Vitals in PageSpeed Insights
- Consider lazy loading for images

## Success Criteria

The deployment is successful when:
- [ ] Website is live and accessible
- [ ] All pages load without errors
- [ ] Content management system is functional
- [ ] Forms are working correctly
- [ ] Mobile experience is smooth
- [ ] Performance scores are acceptable
- [ ] SEO basics are in place
- [ ] Client can manage content independently

---

**Deployment Date**: _________________
**Deployed By**: ____________________
**Live URL**: _______________________
**Admin URL**: ______________________
