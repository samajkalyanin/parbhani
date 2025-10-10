import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const GalleryPage = () => {
  const { t, i18n } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const galleryItems = [
    {
      id: 1,
      src: '/images/school-building.jpg',
      category: 'infrastructure',
      title_mr: 'मुख्य इमारत',
      title_en: 'Main Building',
      description_mr: 'शाळेची भव्य मुख्य इमारत',
      description_en: 'Grand main building of the school'
    },
    {
      id: 2,
      src: '/images/facility-library.jpg',
      category: 'facilities',
      title_mr: 'ग्रंथालय',
      title_en: 'Library',
      description_mr: 'आधुनिक ग्रंथालय सुविधा',
      description_en: 'Modern library facility'
    },
    {
      id: 3,
      src: '/images/students.jpg',
      category: 'students',
      title_mr: 'विद्यार्थी',
      title_en: 'Students',
      description_mr: 'आनंदी विद्यार्थी',
      description_en: 'Happy students'
    },
    {
      id: 4,
      src: '/images/facility-sports.jpg',
      category: 'sports',
      title_mr: 'खेळाचे मैदान',
      title_en: 'Sports Ground',
      description_mr: 'विस्तृत खेळाचे मैदान',
      description_en: 'Expansive sports ground'
    },
    {
      id: 5,
      src: '/images/facility-labs.jpg',
      category: 'facilities',
      title_mr: 'प्रयोगशाळा',
      title_en: 'Laboratory',
      description_mr: 'आधुनिक विज्ञान प्रयोगशाळा',
      description_en: 'Modern science laboratory'
    },
    {
      id: 6,
      src: '/images/facility-hostel.jpg',
      category: 'infrastructure',
      title_mr: 'वसतिगृह',
      title_en: 'Hostel',
      description_mr: 'आरामदायक वसतिगृह',
      description_en: 'Comfortable hostel'
    }
  ]
  
  const categories = [
    { id: 'all', label_mr: 'सर्व', label_en: 'All' },
    { id: 'infrastructure', label_mr: 'पायाभूत सुविधा', label_en: 'Infrastructure' },
    { id: 'facilities', label_mr: 'सुविधा', label_en: 'Facilities' },
    { id: 'students', label_mr: 'विद्यार्थी', label_en: 'Students' },
    { id: 'sports', label_mr: 'खेळ', label_en: 'Sports' }
  ]
  
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)
  
  const openLightbox = (image) => {
    setSelectedImage(image)
  }
  
  const closeLightbox = () => {
    setSelectedImage(null)
  }
  
  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[newIndex])
  }
  
  return (
    <>
      <Helmet>
        <title>{t('nav.gallery')} - GRS Parbhani</title>
        <meta name="description" content="Photo gallery of Government Residential School Parbhani" />
      </Helmet>

      <div className="bg-white">
        {/* Header */}
        <div className="bg-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('nav.gallery')}
            </h1>
            <p className="text-xl text-indigo-200">
              {i18n.language === 'mr' 
                ? 'आमच्या शाळेची फोटो गॅलरी'
                : 'Photo gallery of our school'}
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center space-x-2 space-y-2 md:space-y-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-indigo-100'
                  }`}
                >
                  {i18n.language === 'mr' ? category.label_mr : category.label_en}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.src}
                      alt={i18n.language === 'mr' ? item.title_mr : item.title_en}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <h3 className="text-lg font-semibold mb-2">
                          {i18n.language === 'mr' ? item.title_mr : item.title_en}
                        </h3>
                        <p className="text-sm">
                          {i18n.language === 'mr' ? item.description_mr : item.description_en}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <div className="relative max-w-5xl mx-auto p-4">
                {/* Navigation buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage('prev')
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 z-10"
                >
                  <FaChevronLeft className="w-8 h-8" />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage('next')
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 z-10"
                >
                  <FaChevronRight className="w-8 h-8" />
                </button>
                
                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white hover:text-yellow-400 z-10"
                >
                  <FaTimes className="w-8 h-8" />
                </button>
                
                {/* Image */}
                <motion.img
                  src={selectedImage.src}
                  alt={i18n.language === 'mr' ? selectedImage.title_mr : selectedImage.title_en}
                  className="max-w-full max-h-[80vh] object-contain mx-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={(e) => e.stopPropagation()}
                />
                
                {/* Caption */}
                <div className="text-white text-center mt-4" onClick={(e) => e.stopPropagation()}>
                  <h3 className="text-xl font-semibold mb-2">
                    {i18n.language === 'mr' ? selectedImage.title_mr : selectedImage.title_en}
                  </h3>
                  <p className="text-gray-300">
                    {i18n.language === 'mr' ? selectedImage.description_mr : selectedImage.description_en}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default GalleryPage
