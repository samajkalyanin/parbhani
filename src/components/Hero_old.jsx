import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  FaGraduationCap, 
  FaUsers, 
  FaChalkboardTeacher, 
  FaClock,
  FaBookOpen,
  FaTrophy,
  FaStar,
  FaArrowRight,
  FaHome,
  FaMedal,
  FaLaptop,
  FaHeart,
  FaGamepad
} from 'react-icons/fa'
import Button from './Button'

const Hero = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  const handleApplyClick = () => {
    navigate('/contact#admissionForm')
    setTimeout(() => {
      const formElement = document.getElementById('admissionForm')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  // Floating icons for background animation
  const floatingIcons = [
    { icon: FaBookOpen, delay: 0, x: '15%', y: '20%' },
    { icon: FaTrophy, delay: 1, x: '85%', y: '25%' },
    { icon: FaGraduationCap, delay: 2, x: '10%', y: '70%' },
    { icon: FaStar, delay: 3, x: '90%', y: '80%' },
  ]
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-16 sm:py-20">
      {/* Animated background with site colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-indigo-800/70 to-indigo-700/80"></div>
        
        {/* Modern animated shapes with site colors */}
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-indigo-600/30 rounded-full filter blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-yellow-600/30 rounded-full filter blur-3xl"
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
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-yellow-600/20 rounded-full filter blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating background icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-white/10 text-6xl pointer-events-none"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.icon />
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main content - centered with consistent margins */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          className="w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated badge with icon - extra large text for Marathi */}
          <motion.div 
            className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-indigo-100 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 max-w-fit mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="mr-3 sm:mr-4 text-yellow-400 flex-shrink-0 text-xl sm:text-2xl md:text-3xl" />
            <span className="text-center whitespace-nowrap">{t('hero.motto')}</span>
            <FaStar className="ml-3 sm:ml-4 text-yellow-400 flex-shrink-0 text-xl sm:text-2xl md:text-3xl" />
          </motion.div>

          {/* Main headline with animated Parbhani and enhanced styling - extra large for Marathi */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black mb-8 leading-tight w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block text-white mb-2 break-words">
              {t('hero.title').includes(',') ? t('hero.title').split(',')[0] + ',' : t('hero.title')}
            </span>
            <motion.span 
              className="gradient-text inline-block break-words bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%',
                paddingBottom: '6px'
              }}
            >
              {t('hero.title').includes(',') ? t('hero.title').split(',')[1].trim() : 'परभणी'}
            </motion.span>
          </motion.h1>

          {/* Subtitle with extra large text for Marathi */}
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-10 text-indigo-100 max-w-4xl mx-auto leading-relaxed break-words font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Enhanced CTA Buttons with improved visibility and responsive sizing */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
                        <motion.button
              onClick={handleApplyClick}
              className="group relative overflow-hidden px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-5 sm:py-6 md:py-7 lg:py-8 xl:py-9 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white font-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-2xl shadow-2xl hover:shadow-indigo-500/25 border-2 border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 flex items-center justify-center w-full sm:w-auto min-w-[220px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[350px] xl:min-w-[400px]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaGraduationCap className="mr-3 sm:mr-4 md:mr-5 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex-shrink-0 relative z-10" />
              <span className="text-center relative z-10 whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-none">
                {t('hero.applyAdmission')}
              </span>
              <FaArrowRight className="ml-3 sm:ml-4 md:ml-5 text-lg sm:text-xl md:text-2xl lg:text-3xl group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 relative z-10" />
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/about')}
              className="group relative overflow-hidden px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-5 sm:py-6 md:py-7 lg:py-8 xl:py-9 bg-white/5 backdrop-blur-xl border-2 border-white/40 text-white font-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-2xl hover:bg-white/15 hover:border-white/60 shadow-lg hover:shadow-white/10 transition-all duration-300 flex items-center justify-center w-full sm:w-auto min-w-[220px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[350px] xl:min-w-[400px]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaBookOpen className="mr-3 sm:mr-4 md:mr-5 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl flex-shrink-0 relative z-10" />
              <span className="text-center relative z-10 whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-none">
                {t('hero.learnMore')}
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/about')}
              className="group relative overflow-hidden px-5 sm:px-7 md:px-9 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-7 bg-white/5 backdrop-blur-xl border-2 border-white/40 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl rounded-2xl hover:bg-white/15 hover:border-white/60 shadow-lg hover:shadow-white/10 transition-all duration-300 flex items-center justify-center w-full sm:w-auto min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaBookOpen className="mr-3 sm:mr-4 text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0 relative z-10" />
              <span className="text-center relative z-10 whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-none">
                {t('hero.learnMore')}
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced stats grid with compact design */}
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* All stats - extra large sizing for Marathi text visibility */}
            <motion.div 
              className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer w-full"
              style={{ height: '150px', minHeight: '150px', maxHeight: '150px' }}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <FaUsers className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-indigo-400 mb-2 flex-shrink-0" />
              <motion.span 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                1000+
              </motion.span>
              <span className="text-base sm:text-lg md:text-xl text-white font-bold text-center leading-tight px-1 overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.4',
                height: '40px'
              }}>
                {t('hero.stats.students')}
              </span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer w-full"
              style={{ height: '150px', minHeight: '150px', maxHeight: '150px' }}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <FaChalkboardTeacher className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-500 mb-2 flex-shrink-0" />
              <motion.span 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                50+
              </motion.span>
              <span className="text-base sm:text-lg md:text-xl text-white font-bold text-center leading-tight px-1 overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.4',
                height: '40px'
              }}>
                {t('hero.stats.teachers')}
              </span>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer w-full"
              style={{ height: '150px', minHeight: '150px', maxHeight: '150px' }}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <FaClock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-500 mb-2 flex-shrink-0" />
              <motion.span 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                20+
              </motion.span>
              <span className="text-base sm:text-lg md:text-xl text-white font-bold text-center leading-tight px-1 overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.4',
                height: '40px'
              }}>
                {t('hero.stats.experience')}
              </span>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer w-full"
              style={{ height: '150px', minHeight: '150px', maxHeight: '150px' }}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <FaHome className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-500 mb-2 flex-shrink-0" />
              <motion.span 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                100%
              </motion.span>
              <span className="text-base sm:text-lg md:text-xl text-white font-bold text-center leading-tight px-1 overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.4',
                height: '40px'
              }}>
                {t('hero.stats.residential')}
              </span>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer w-full"
              style={{ height: '150px', minHeight: '150px', maxHeight: '150px' }}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <FaMedal className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500 mb-2 flex-shrink-0" />
              <motion.span 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                95%
              </motion.span>
              <span className="text-base sm:text-lg md:text-xl text-white font-bold text-center leading-tight px-1 overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.4',
                height: '40px'
              }}>
                {t('hero.stats.passRate')}
              </span>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer w-full"
              style={{ height: '150px', minHeight: '150px', maxHeight: '150px' }}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <FaLaptop className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-500 mb-2 flex-shrink-0" />
              <motion.span 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                24/7
              </motion.span>
              <span className="text-base sm:text-lg md:text-xl text-white font-bold text-center leading-tight px-1 overflow-hidden" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.4',
                height: '40px'
              }}>
                {t('hero.stats.digitalLearning')}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern animated wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <motion.svg
          className="block w-full h-12 md:h-16 text-white"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          <path
            d="M0,120 C240,60 480,40 720,60 C960,80 1200,40 1440,80 L1440,120 Z"
            fill="white"
          />
        </motion.svg>
      </div>
    </section>
  )
}

export default Hero