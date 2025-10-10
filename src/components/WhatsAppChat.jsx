import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppChat = () => {
  const { t } = useTranslation()
  
  // TODO: Replace with actual WhatsApp number
  const whatsappNumber = '919876543210' // TODO: Add actual WhatsApp number
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `${t('hero.title')} - ${t('contact.subtitle')}\n\nHello, I would like to know more about admissions at GRS Parbhani.`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping" style={{ backgroundColor: '#25D366' }}></div>
    </div>
  )
}

export default WhatsAppChat
