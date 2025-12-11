// config.js - School Configuration
const CONFIG = {
  // School Information
  schoolName: {
    en: 'GRS Parbhani',
    mr: 'जीआरएस परभणी'
  },
  
  // Contact Details - UPDATE BEFORE DEPLOYMENT
  contact: {
    whatsapp: '919876543210', // Format: 91XXXXXXXXXX (no + or spaces)
    phone: '+91-2452-123456',
    email: 'parbhani@samajkalyan.info',
    address: {
      en: 'GRS Parbhani, Parbhani District, Maharashtra 431401, India',
      mr: 'जीआरएस परभणी, परभणी जिल्हा, महाराष्ट्र 431401, भारत'
    }
  },
  
  // Website URLs
  urls: {
    main: 'https://parbhani.samajkalyan.info',
    login: 'https://login.samajkalyan.info',
    parentSite: 'https://samajkalyan.info'
  },
  
  // Social Media Links - UPDATE THESE
  social: {
    facebook: 'https://facebook.com/grsparbhani',
    instagram: 'https://instagram.com/grsparbhani',
    twitter: 'https://twitter.com/grsparbhani',
    youtube: 'https://youtube.com/@grsparbhani'
  },
  
  // Color Scheme - Parbhani (Deep Ocean Blue)
  colors: {
    primary: '#1E3A8A',
    primaryHover: '#1E40AF',
    accent: '#FCD34D',
    accentHover: '#FBBF24',
    dark: '#1F2937',
    light: '#F9FAFB',
    border: '#E5E7EB',
    success: '#10B981',
    error: '#EF4444',
    warning: '#F97316'
  },
  
  // School Statistics
  stats: {
    students: 500,
    faculty: 50,
    experience: 20,
    alumni: 3000
  },
  
  // Classes Offered
  classes: ['5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'],
  
  // Default Language
  defaultLanguage: 'mr'  // 'mr' for Marathi, 'en' for English
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
