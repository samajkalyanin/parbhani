import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { 
  FaGraduationCap, 
  FaBookOpen, 
  FaArrowRight,
  FaUsers,
  FaChalkboardTeacher,
  FaClock,
  FaHome,
  FaMedal,
  FaLaptop,
  FaStar
} from 'react-icons/fa'

const Hero = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleApplyClick = () => {
    setTimeout(() => {
      const formElement = document.getElementById('admission-form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const stats = [
    { icon: FaUsers, value: '1000+', key: 'students', color: 'text-blue-400' },
    { icon: FaChalkboardTeacher, value: '50+', key: 'teachers', color: 'text-green-400' },
    { icon: FaClock, value: '20+', key: 'experience', color: 'text-purple-400' },
    { icon: FaHome, value: '100%', key: 'residential', color: 'text-orange-400' },
    { icon: FaMedal, value: '95%', key: 'passRate', color: 'text-pink-400' },
    { icon: FaLaptop, value: '24/7', key: 'digitalLearning', color: 'text-cyan-400' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-blue-900/90"></div>
        
        {/* Animated Shapes */}
        <motion.div 
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-sm sm:text-base font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="mr-2 text-yellow-400" />
            <span>{t('hero.motto')}</span>
            <FaStar className="ml-2 text-yellow-400" />
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block text-white mb-2">
              {t('hero.title').split(',')[0]},
            </span>
            <motion.span 
              className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              {t('hero.title').split(',')[1]?.trim() || 'परभणी'}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={handleApplyClick}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-base rounded-xl shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGraduationCap className="mr-3" />
              <span>{t('hero.applyAdmission')}</span>
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/about')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white font-semibold text-base rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBookOpen className="mr-3" />
              <span>{t('hero.learnMore')}</span>
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.key}
                className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
                <span className="text-xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs text-gray-300 text-center">
                  {t(`hero.stats.${stat.key}`)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="block w-full h-16" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path
            d="M0,120 C240,60 480,40 720,60 C960,80 1200,40 1440,80 L1440,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
