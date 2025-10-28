# 🤖 Project Overview: GRS Parbhani (parbhani.samajkalyan.info)

This document is a technical overview for developers and AI agents to understand the project structure and key components.

## 1. Project Goal

* A **bilingual (Marathi/English)**, multi-page website for the GRS Parbhani government school.
* **Key features:** Detailed pages (About, Facilities, Schemes), an admission form, and an APK download link.

## 2. Tech Stack

* **Framework:** React 18.2.0 (via Vite 4.1.0)
* **Styling:** Tailwind CSS 3.2.6
* **Routing:** React Router v6.8.1
* **Internationalization (i18n):** i18next 22.4.10 + react-i18next 12.1.4 (bilingual support)
* **Animations:** Framer Motion 9.0.7
* **Forms:** EmailJS 3.11.0 (for email), `wa.me` links (for WhatsApp)
* **SEO:** React Helmet Async 1.3.0
* **Icons:** React Icons 4.7.1
* **Notifications:** React Toastify 9.1.1
* **HTTP Client:** Axios 1.3.3
* **Deployment:** Vercel (CI/CD from the `main` branch)

## 3. Key File Structure

```
parbhani/
├── public/                        # Static assets
│   ├── images/                    # School photos, logos
│   ├── downloads/                 # PDFs, APK files
│   ├── sitemap.xml               # SEO sitemap
│   └── robots.txt                # Search engine directives
│
├── src/
│   ├── pages/                     # All main page components
│   │   ├── Home.jsx              # Landing page
│   │   ├── About.jsx             # School history, vision
│   │   ├── Contact.jsx           # Contact info + form
│   │   ├── Facilities.jsx        # Infrastructure details
│   │   ├── Schemes.jsx           # Scholarships
│   │   ├── Gallery.jsx           # Photo gallery
│   │   ├── Blog.jsx              # News listing
│   │   ├── BlogDetail.jsx        # Individual blog post
│   │   ├── Privacy.jsx           # Privacy policy
│   │   ├── Terms.jsx             # Terms of service
│   │   └── NotFound.jsx          # 404 page
│   │
│   ├── components/                # Reusable components
│   │   ├── Hero.jsx              # Landing section
│   │   ├── Navbar.jsx            # Top navigation
│   │   ├── Footer.jsx            # Site footer
│   │   ├── TopBar.jsx            # Info bar above navbar
│   │   ├── AdmissionForm.jsx     # PRIMARY CONTACT/ADMISSION FORM
│   │   ├── WhatsAppChat.jsx      # Floating WhatsApp button
│   │   ├── ContactStrip.jsx      # CTA strip
│   │   ├── Logo.jsx              # School logo
│   │   └── Button.jsx            # Reusable button
│   │
│   ├── locales/                   # **ALL TEXT CONTENT IS HERE**
│   │   ├── mr/                    # Marathi translations
│   │   │   └── translation.json  # All Marathi text
│   │   └── en/                    # English translations
│   │       └── translation.json  # All English text
│   │
│   ├── data/                      # Static content
│   │   ├── blogs.js              # Blog post data
│   │   ├── inquiries.js          # Local inquiry storage
│   │   └── sources.js            # Data source references
│   │
│   ├── lib/                       # External service integrations
│   │   └── email.js              # **EmailJS wrapper function**
│   │
│   ├── utils/                     # Helper functions
│   ├── App.jsx                    # Main app with routing
│   ├── main.jsx                   # React entry point
│   └── i18n.js                    # i18next configuration
│
├── .vercelignore                  # Files to ignore in deployment
├── DEPLOYMENT_GUIDE.md            # Vercel setup & CI/CD workflow
├── PROJECT_OVERVIEW.md            # This file
├── README.md                      # Project documentation
├── USER_GUIDE.md                  # Content management guide
├── CHANGELOG.md                   # Version history
├── package.json                   # Dependencies
└── vite.config.js                # Vite configuration
```

## 4. Environment Variables (Secrets)

This project requires the following environment variables to be set in the Vercel dashboard for forms to function:

* `VITE_EMAILJS_SERVICE_ID` - EmailJS service identifier
* `VITE_EMAILJS_TEMPLATE_ID` - EmailJS email template
* `VITE_EMAILJS_USER_ID` - EmailJS public key
* `VITE_WHATSAPP_NUMBER` - WhatsApp business number (format: 919860151400)

**Important:** The `VITE_` prefix is required for Vite to expose these variables to the browser.

## 5. How to Update Content

### Text Content
* **To change text:** Edit the `translation.json` files in `/src/locales/`
  * Marathi: `/src/locales/mr/translation.json`
  * English: `/src/locales/en/translation.json`
