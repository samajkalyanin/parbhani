import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaUserCog } from 'react-icons/fa'

const TopBar = () => {
  const { t, i18n } = useTranslation()
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'mr' ? 'en' : 'mr'
    i18n.changeLanguage(newLang)
  }
  
  return (
    <div className="bg-indigo-700 text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Contact info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="w-3 h-3" />
              <span className="hidden sm:inline">+91-2452-123456</span>
              <span className="sm:hidden">Call</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <FaMapMarkerAlt className="w-3 h-3" />
              <span>Parbhani, Maharashtra</span>
            </div>
          </div>
          
          {/* Right side - School name & utilities */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-sm font-medium">
              {t('site.fullName')}
            </div>
            <div className="lg:hidden text-sm font-medium">
              {t('site.name')}
            </div>
            
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded text-xs hover:bg-indigo-600 transition-colors duration-200"
            >
              {i18n.language === 'mr' ? 'English' : 'मराठी'}
            </button>
            
            {/* Login */}
            <div className="flex items-center space-x-1 hover:text-yellow-300 cursor-pointer transition-colors duration-200">
              <FaUserCog className="w-3 h-3" />
              <span className="hidden sm:inline">Login</span>
            </div>
            
            {/* Social links */}
            <div className="hidden sm:flex items-center space-x-2">
              <FaFacebook className="w-3 h-3 hover:text-blue-300 cursor-pointer transition-colors duration-200" />
              <FaTwitter className="w-3 h-3 hover:text-blue-300 cursor-pointer transition-colors duration-200" />
              <FaInstagram className="w-3 h-3 hover:text-pink-300 cursor-pointer transition-colors duration-200" />
              <FaYoutube className="w-3 h-3 hover:text-red-300 cursor-pointer transition-colors duration-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
