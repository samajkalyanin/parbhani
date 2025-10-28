import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaDownload,
  FaWhatsapp,
  FaQrcode
} from 'react-icons/fa'
import AdmissionForm from '../components/AdmissionForm'
import Button from '../components/Button'

const Contact = () => {
  const { t, i18n } = useTranslation()
  
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: t('contact.address'),
      details: [
        'Government Residential School',
        'Parbhani, Maharashtra - 431401',
        'India'
      ],
      color: 'text-red-500'
    },
    {
      icon: FaPhone,
      title: t('contact.phone'),
      details: [
        '+91-2452-123456',
        '+91-2452-789012'
      ],
      color: 'text-green-500',
      action: () => window.open('tel:+912452123456', '_self')
    },
    {
      icon: FaEnvelope,
      title: t('contact.email'),
      details: [
        'info@grsparbhani.edu.in',
        'admissions@grsparbhani.edu.in'
      ],
      color: 'text-blue-500',
      action: () => window.open('mailto:info@grsparbhani.edu.in', '_self')
    },
    {
      icon: FaClock,
      title: t('contact.helplineHours'),
      details: [
        'Monday to Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ],
      color: 'text-purple-500'
    }
  ]
  
  const handleWhatsAppClick = () => {
    // TODO: Replace with actual WhatsApp number
    const whatsappNumber = '919876543210'
    const message = encodeURIComponent(
      `Hello! I would like to inquire about admissions at GRS Parbhani.`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }
  
  const handleCallClick = () => {
    window.open('tel:+912452123456', '_self')
  }
  
  return (
    <>
      <Helmet>
        <title>{t('meta.contact.title')}</title>
        <meta name="description" content={t('meta.contact.description')} />
        <meta property="og:title" content={t('meta.contact.title')} />
        <meta property="og:description" content={t('meta.contact.description')} />
        <link rel="canonical" href="/contact" />
        <link rel="alternate" hreflang="mr" href="/contact?lang=mr" />
        <link rel="alternate" hreflang="en" href="/contact?lang=en" />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Header - Modern Gradient */}
        <div className="bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900 text-white py-12 sm:py-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('contact.title')}
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('contact.subtitle')}
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Left Column - Contact Info & Quick Actions */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Contact Information Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={info.action}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${info.color.replace('text-', 'bg-').replace('500', '100')}`}>
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-xs leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleCallClick}
                  className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700"
                >
                  <FaPhone className="w-4 h-4" />
                  <span>{t('contact.callNow')}</span>
                </Button>
                
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center space-x-2 text-white hover:opacity-90"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>{t('contact.whatsappNow')}</span>
                </Button>
              </div>

              {/* App Download Section */}
              <motion.div 
                className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl p-5 text-white shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <h3 className="text-base font-semibold mb-2">
                    {t('contact.downloadApp')}
                  </h3>
                  <p className="text-blue-100 text-xs mb-4">
                    {i18n.language === 'mr' 
                      ? 'अप्लिकेशन डाउनलोड करा' 
                      : 'Download our mobile app'}
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button
                      size="sm"
                      onClick={() => window.open('/downloads/parbhani-app.apk', '_blank')}
                      className="flex items-center space-x-2 bg-white text-indigo-600 hover:bg-gray-100 text-xs px-3 py-2"
                    >
                      <FaDownload className="w-3 h-3" />
                      <span>APK</span>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center space-x-2 bg-white/20 text-white border border-white hover:bg-white hover:text-indigo-600 text-xs px-3 py-2"
                    >
                      <FaQrcode className="w-3 h-3" />
                      <span>QR</span>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Google Maps */}
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="relative h-64">
                  {/* Placeholder - replace with actual Google Maps */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <FaMapMarkerAlt className="w-10 h-10 mx-auto mb-2 text-red-500" />
                      <p className="font-semibold text-sm">School Location</p>
                      <p className="text-xs">Parbhani, Maharashtra</p>
                    </div>
                  </div>
                  {/* TODO: Uncomment when you add actual Google Maps coordinates
                  <iframe
                    src="YOUR_GOOGLE_MAPS_EMBED_URL"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location"
                  />
                  */}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Admission Form (Spans 2 columns) */}
            <div className="lg:col-span-2">
              <AdmissionForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
