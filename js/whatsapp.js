// whatsapp.js - Device-aware WhatsApp integration with floating button

// Detect device type
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Generate WhatsApp URL
function generateWhatsAppURL(message, phone = CONFIG.contact.whatsapp) {
  const encodedMessage = encodeURIComponent(message);
  const formattedPhone = phone.replace(/[^0-9]/g, ''); // Remove non-numeric
  
  if (isMobileDevice()) {
    return `whatsapp://send?phone=${formattedPhone}&text=${encodedMessage}`;
  } else {
    return `https://web.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`;
  }
}

// Generate WhatsApp message from form data
function generateWhatsAppMessage(formData) {
  const lang = localStorage.getItem('selectedLanguage') || CONFIG.defaultLanguage;
  
  let message = '';
  
  if (lang === 'mr') {
    message = `नमस्कार! मला शासकीय वसती विद्यालय परभणी येथे प्रवेशाबद्दल माहिती हवी आहे.\n\n`;
    message += `विद्यार्थ्याचे नाव: ${formData.studentName || formData.name || ''}\n`;
    message += `पालकाचे नाव: ${formData.parentName || ''}\n`;
    message += `मोबाइल: ${formData.phone || ''}\n`;
    message += `ईमेल: ${formData.email || ''}\n`;
    message += `वर्ग: ${formData.class || ''}\n`;
    if (formData.message) {
      message += `\nसंदेश: ${formData.message}`;
    }
  } else {
    message = `Hello! I would like to know about admissions at Government Residential School Parbhani.\n\n`;
    message += `Student Name: ${formData.studentName || formData.name || ''}\n`;
    message += `Parent Name: ${formData.parentName || ''}\n`;
    message += `Mobile: ${formData.phone || ''}\n`;
    message += `Email: ${formData.email || ''}\n`;
    message += `Class: ${formData.class || ''}\n`;
    if (formData.message) {
      message += `\nMessage: ${formData.message}`;
    }
  }
  
  return message.trim();
}

// Override form submission to use WhatsApp
function handleFormSubmit(form, data) {
  const message = generateWhatsAppMessage(data);
  const whatsappURL = generateWhatsAppURL(message);
  
  // Open WhatsApp
  window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  
  // Show success message
  const lang = localStorage.getItem('selectedLanguage') || CONFIG.defaultLanguage;
  announceToScreenReader(t('form.success', lang));
  
  // Optional: Reset form after 2 seconds
  setTimeout(() => {
    form.reset();
    form.querySelectorAll('.valid, .error').forEach(el => {
      el.classList.remove('valid', 'error');
    });
    form.querySelectorAll('.error-message').forEach(el => {
      el.style.display = 'none';
    });
  }, 2000);
}

// Initialize WhatsApp floating button
function initWhatsAppButton() {
  // Check if button already exists
  if (document.getElementById('whatsapp-float')) return;
  
  const lang = localStorage.getItem('selectedLanguage') || CONFIG.defaultLanguage;
  const quickMessage = t('whatsapp.message', lang);
  const whatsappURL = generateWhatsAppURL(quickMessage);
  
  // Create floating button
  const button = document.createElement('a');
  button.id = 'whatsapp-float';
  button.href = whatsappURL;
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.className = 'whatsapp-float';
  button.setAttribute('aria-label', t('whatsapp.tooltip', lang));
  button.title = t('whatsapp.tooltip', lang);
  
  button.innerHTML = `
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="currentColor" d="M16 0C7.163 0 0 7.163 0 16c0 2.825.737 5.607 2.137 8.048L0 32l8.052-2.137C10.493 31.263 13.175 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.467c-2.482 0-4.908-.646-7.07-1.87l-.507-.292-4.713 1.262 1.262-4.669-.292-.508C3.473 20.99 2.533 18.545 2.533 16c0-7.51 6.11-13.62 13.62-13.62 7.51 0 13.62 6.11 13.62 13.62 0 7.51-6.11 13.62-13.62 13.62zm7.305-9.793c-.346-.174-2.049-1.007-2.366-1.123-.316-.116-.547-.174-.776.174-.23.346-.893 1.123-1.094 1.347-.201.224-.402.251-.748.076-.346-.174-1.461-.539-2.785-1.722-1.031-.922-1.727-2.063-1.929-2.409-.201-.346-.022-.533.152-.707.156-.155.346-.402.518-.603.174-.201.231-.346.346-.571.116-.224.058-.424-.028-.595-.087-.174-.776-1.87-1.063-2.565-.28-.672-.56-.58-.776-.591-.201-.01-.431-.012-.661-.012s-.603.087-.92.431c-.316.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c.174.224 2.425 3.732 5.872 5.234.821.354 1.462.566 1.962.724.825.262 1.577.225 2.168.137.661-.099 2.049-.837 2.335-1.645.289-.808.289-1.501.201-1.645-.087-.143-.316-.231-.661-.402z"/>
    </svg>
    <span class="whatsapp-pulse"></span>
  `;
  
  // Add to page
  document.body.appendChild(button);
  
  // Show button after small delay
  setTimeout(() => button.classList.add('show'), 500);
  
  // Update on scroll (optional UX enhancement)
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 300) {
      button.classList.add('show');
    } else if (currentScroll < 100) {
      button.classList.remove('show');
    }
    
    lastScroll = currentScroll;
  });
}

// Create tel: fallback button for accessibility
function initCallButton() {
  // Only show if phone number is configured and not placeholder
  if (!CONFIG.contact.phone || CONFIG.contact.phone.includes('XXXX')) return;
  
  const callBtn = document.createElement('a');
  callBtn.href = `tel:${CONFIG.contact.phone}`;
  callBtn.className = 'call-float';
  callBtn.setAttribute('aria-label', `Call ${CONFIG.contact.phone}`);
  callBtn.title = `Call ${CONFIG.contact.phone}`;
  
  callBtn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" fill="currentColor"/>
    </svg>
  `;
  
  document.body.appendChild(callBtn);
  setTimeout(() => callBtn.classList.add('show'), 600);
}

// Update WhatsApp message when language changes
function updateWhatsAppLanguage() {
  const button = document.getElementById('whatsapp-float');
  if (!button) return;
  
  const lang = localStorage.getItem('selectedLanguage') || CONFIG.defaultLanguage;
  const quickMessage = t('whatsapp.message', lang);
  const whatsappURL = generateWhatsAppURL(quickMessage);
  const tooltip = t('whatsapp.tooltip', lang);
  
  button.href = whatsappURL;
  button.setAttribute('aria-label', tooltip);
  button.title = tooltip;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  initWhatsAppButton();
  
  // Update WhatsApp button when language changes
  document.addEventListener('languageChanged', updateWhatsAppLanguage);
});
