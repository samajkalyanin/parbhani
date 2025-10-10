import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const Hero = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  const handleApplyClick = () => {
    navigate('/contact#admissionForm')
    // Scroll to form after navigation
    setTimeout(() => {
      const formElement = document.getElementById('admissionForm')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
  
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/images/hero-placeholder.jpg)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-4 text-indigo-100 max-w-4xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          {/* Motto */}
          <p className="text-lg md:text-xl mb-8 text-yellow-300 font-medium italic">
            {t('hero.motto')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              onClick={handleApplyClick}
              size="lg"
              className="w-full sm:w-auto"
            >
              {t('hero.applyAdmission')}
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/about')}
              className="w-full sm:w-auto"
            >
              {t('hero.learnMore')}
            </Button>
          </div>
          
          {/* Quick Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400">1000+</div>
              <div className="text-indigo-100 mt-2">विद्यार्थी / Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-indigo-100 mt-2">शिक्षक / Teachers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400">20+</div>
              <div className="text-indigo-100 mt-2">वर्षांचा अनुभव / Years</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 text-white"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
