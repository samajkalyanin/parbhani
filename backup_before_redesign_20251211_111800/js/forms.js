// forms.js - Form validation and submission handling with WCAG compliance

// Validation patterns
const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[6-9]\d{9}$/,  // Indian mobile format: starts with 6-9, 10 digits
  name: /^[a-zA-Z\u0900-\u097F\s]{2,50}$/  // English and Devanagari, 2-50 chars
};

// Validate individual field
function validateField(input) {
  const value = input.value.trim();
  const type = input.dataset.validate;
  const required = input.hasAttribute('required');
  
  // Clear previous errors
  clearFieldError(input);
  
  // Check if required field is empty
  if (required && !value) {
    showFieldError(input, t('form.required'));
    return false;
  }
  
  // Skip validation if optional and empty
  if (!required && !value) {
    return true;
  }
  
  // Type-specific validation
  switch (type) {
    case 'email':
      if (!PATTERNS.email.test(value)) {
        showFieldError(input, t('form.invalidEmail'));
        return false;
      }
      break;
      
    case 'phone':
      if (!PATTERNS.phone.test(value)) {
        showFieldError(input, t('form.invalidPhone'));
        return false;
      }
      break;
      
    case 'name':
      if (!PATTERNS.name.test(value)) {
        showFieldError(input, t('form.required'));
        return false;
      }
      break;
  }
  
  // Field is valid
  input.classList.add('valid');
  input.classList.remove('error');
  return true;
}

// Show field error with WCAG compliance
function showFieldError(input, message) {
  input.classList.add('error');
  input.classList.remove('valid');
  
  // Find or create error message element
  let errorDiv = input.parentElement.querySelector('.error-message');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.id = `error-${input.id || input.name}`;
    input.parentElement.appendChild(errorDiv);
  }
  
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
  
  // Set ARIA attributes for accessibility
  input.setAttribute('aria-invalid', 'true');
  input.setAttribute('aria-describedby', errorDiv.id);
  
  // Announce error to screen readers
  announceToScreenReader(message);
}

// Clear field error
function clearFieldError(input) {
  input.classList.remove('error');
  input.setAttribute('aria-invalid', 'false');
  
  const errorDiv = input.parentElement.querySelector('.error-message');
  if (errorDiv) {
    errorDiv.style.display = 'none';
    errorDiv.textContent = '';
  }
}

// Announce to screen readers using aria-live region
function announceToScreenReader(message) {
  let liveRegion = document.getElementById('aria-live-region');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'aria-live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  }
  
  liveRegion.textContent = message;
  setTimeout(() => {
    liveRegion.textContent = '';
  }, 1000);
}

// Validate entire form
function validateForm(formId) {
  const form = document.getElementById(formId) || document.querySelector(formId);
  if (!form) return false;
  
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;
  let firstInvalidField = null;
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
      if (!firstInvalidField) {
        firstInvalidField = input;
      }
    }
  });
  
  // Focus first invalid field
  if (!isValid && firstInvalidField) {
    firstInvalidField.focus();
    firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  return isValid;
}

// Get form data as object
function getFormData(formId) {
  const form = document.getElementById(formId) || document.querySelector(formId);
  if (!form) return {};
  
  const data = {};
  const inputs = form.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    const name = input.name || input.id;
    if (name && input.type !== 'submit' && input.type !== 'button') {
      data[name] = input.value.trim();
    }
  });
  
  return data;
}

// Initialize form validation
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate="true"]');
  
  forms.forEach(form => {
    // Real-time validation on blur
    const inputs = form.querySelectorAll('input[data-validate], textarea[data-validate], select[data-validate]');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (validateForm(form)) {
        const formData = getFormData(form);
        handleFormSubmit(form, formData);
      }
    });
  });
}

// Handle form submission (to be overridden by whatsapp.js)
function handleFormSubmit(form, data) {
  console.log('Form submitted:', data);
  // Default behavior - this will be overridden by WhatsApp integration
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initFormValidation);
