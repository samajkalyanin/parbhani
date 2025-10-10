import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Button from './Button'
import { sendInquiry, generateWhatsAppMessage } from '../lib/email'
import { addInquiry } from '../data/inquiries'

const AdmissionForm = () => {
  const { t, i18n } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    currentClass: '',
    preferredIntake: '',
    queryType: [],
    otherQuery: '',
    message: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  
  const classes = [
    'KG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'
  ]
  
  const intakeOptions = [
    { value: 'immediate', label: t('form.immediate') },
    { value: 'nextAcademicYear', label: t('form.nextAcademicYear') }
  ]
  
  const queryTypes = [
    { value: 'admission', label: t('form.admission') },
    { value: 'scholarship', label: t('form.scholarship') },
    { value: 'general', label: t('form.general') },
    { value: 'other', label: t('form.other') }
  ]
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  const handleQueryTypeChange = (value) => {
    setFormData(prev => {
      const newQueryType = prev.queryType.includes(value)
        ? prev.queryType.filter(type => type !== value)
        : [...prev.queryType, value]
      return { ...prev, queryType: newQueryType }
    })
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t('form.nameRequired')
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t('form.phoneRequired')
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Valid 10-digit phone number required'
    }
    
    if (!formData.currentClass) {
      newErrors.currentClass = 'Please select current class'
    }
    
    if (!formData.preferredIntake) {
      newErrors.preferredIntake = 'Please select preferred intake'
    }
    
    if (formData.queryType.length === 0) {
      newErrors.queryType = 'Please select at least one query type'
    }
    
    if (!formData.consent) {
      newErrors.consent = t('form.consentRequired')
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Send email via EmailJS
      await sendInquiry(formData)
      
      // Store locally
      addInquiry(formData)
      
      toast.success(t('form.success'))
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        currentClass: '',
        preferredIntake: '',
        queryType: [],
        otherQuery: '',
        message: '',
        consent: false
      })
      
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error(t('form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleWhatsAppSubmit = async () => {
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // First submit the form
      await sendInquiry(formData)
      addInquiry(formData)
      
      // Generate WhatsApp message
      const message = generateWhatsAppMessage(formData, i18n.language)
      
      // TODO: Replace with actual WhatsApp number
      const whatsappNumber = '919876543210' // TODO: Add actual WhatsApp number
      
      // Open WhatsApp
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
      
      toast.success('Form submitted! Opening WhatsApp...')
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        currentClass: '',
        preferredIntake: '',
        queryType: [],
        otherQuery: '',
        message: '',
        consent: false
      })
      
    } catch (error) {
      console.error('WhatsApp submission error:', error)
      toast.error(t('form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="admissionForm"
    >
      <h3 className="text-2xl font-bold text-indigo-900 mb-6">{t('contact.admissionForm')}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={t('form.name')}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.phone')} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="10-digit mobile number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={t('form.email')}
          />
        </div>
        
        {/* Current Class */}
        <div>
          <label htmlFor="currentClass" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.currentClass')} *
          </label>
          <select
            id="currentClass"
            name="currentClass"
            value={formData.currentClass}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.currentClass ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">{t('form.selectClass')}</option>
            {classes.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
          {errors.currentClass && <p className="mt-1 text-sm text-red-600">{errors.currentClass}</p>}
        </div>
        
        {/* Preferred Intake */}
        <div>
          <label htmlFor="preferredIntake" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.preferredIntake')} *
          </label>
          <select
            id="preferredIntake"
            name="preferredIntake"
            value={formData.preferredIntake}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.preferredIntake ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">{t('form.selectIntake')}</option>
            {intakeOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors.preferredIntake && <p className="mt-1 text-sm text-red-600">{errors.preferredIntake}</p>}
        </div>
        
        {/* Query Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('form.queryType')} *
          </label>
          <div className="space-y-2">
            {queryTypes.map(type => (
              <label key={type.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.queryType.includes(type.value)}
                  onChange={() => handleQueryTypeChange(type.value)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-700">{type.label}</span>
              </label>
            ))}
          </div>
          {errors.queryType && <p className="mt-1 text-sm text-red-600">{errors.queryType}</p>}
        </div>
        
        {/* Other Query */}
        {formData.queryType.includes('other') && (
          <div>
            <label htmlFor="otherQuery" className="block text-sm font-medium text-gray-700 mb-1">
              Other Query Details
            </label>
            <input
              type="text"
              id="otherQuery"
              name="otherQuery"
              value={formData.otherQuery}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Please specify your query"
            />
          </div>
        )}
        
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {t('form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder={t('form.message')}
          />
        </div>
        
        {/* Consent */}
        <div>
          <label className="flex items-start">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className={`mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ${
                errors.consent ? 'border-red-500' : ''
              }`}
            />
            <span className="ml-2 text-sm text-gray-700">
              {t('form.consent')} *
            </span>
          </label>
          {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
        </div>
        
        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center space-x-2 flex-1"
          >
            <FaPaperPlane className="w-4 h-4" />
            <span>{isSubmitting ? t('form.submitting') : t('form.submit')}</span>
          </Button>
          
          <Button
            type="button"
            variant="success"
            onClick={handleWhatsAppSubmit}
            disabled={isSubmitting}
            className="flex items-center justify-center space-x-2 flex-1"
            style={{ backgroundColor: '#25D366' }}
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>{t('form.sendWhatsApp')}</span>
          </Button>
        </div>
      </form>
    </motion.div>
  )
}

export default AdmissionForm