* All UI text uses translation keys: `t('key.path')`
* No hardcoded text in components (language consistency)

### Pages
* **To change pages:** Edit the corresponding file in `/src/pages/`
* Each page uses `useTranslation()` hook for bilingual support

### Blog Posts
* **To add blog posts:** Edit the `src/data/blogs.js` file
* Each blog has: id, title (mr/en), content (mr/en), date, image, category

### Images
* **To add images:** Place in `/public/images/`
* Reference in code: `/images/filename.jpg`

### Downloads (PDFs, APK)
* **To add downloads:** Place in `/public/downloads/`
* APK file: `/public/downloads/parbhani-app.apk`

## 6. Color Scheme

* **Primary:** Indigo (`indigo-600`, `indigo-900`)
* **Accent:** Yellow/Orange (`yellow-400`, `orange-500`)
* **Neutral:** Gray, Slate, White
* **Success:** Green (WhatsApp: `#25D366`)
* **Error:** Red
* **No Pink/Purple** (per design guidelines)

## 7. Key Features

### Bilingual Support
* Default language: Marathi (mr)
* Fallback language: English (en)
* Language switcher in navbar
* All content translated via i18next

### Admission System
* Multi-step form with validation
* EmailJS integration for submissions
* WhatsApp message generation
* Local storage backup of inquiries
* Form located in: `src/components/AdmissionForm.jsx`

### SEO Optimization
* Dynamic meta tags per page (React Helmet)
* Sitemap.xml for search engines
* Canonical URLs
* hreflang tags for bilingual content
* robots.txt configuration

### Responsive Design
* Mobile-first approach
* Tailwind breakpoints: sm, md, lg, xl
* Touch-friendly UI elements

## 8. Routing Structure

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Landing page |
| `/about` | About | School info |
| `/contact` | Contact | Contact + form |
| `/facilities` | Facilities | Infrastructure |
| `/schemes` | Schemes | Scholarships |
| `/gallery` | Gallery | Photos |
| `/blog` | Blog | News listing |
| `/blog/:id` | BlogDetail | Blog post |
| `/privacy` | Privacy | Privacy policy |
| `/terms` | Terms | Terms of service |
| `*` | NotFound | 404 page |

## 9. Development Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 10. Deployment Workflow

1. Make changes locally in VS Code
2. Commit: `git add . && git commit -m "message"`
3. Push: `git push origin main`
4. Vercel auto-deploys within 1-2 minutes

See `DEPLOYMENT_GUIDE.md` for detailed setup instructions.

## 11. Common Tasks

### Update Phone Number
* Edit: `src/pages/Contact.jsx` (contactInfo array)
* Edit: `src/components/WhatsAppChat.jsx` (whatsappNumber)
* Edit: `src/components/ContactStrip.jsx` (phone link)

### Update Email Address
* Edit: `src/pages/Contact.jsx` (contactInfo array)

### Update School Address
* Edit: `src/pages/Contact.jsx` (contactInfo array)
* Update translation files if needed

### Add New Blog Post
* Edit: `src/data/blogs.js`
* Add entry with: id, title (mr/en), content (mr/en), date, image, category

### Update EmailJS Configuration
* Update environment variables in Vercel dashboard
* Or edit: `src/lib/email.js` (for local dev)

## 12. Important Notes

### For Developers
* Always test in both languages before committing
* Use translation keys, never hardcode text
* Follow existing component patterns
* Maintain responsive design

### For Content Editors
* Edit only translation files for text changes
* Use proper Marathi Unicode fonts
* Test forms after EmailJS config changes
* Keep blog posts consistent in format

### For AI Agents
* All text content is in `/src/locales/` JSON files
* Component logic in `/src/pages/` and `/src/components/`
* Forms use EmailJS (see `/src/lib/email.js`)
* Deploy via Git push (Vercel CI/CD)

## 13. TODO Items

- [ ] Configure EmailJS with actual credentials
- [ ] Update WhatsApp number from placeholder
- [ ] Add actual Google Maps coordinates
- [ ] Upload actual school APK file
- [ ] Add principal name and photo
- [ ] Update social media links
- [ ] Add YouTube video embed
- [ ] Configure custom domain DNS

## 14. Support & References

* **Maharashtra SJS(A):** https://sjsa.maharashtra.gov.in/
* **Parbhani District:** https://parbhani.gov.in/
* **EmailJS Docs:** https://www.emailjs.com/docs/
* **Vercel Docs:** https://vercel.com/docs
* **React i18next:** https://react.i18next.com/
