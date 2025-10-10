import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { FaPhone, FaGraduationCap } from 'react-icons/fa'
import Button from './Button'

const ContactStrip = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  const handleCallClick = () => {
    window.open('tel:+912452123456', '_self')
  }
  
  const handleApplyClick = () => {
    navigate('/contact#admissionForm')
    setTimeout(() => {
      const formElement = document.getElementById('admissionForm')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
  
  return (
    <div className="bg-indigo-50 border-t border-indigo-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          {/* Contact Info */}
          <div className="flex items-center space-x-4 text-indigo-700">
            <FaPhone className="w-5 h-5" />
            <div>
              <div className="font-medium">{t('contact.helplineHours')}</div>
              <div className="text-sm">+91-2452-123456</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCallClick}
              className="flex items-center space-x-2"
            >
              <FaPhone className="w-4 h-4" />
              <span>{t('contact.callNow')}</span>
            </Button>
            
            <Button
              size="sm"
              onClick={handleApplyClick}
              className="flex items-center space-x-2"
            >
              <FaGraduationCap className="w-4 h-4" />
              <span>{t('nav.applyAdmission')}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactStrip
