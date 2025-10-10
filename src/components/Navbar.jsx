import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { navClass } from '../utils/navClass'

const Navbar = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/facilities', label: t('nav.facilities') },
    { path: '/schemes', label: t('nav.schemes') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contact', label: t('nav.contact') },
  ]
  
  const toggleMenu = () => setIsOpen(!isOpen)
  
  return (
    <header className="bg-indigo-600 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo size="lg" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={navClass(location.pathname === item.path)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Download App Button */}
            <Link
              to="/downloads/parbhani-app.apk"
              download
              className="ml-4 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-200 flex items-center space-x-2"
            >
              <FaDownload className="w-4 h-4" />
              <span className="hidden lg:inline">{t('nav.downloadApp')}</span>
              <span className="lg:hidden">App</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-300 focus:outline-none focus:text-yellow-300 transition-colors duration-200"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-indigo-600"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${navClass(location.pathname === item.path)} block px-3 py-2 text-base font-medium`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Download App */}
                <Link
                  to="/downloads/parbhani-app.apk"
                  download
                  className="bg-yellow-500 text-black px-3 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-200 flex items-center space-x-2 mt-3"
                  onClick={() => setIsOpen(false)}
                >
                  <FaDownload className="w-4 h-4" />
                  <span>{t('nav.downloadApp')}</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
