# Jalandhar Leather - Premium Handmade Leather Goods

A premium, modern, and professional website for Jalandhar Leather, showcasing high-quality handmade leather goods including ladies' handbags, premium purses, leather jackets, and customized accessories.

## 🌟 Features

### Core Functionality
- **Modern Design**: Clean, professional layout with premium branding
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Content Management**: Headless CMS with Sanity.io for easy content updates
- **SEO Optimized**: Meta tags, structured data, sitemap, and performance optimization
- **Contact Forms**: Multiple contact forms with validation and submission handling
- **Product Showcase**: Beautiful product galleries with detailed views

### Pages & Sections
- **Homepage**: Hero section, featured products, USPs, and company highlights
- **Collection Pages**: Product categories with filtering and detailed product views
- **Our Story**: Company background, mission, and values
- **Craftsmanship**: Detailed showcase of traditional techniques and quality process
- **Contact**: Multiple contact options with interactive form
- **Bulk & Custom Orders**: Specialized ordering system for business clients
- **Admin Panel**: Content management interface for non-technical users

### Technical Features
- **Static Site Generation**: Optimized for fast loading and SEO
- **Image Optimization**: Next.js Image component with WebP support
- **TypeScript**: Full type safety throughout the application
- **Modern CSS**: Tailwind CSS with custom design system
- **Animations**: Smooth transitions and micro-interactions
- **Form Validation**: Client-side validation with proper error handling

## �️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Sanity.io (Headless CMS)
- **Forms**: React Hook Form with validation
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Playfair Display + Montserrat)
- **Deployment**: Netlify with automatic deployments

## 🎨 Design System

### Colors
- **Primary**: Brown/Tan tones (#8B4513, #D2B48C, #F5E6D3)
- **Secondary**: Charcoal greys (#1F2937, #374151, #6B7280)
- **Accent**: Gold (#D97706, #F59E0B, #FCD34D)
- **Neutral**: Clean whites and light greys

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Montserrat (Sans-serif)
- **Responsive**: Fluid typography scale

### Components
- **Buttons**: Primary, secondary, and accent variants
- **Cards**: Elegant shadows and rounded corners
- **Forms**: Clean inputs with focus states
- **Navigation**: Dropdown menus and mobile-friendly design

## � Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with fonts and metadata
│   ├── page.tsx                 # Homepage
│   ├── collection/              # Product collection pages
│   ├── our-story/               # Company story page
│   ├── craftsmanship/           # Craftsmanship showcase
│   ├── contact/                 # Contact page
│   ├── bulk-orders/             # Bulk order page
│   ├── not-found.tsx           # 404 error page
│   ├── sitemap.ts              # SEO sitemap
│   └── robots.ts               # SEO robots.txt
├── components/                   # Reusable components
│   ├── Header.tsx              # Main navigation
│   ├── Footer.tsx              # Site footer
│   ├── HeroSection.tsx         # Homepage hero
│   ├── FeaturedProducts.tsx    # Product showcase
│   ├── USPSection.tsx          # Unique selling points
│   ├── CollectionGrid.tsx      # Product grid
│   ├── ProductDetail.tsx       # Product detail view
│   ├── ContactForm.tsx         # Contact form
│   ├── BulkOrderForm.tsx       # Bulk order form
│   └── NewsletterSignup.tsx    # Newsletter component
├── sanity/                       # CMS configuration
│   ├── schemaTypes/            # Content schemas
│   ├── lib/                    # Sanity client and utilities
│   └── structure.ts            # Admin panel structure
├── lib/                          # Utility functions
│   └── types.ts                # TypeScript interfaces
└── styles/                       # Global styles
    └── globals.css             # Tailwind and custom CSS
```

## � Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jalandhar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Content Management

1. **Access the admin panel**
   Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)

2. **Add your content**
   - Create products with images, descriptions, and pricing
   - Update site settings and contact information
   - Customize hero sections and featured content

## 📋 Deployment Checklist

### Pre-Deployment
- [ ] Environment variables configured in Netlify
- [ ] Sanity project set up and schemas deployed
- [ ] Content added through admin panel
- [ ] Logo files uploaded to `/public/logo/` directory
- [ ] Contact information updated in site settings
- [ ] All forms tested and working correctly

### Netlify Deployment
1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`

2. **Environment Variables**
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token
   ```

3. **Domain Configuration**
   - Set up custom domain if needed
   - Configure SSL certificate
   - Set up redirects if necessary

### Post-Deployment
- [ ] Test all pages and functionality
- [ ] Verify forms submit correctly
- [ ] Check mobile responsiveness
- [ ] Test admin panel access
- [ ] Validate SEO meta tags
- [ ] Check page loading speeds
- [ ] Test contact form delivery

## 📧 Contact Forms

The website includes multiple contact options:
- **General Contact**: Main contact form on `/contact` page
- **Bulk Orders**: Specialized form for business inquiries on `/bulk-orders`
- **Newsletter**: Subscription form component

Forms include:
- Client-side validation
- Error handling
- Success confirmation
- Responsive design
- Accessibility features

## 🔧 Customization

### Adding New Products
1. Access the admin panel at `/admin`
2. Navigate to "Products" section
3. Click "Create new Product"
4. Fill in product details, upload images
5. Publish the product

### Updating Site Content
1. Access admin panel
2. Update "Site Settings" for contact info, USPs
3. Modify "Hero Section" for homepage content
4. Changes appear immediately on the website

### Design Customization
- Edit `tailwind.config.ts` for color scheme changes
- Modify components in `/src/components/` for layout changes
- Update global styles in `/src/styles/globals.css`

## 🧪 Testing

### Development Testing
```bash
npm run dev      # Start development server
npm run build    # Test production build
npm run start    # Test production server locally
```

### Browser Testing
- Test on Chrome, Firefox, Safari, Edge
- Verify mobile responsiveness on different screen sizes
- Check form submissions and error handling
- Validate admin panel functionality

## 📈 Performance

The website is optimized for:
- **Fast Loading**: Static generation with Next.js
- **SEO**: Comprehensive meta tags and structured data
- **Mobile Performance**: Responsive images and efficient CSS
- **Core Web Vitals**: Optimized for Google's performance metrics

## 🔐 Security

- Environment variables for sensitive data
- Input validation on all forms
- HTTPS enforcement
- Content Security Policy headers
- Regular dependency updates

## 📞 Support

For technical support or customization requests:
- Email: [your-email@domain.com]
- Documentation: [link-to-docs]
- Issues: [link-to-github-issues]

## 📄 License

This project is proprietary software developed for Jalandhar Leather.

---

**Made with ❤️ for Jalandhar Leather - Premium Handmade Leather Goods**
