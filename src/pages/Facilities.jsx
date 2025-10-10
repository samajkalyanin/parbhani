import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaBed, 
  FaBook, 
  FaUtensils, 
  FaRunning, 
  FaFlask, 
  FaHeartbeat,
  FaTimes,
  FaExpand
} from 'react-icons/fa'

// Source: Standard government residential school facilities
// Based on Maharashtra Social Welfare Department norms and guidelines

const Facilities = () => {
  const { t, i18n } = useTranslation()
  const [selectedFacility, setSelectedFacility] = useState(null)
  
  const facilities = [
    {
      id: 'hostel',
      icon: FaBed,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      image: '/images/facility-hostel.jpg'
    },
    {
      id: 'library',
      icon: FaBook,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      image: '/images/facility-library.jpg'
    },
    {
      id: 'mess',
      icon: FaUtensils,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      image: '/images/facility-mess.jpg'
    },
    {
      id: 'sports',
      icon: FaRunning,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      image: '/images/facility-sports.jpg'
    },
    {
      id: 'labs',
      icon: FaFlask,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      image: '/images/facility-labs.jpg'
    },
    {
      id: 'health',
      icon: FaHeartbeat,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      image: '/images/facility-health.jpg'
    }
  ]
  
  return (
    <>
      <Helmet>
        <title>{t('meta.facilities.title')}</title>
        <meta name="description" content={t('meta.facilities.description')} />
        <meta property="og:title" content={t('meta.facilities.title')} />
        <meta property="og:description" content={t('meta.facilities.description')} />
        <link rel="canonical" href="/facilities" />
        <link rel="alternate" hreflang="mr" href="/facilities?lang=mr" />
        <link rel="alternate" hreflang="en" href="/facilities?lang=en" />
      </Helmet>

      <div className="bg-white">
        {/* Header */}
        <div className="bg-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('nav.facilities')}
            </h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              {i18n.language === 'mr'
                ? 'विद्यार्थ्यांच्या सर्वांगीण विकासासाठी आधुनिक सुविधा'
                : 'Modern facilities for holistic development of students'}
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.id}
                  className={`${facility.bgColor} rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedFacility(facility)}
                >
                  <facility.icon className={`w-12 h-12 ${facility.color} mb-4`} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(`facilities.${facility.id}.title`)}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {t(`facilities.${facility.id}.description`)}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-2 mb-4">
                    {t(`facilities.${facility.id}.features`, { returnObjects: true }).map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <button className={`${facility.color} hover:underline flex items-center space-x-1`}>
                      <FaExpand className="w-4 h-4" />
                      <span>{t('common.readMore')}</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedFacility && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFacility(null)}
            >
              <motion.div
                className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedFacility.image}
                    alt={t(`facilities.${selectedFacility.id}.title`)}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <selectedFacility.icon className={`w-8 h-8 ${selectedFacility.color} mr-3`} />
                    <h2 className="text-2xl font-bold text-gray-900">
                      {t(`facilities.${selectedFacility.id}.title`)}
                    </h2>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {t(`facilities.${selectedFacility.id}.description`)}
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {i18n.language === 'mr' ? 'मुख्य वैशिष्ट्ये:' : 'Key Features:'}
                  </h3>
                  <ul className="space-y-2">
                    {t(`facilities.${selectedFacility.id}.features`, { returnObjects: true }).map((feature, i) => (
                      <li key={i} className="text-gray-600 flex items-center">
                        <span className={`w-2 h-2 ${selectedFacility.color.replace('text-', 'bg-')} rounded-full mr-3`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Facilities
