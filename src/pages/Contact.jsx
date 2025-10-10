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

      <div className="bg-white">
        {/* Header */}
        <div className="bg-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Info & Map */}
            <div className="space-y-8">
              
              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={info.action}
                  >
                    <info.icon className={`w-8 h-8 ${info.color} mb-4`} />
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  onClick={handleCallClick}
                  className="flex items-center justify-center space-x-2"
                >
                  <FaPhone className="w-4 h-4" />
                  <span>{t('contact.callNow')}</span>
                </Button>
                
                <Button
                  variant="success"
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center space-x-2"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>{t('contact.whatsappNow')}</span>
                </Button>
              </div>

              {/* App Download Section */}
              <motion.div 
                className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg p-6 text-white"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {t('contact.downloadApp')}
                    </h3>
                    <p className="text-indigo-100 text-sm mb-4">
                      {i18n.language === 'mr' 
                        ? 'अप्लिकेशन डाउनलोड करा आणि सहज प्रवेश प्रक्रिया करा' 
                        : 'Download our app for easy admission process'}
                    </p>
                    <div className="flex space-x-3">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open('/downloads/parbhani-app.apk', '_blank')}
                        className="flex items-center space-x-2"
                      >
                        <FaDownload className="w-4 h-4" />
                        <span>APK</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center space-x-2 text-white border-white hover:bg-white hover:text-indigo-600"
                      >
                        <FaQrcode className="w-4 h-4" />
                        <span>QR</span>
                      </Button>
                    </div>
                  </div>
                  <div className="hidden sm:block text-6xl opacity-20">📱</div>
                </div>
              </motion.div>

              {/* Google Maps */}
              <motion.div 
                className="bg-gray-50 rounded-lg overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  {/* TODO: Replace with actual Google Maps embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8076749346983!2d76.76523431447506!3d19.268893986999056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1f7e9f1e9e9e9%3A0x9e9e9e9e9e9e9e9e!2sParbhani%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="School Location"
                  />
                  {/* Placeholder overlay - remove when actual map is configured */}
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <FaMapMarkerAlt className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-medium">School Location Map</p>
                      <p className="text-sm">Parbhani, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Admission Form */}
            <div>
              <AdmissionForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
