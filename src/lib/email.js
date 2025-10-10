import emailjs from '@emailjs/browser'

// TODO: Replace these placeholders with actual EmailJS configuration
const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID' // TODO: Add your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID' // TODO: Add your EmailJS template ID  
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY' // TODO: Add your EmailJS public key

export const sendInquiry = async (formData) => {
  try {
    // TODO: Configure EmailJS with your actual credentials
    const templateParams = {
      to_name: 'GRS Parbhani Admissions',
      from_name: formData.name,
      from_email: formData.email || 'Not provided',
      phone: formData.phone,
      current_class: formData.currentClass,
      preferred_intake: formData.preferredIntake,
      query_types: formData.queryType.join(', '),
      other_query: formData.otherQuery || 'Not specified',
      message: formData.message || 'No additional message',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    }

    // For development/testing, log the data that would be sent
    console.log('Form submission data:', templateParams)
    
    // TODO: Uncomment when EmailJS is configured
    // const response = await emailjs.send(
    //   EMAILJS_SERVICE_ID,
    //   EMAILJS_TEMPLATE_ID,
    //   templateParams,
    //   EMAILJS_PUBLIC_KEY
    // )
    
    // For now, simulate successful submission
    const response = { status: 200, text: 'Simulated success' }
    
    return response
  } catch (error) {
    console.error('Email sending failed:', error)
    throw error
  }
}

export const generateWhatsAppMessage = (formData, language = 'mr') => {
  const messages = {
    mr: {
      greeting: '🙏 नमस्कार!',
      intro: 'मी शानिशा परभणी मध्ये प्रवेशासाठी अर्ज करू इच्छितो.',
      details: '📋 माझे तपशील:',
      name: `👤 नाव: ${formData.name}`,
      phone: `📞 फोन: ${formData.phone}`,
      email: formData.email ? `📧 ईमेल: ${formData.email}` : '',
      class: `📚 सध्याचा वर्ग: ${formData.currentClass}`,
      intake: `📅 पसंतीचा प्रवेश: ${formData.preferredIntake}`,
      queryTypes: `❓ चौकशीचा प्रकार: ${formData.queryType.join(', ')}`,
      otherQuery: formData.otherQuery ? `ℹ️ इतर चौकशी: ${formData.otherQuery}` : '',
      message: formData.message ? `💬 संदेश: ${formData.message}` : '',
      thanks: 'कृपया मला प्रवेश प्रक्रियेबद्दल मार्गदर्शन करा. धन्यवाद! 🙏'
    },
    en: {
      greeting: '🙏 Namaste!',
      intro: 'I would like to apply for admission in GRS Parbhani.',
      details: '📋 My Details:',
      name: `👤 Name: ${formData.name}`,
      phone: `📞 Phone: ${formData.phone}`,
      email: formData.email ? `📧 Email: ${formData.email}` : '',
      class: `📚 Current Class: ${formData.currentClass}`,
      intake: `📅 Preferred Intake: ${formData.preferredIntake}`,
      queryTypes: `❓ Query Type: ${formData.queryType.join(', ')}`,
      otherQuery: formData.otherQuery ? `ℹ️ Other Query: ${formData.otherQuery}` : '',
      message: formData.message ? `💬 Message: ${formData.message}` : '',
      thanks: 'Please guide me about the admission process. Thank you! 🙏'
    }
  }

  const msg = messages[language] || messages.en
  
  const parts = [
    msg.greeting,
    '',
    msg.intro,
    '',
    msg.details,
    msg.name,
    msg.phone,
    msg.email,
    msg.class,
    msg.intake,
    msg.queryTypes,
    msg.otherQuery,
    msg.message,
    '',
    msg.thanks
  ].filter(part => part !== '') // Remove empty strings

  return parts.join('\n')
}
