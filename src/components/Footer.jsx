import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaDownload,
  FaFilePdf,
  FaBell,
  FaExternalLinkAlt
} from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content - 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              {t('footer.about.title')}
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {t('footer.about.description')}
            </p>
            <a 
              href="https://samajkalyan.info" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm transition-colors duration-200"
            >
              <span>{t('footer.about.samajkalyan')}</span>
              <FaExternalLinkAlt className="ml-1 w-3 h-3" />
            </a>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              {t('footer.quickLinks.title')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('nav.facilities')}
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('nav.schemes')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Downloads & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              {t('footer.downloads.title')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/downloads/parbhani-app.apk" 
                  download
                  className="flex items-center text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  <FaDownload className="mr-2 w-4 h-4 text-green-400" />
                  {t('footer.downloads.mobileApp')}
                </a>
              </li>
              <li>
                <a 
                  href="/downloads/admission-brochure.pdf" 
                  download
                  className="flex items-center text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  <FaFilePdf className="mr-2 w-4 h-4 text-red-400" />
                  {t('footer.downloads.admissionPdf')}
                </a>
              </li>
              <li>
                <Link 
                  to="/blog"
                  className="flex items-center text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  <FaBell className="mr-2 w-4 h-4 text-blue-400" />
                  {t('footer.downloads.circulars')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              {t('footer.contactSocial.title')}
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start text-gray-300 text-sm">
                <FaMapMarkerAlt className="mr-2 mt-1 w-4 h-4 text-red-400 flex-shrink-0" />
                <span>
                  Government Residential School<br />
                  Parbhani, Maharashtra - 431401
                </span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <FaPhone className="mr-2 w-4 h-4 text-green-400" />
                <a href="tel:+912452123456" className="hover:text-white transition-colors duration-200">
                  +91-2452-123456
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <FaEnvelope className="mr-2 w-4 h-4 text-blue-400" />
                <a href="mailto:info@grsparbhani.edu.in" className="hover:text-white transition-colors duration-200">
                  info@grsparbhani.edu.in
                </a>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-gray-200">{t('footer.contactSocial.followUs')}</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              {t('footer.designedBy')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
