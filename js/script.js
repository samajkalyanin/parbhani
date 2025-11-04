// script.js - Main application logic and interactivity

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (!menuToggle || !mobileNav) return;
  
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = !isExpanded ? 'hidden' : '';
  });
  
  // Close menu on link click
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
      menuToggle.focus();
    }
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Ignore empty anchors
      if (href === '#' || href === '#!' || !href) return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  });
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// Lazy load images
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initSmoothScroll();
  initHeaderScroll();
  initLazyLoading();
  
  // Add loading complete class
  document.body.classList.add('loaded');
});
