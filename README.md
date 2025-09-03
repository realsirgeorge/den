# George Wanyoike Njoroge - Cybersecurity Portfolio

A modern, responsive portfolio website for a cybersecurity and networking specialist. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Dark cybersecurity theme with glassmorphism effects
- **Animated Background**: Network nodes visualization canvas
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lighthouse scores ≥ 95 across all metrics
- **SEO Ready**: Comprehensive metadata, sitemap, and structured data
- **Accessible**: WCAG AA compliant with keyboard navigation
- **Interactive**: Smooth animations and micro-interactions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PNPM (recommended) or npm

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd cybersecurity-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Content Management

### Editing Content

All content is managed through the `/content/content.ts` file. This centralized approach makes it easy to update:

- Personal information and contact details
- Professional experience and achievements
- Skills and proficiency levels
- Certifications and education
- Social media links

### Content Structure

```typescript
export const profile = {
  name: "Your Name",
  title: "Your Professional Title",
  // ... rest of the configuration
}
```

### Adding New Experience

```typescript
experience: [
  {
    org: "Company Name",
    role: "Your Role",
    period: "Start Date – End Date",
    points: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2"
    ],
    tech: ["Technology 1", "Technology 2"]
  }
]
```

## 🎨 Theming

### Color System

The website uses a comprehensive color palette defined in `tailwind.config.ts`:

- **Primary**: Slate grays for backgrounds
- **Accent**: Cyan (#22D3EE) for highlights
- **Secondary**: Blue (#4F46E5) for actions
- **Success**: Green (#22C55E) for positive states

### Typography

- **Headings**: Inter font family with variable weights
- **Body**: Inter with optimized line spacing
- **Generous letter-spacing on hero elements

### Custom Animations

Animations are built with Framer Motion and include:
- Staggered reveals for sections
- Hover micro-interactions
- Scroll-triggered animations
- Reduced motion support

## 🏗️ Architecture

### File Organization

```
app/
├── globals.css          # Global styles and CSS variables
├── layout.tsx          # Root layout with SEO
├── page.tsx            # Home page composition
├── sitemap.ts          # Automated sitemap generation
└── robots.ts           # SEO robots configuration

components/
├── ui/                 # shadcn/ui components
├── NavBar.tsx          # Navigation with scroll progress
├── Hero.tsx            # Animated hero section
├── About.tsx           # About section with features
├── SkillBadges.tsx     # Tabbed skills with proficiency
├── ExperienceTimeline.tsx # Professional experience
├── DevelopmentGrid.tsx # Professional development
├── Education.tsx       # Education background
├── CertsWall.tsx       # Certifications showcase
├── ContactForm.tsx     # Contact form with validation
└── Footer.tsx          # Footer with links

content/
└── content.ts          # Centralized content management

lib/
├── seo.ts              # SEO configuration and metadata
├── mail.ts             # Contact form server actions
└── utils.ts            # Utility functions
```

## 📧 Contact Form

The contact form includes:

- **Client-side validation** with Zod schemas
- **Server-side processing** with Next.js Server Actions
- **Rate limiting** to prevent spam
- **Error handling** with user-friendly messages

### Configuration

Contact form submissions are handled by the server action in `/lib/mail.ts`. In production, integrate with your preferred email service:

```typescript
// lib/mail.ts
export async function submitContactForm(data: ContactFormData) {
  // Add your email service integration here
  // Examples: SendGrid, Resend, Nodemailer, etc.
}
```

## 🔍 SEO & Analytics

### Metadata Configuration

SEO settings are centralized in `/lib/seo.ts`:

```typescript
export const defaultSEO: Metadata = {
  title: "Your Name | Your Title",
  description: "Your professional description",
  // ... other metadata
}
```

### Structured Data

Automated JSON-LD structured data for:
- Person schema
- Professional credentials
- Contact information
- Skills and expertise

### Sitemap

Automatically generated sitemap includes:
- Main page
- All sections (anchored URLs)
- Proper priority and change frequency

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Import project in Vercel dashboard
   - No environment variables needed for basic functionality
   - Automatic deployments on git push

3. **Custom Domain** (Optional)
   - Add your domain in Vercel project settings
   - Update `NEXT_PUBLIC_BASE_URL` environment variable

### Environment Variables

For production deployment:

```bash
# .env.local (for local development)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Production
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## 🧪 Performance

### Optimization Features

- **Static Generation**: All pages are statically generated
- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Variable fonts with display swap
- **Bundle Splitting**: Automatic code splitting
- **Prefetching**: Link prefetching for navigation

### Lighthouse Targets

All scores target ≥ 95:
- **Performance**: Optimized assets and rendering
- **Accessibility**: WCAG AA compliance
- **Best Practices**: Security and modern standards
- **SEO**: Comprehensive metadata and structure

## 🛠️ Development

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript type checking
```

### Adding New Sections

1. Create component in `/components/`
2. Add to main page in `/app/page.tsx`
3. Update navigation in `/components/NavBar.tsx`
4. Add content to `/content/content.ts`

### Styling Guidelines

- Use Tailwind utility classes
- Follow 8px spacing system
- Maintain consistent color usage
- Test responsive breakpoints
- Ensure proper contrast ratios

## 🔧 Customization

### Changing Colors

Update the color system in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "your-primary-color",
      accent: "your-accent-color",
      // ... other colors
    }
  }
}
```

### Adding Animations

Use Framer Motion for consistent animations:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Your content
</motion.div>
```

## 📱 Browser Support

- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive enhancement**: Graceful degradation for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For questions or support:
- Email: georgewanyoike57@gmail.com
- LinkedIn: [George Wanyoike](https://www.linkedin.com/in/george-wanyoike)
- GitHub: [realsirgeorge](https://github.com/realsirgeorge)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.