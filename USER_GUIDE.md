# User Guide: Managing GRS Parbhani Website

This guide helps non-technical users update and manage the GRS Parbhani website content.

## 📋 Quick Access Checklist

### For Content Updates
- [ ] Blog posts and news
- [ ] Contact information  
- [ ] Image gallery
- [ ] Facility information
- [ ] Admission forms

### For Technical Setup
- [ ] Email form configuration
- [ ] WhatsApp integration
- [ ] App download links
- [ ] Social media links

## 🔄 Regular Content Updates

### Adding New Blog Posts/News

1. **Open the blog data file**: `src/data/blogs.js`
2. **Add new entry** at the top of the array:
   ```javascript
   {
     id: 5, // Increment from last ID
     slug: 'new-blog-post-title',
     title_mr: 'मराठी शीर्षक',
     title_en: 'English Title',
     excerpt_mr: 'मराठी सारांश...',
     excerpt_en: 'English summary...',
     content_mr: 'संपूर्ण मराठी मजकूर...',
     content_en: 'Full English content...',
     image: '/images/new-blog-image.jpg',
     date: '2024-10-15',
     author_mr: 'लेखकाचे नाव',
     author_en: 'Author Name',
     category_mr: 'वर्ग',
     category_en: 'Category'
   }
   ```
3. **Add corresponding image** to `public/images/`
4. **Save and publish** changes

### Updating Contact Information

1. **Open translation files**:
   - Marathi: `src/locales/mr/translation.json`
   - English: `src/locales/en/translation.json`

2. **Update contact details** in both files:
   ```json
   {
     "contact": {
       "phone": "नवीन फोन नंबर",
       "email": "नवीन ईमेल",
       "address": "नवीन पत्ता"
     }
   }
   ```

### Adding New Images to Gallery

1. **Add images** to `public/images/` folder
2. **Open gallery page**: `src/pages/GalleryPage.jsx`
3. **Add new item** to `galleryItems` array:
   ```javascript
   {
     id: 7, // New ID
     src: '/images/new-image.jpg',
     category: 'infrastructure', // or 'facilities', 'students', 'sports'
     title_mr: 'मराठी शीर्षक',
     title_en: 'English Title',
     description_mr: 'मराठी वर्णन',
     description_en: 'English Description'
   }
   ```

## ⚙️ One-time Setup Tasks

### Configuring Email Forms

1. **Create EmailJS Account**:
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Create free account
   - Create email service and template

2. **Update Configuration**:
   - Open `src/lib/email.js`
   - Replace placeholder values:
     ```javascript
     const EMAILJS_SERVICE_ID = 'service_xxxxxxx'
     const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'
     const EMAILJS_USER_ID = 'user_xxxxxxx'
     ```

### Setting Up WhatsApp Integration

1. **Get WhatsApp Business Number**
2. **Update in multiple files**:
   - `src/components/WhatsAppChat.jsx`
   - `src/components/AdmissionForm.jsx`
   - `src/lib/email.js`
   
   Replace: `const whatsappNumber = '919876543210'`
   
   With: `const whatsappNumber = '91XXXXXXXXXX'`

### Uploading School App (APK)

1. **Get APK file** from app developer
2. **Upload to**: `public/downloads/parbhani-app.apk`
3. **Update download links** if filename is different

### Adding YouTube Video

1. **Upload video** to school's YouTube channel
2. **Get video ID** from URL (e.g., `dQw4w9WgXcQ`)
3. **Update in**: `src/pages/Home.jsx`
   ```javascript
   src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
   ```

## 🖼️ Image Management

### Image Requirements
- **Format**: JPG for photos, PNG for logos
- **Size**: Maximum 500KB per image
- **Dimensions**: 
  - Hero images: 1920x1080
  - Gallery images: 800x600
  - Thumbnails: 400x300

### Adding New Images
1. **Optimize images** using tools like [TinyPNG](https://tinypng.com/)
2. **Upload to** `public/images/` folder
3. **Update references** in relevant components
4. **Add alt text** in translation files

### Replacing Placeholder Images
See `public/PLACEHOLDERS.md` for complete list of images to replace.

## 🌐 Translation Management

### Adding New Text Content
1. **Add to Marathi file**: `src/locales/mr/translation.json`
2. **Add to English file**: `src/locales/en/translation.json`
3. **Use in components**: `{t('your.new.key')}`

### Translation Best Practices
- Keep keys descriptive: `facilities.library.title`
- Maintain same structure in both files
- Use gender-neutral language where possible
- Include context for translators

## 📱 Social Media Integration

### Updating Social Links
1. **Open footer component**: `src/components/Footer.jsx`
2. **Update href attributes**:
   ```jsx
   <a href="https://facebook.com/your-page">
   <a href="https://twitter.com/your-handle">
   <a href="https://instagram.com/your-account">
   <a href="https://youtube.com/your-channel">
   ```

## 🚀 Publishing Changes

### Using Git (Recommended)
```bash
git add .
git commit -m "Updated blog posts and contact info"
git push
```

### Direct File Upload
1. **Download project files**
2. **Make changes locally**
3. **Upload modified files** to hosting server

### Automatic Deployment
If connected to Vercel/Netlify, changes pushed to Git will automatically deploy.

## 📞 Getting Help

### For Content Issues
- Check translation files for text changes
- Verify image paths and file names
- Ensure all required fields are filled

### For Technical Issues
- Check browser console for errors
- Verify all TODO items are completed
- Contact technical support team

### Emergency Contacts
- **Website Issues**: Contact development team
- **Domain Issues**: Contact hosting provider
- **Email Issues**: Check EmailJS dashboard

## 📋 Monthly Maintenance Tasks

- [ ] Update blog posts with recent news
- [ ] Check and update contact information
- [ ] Review and update image gallery
- [ ] Verify all forms are working
- [ ] Check website loading speed
- [ ] Update any expired content
- [ ] Review analytics and visitor feedback

## 🔐 Security Notes

- Never share EmailJS credentials publicly
- Keep admin credentials secure
- Regularly update dependencies
- Monitor for spam form submissions
- Backup content regularly

---

**Need Help?** Contact the technical team with specific questions or screenshots of issues.
