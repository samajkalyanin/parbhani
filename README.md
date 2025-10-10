# GRS Parbhani / शानिशा परभणी

A comprehensive bilingual website for Government Residential School Parbhani built with React, Vite, Tailwind CSS, and i18next.

## 🌟 Features

- **Bilingual Support**: Marathi (default) and English with i18next
- **Multi-page Application**: 10+ pages with React Router v6
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Forms & Communication**: EmailJS integration, WhatsApp integration
- **Modern UI/UX**: Framer Motion animations, accessible design
- **Government Standards**: Compliant with Maharashtra SJS(A) guidelines

## 📁 Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── locales/            # Translation files (mr/en)
├── data/               # Static data and content
├── lib/                # Utilities (EmailJS, etc.)
├── utils/              # Helper functions
└── index.css           # Global styles

public/
├── images/             # Image assets
├── downloads/          # APK and PDF files
├── sitemap.xml         # SEO sitemap
└── robots.txt          # SEO robots file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd parbhani
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### Required Setup (TODO Items)

1. **EmailJS Configuration**
   - Create account at [EmailJS](https://www.emailjs.com/)
   - Update `src/lib/email.js`:
     ```javascript
     const EMAILJS_SERVICE_ID = 'your_service_id'
     const EMAILJS_TEMPLATE_ID = 'your_template_id'
     const EMAILJS_USER_ID = 'your_user_id'
     ```

2. **WhatsApp Integration**
   - Update WhatsApp number in:
     - `src/components/WhatsAppChat.jsx`
     - `src/components/AdmissionForm.jsx`
     - `src/lib/email.js`
   ```javascript
   const whatsappNumber = '919876543210' // Replace with actual number
   ```

3. **YouTube Video**
   - Replace placeholder URL in `src/pages/Home.jsx`:
   ```javascript
   src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
   ```

4. **Google Maps**
   - Update embed URL in `src/pages/Contact.jsx`
   - Add actual school coordinates

5. **App Download**
   - Place actual APK file in `public/downloads/parbhani-app.apk`
   - Update download links throughout the site

### Content Customization

1. **Translations**: Edit `src/locales/mr/translation.json` and `src/locales/en/translation.json`
2. **Images**: Replace placeholder images in `public/images/` (see `public/PLACEHOLDERS.md`)
3. **Blog Posts**: Update `src/data/blogs.js`
4. **Contact Info**: Update phone numbers, emails, and addresses in translation files

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel login
   vercel
   ```

2. **Environment Variables**
   Set these in Vercel dashboard:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID` 
   - `VITE_EMAILJS_USER_ID`

3. **Custom Domain**
   - Add `parbhani.samajkalyan.info` in Vercel
   - Update DNS settings

### Alternative Deployment
- Netlify: Drag and drop `dist` folder
- GitHub Pages: Use `gh-pages` package
- Traditional hosting: Upload `dist` folder contents

## 🎨 Customization

### Theme Colors
Update primary colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#4f46e5', // Change this for different theme
    // ... other shades
  }
}
```

### Language Default
Change default language in `src/i18n.js`:
```javascript
i18n.init({
  lng: 'mr', // Change to 'en' for English default
})
```

## 📊 SEO & Analytics

### Built-in SEO Features
- Meta tags for all pages
- Open Graph tags
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Hreflang tags

### Adding Analytics
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🔧 Technical Details

### Dependencies
- **React 18**: UI library
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **React Router v6**: Routing
- **i18next**: Internationalization
- **Framer Motion**: Animations
- **React Helmet Async**: SEO meta tags
- **EmailJS**: Form submissions
- **React Toastify**: Notifications

### Browser Support
- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## 📝 Content Sources

All content is sourced from:
- Maharashtra Social Justice & Special Assistance Department
- Parbhani District Administration
- Government Residential School guidelines

See `src/data/sources.js` for complete source list.

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   npm run build
   # Check for TypeScript/import errors
   ```

2. **Translation Keys Not Showing**
   - Ensure all keys exist in both `mr` and `en` translation files
   - Check browser console for i18next errors

3. **Images Not Loading**
   - Verify images exist in `public/images/`
   - Check file extensions and paths

4. **Form Submission Issues**
   - Verify EmailJS configuration
   - Check browser console for API errors

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run linting (if configured)
```

## 📞 Support

For technical support or content updates, contact the Social Welfare Team.

## 📄 License

This project is developed for Government Residential School Parbhani under Maharashtra Government Social Welfare Department.

---

**Version**: 0.4.0  
**Last Updated**: October 11, 2024  
**Next Review**: December 2024
