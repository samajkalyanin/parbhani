// animations.js - Scroll animations with reduced motion support

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Animated counter for stats
function animateCounter(element) {
  if (prefersReducedMotion || !element) return;
  
  const target = parseInt(element.getAttribute('data-count')) || 0;
  const suffix = element.getAttribute('data-suffix') || '+';
  const duration = 2000;
  const increment = target / (duration / 16);
  
  let current = 0;
  const startTime = Date.now();
  
  function updateCounter() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    current = Math.floor(progress * target);
    element.textContent = current.toLocaleString() + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target.toLocaleString() + suffix;
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Initialize counters with Intersection Observer
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (counters.length === 0) return;
  
  let animated = false;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => animateCounter(counter));
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '0px'
  });
  
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// Fade in elements on scroll
function initScrollAnimations() {
  if (prefersReducedMotion) return;
  
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in, .slide-in-left, .slide-in-right');
  
  if (animatedElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// Parallax effect for hero sections
function initParallax() {
  if (prefersReducedMotion) return;
  
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
      const yPos = -(scrolled * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  }, { passive: true });
}

// Stagger animation for lists
function initStaggerAnimation() {
  if (prefersReducedMotion) return;
  
  const staggerContainers = document.querySelectorAll('[data-stagger]');
  
  staggerContainers.forEach(container => {
    const items = container.children;
    const delay = parseInt(container.getAttribute('data-stagger')) || 100;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Array.from(items).forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('stagger-in');
            }, index * delay);
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    observer.observe(container);
  });
}

// Smooth reveal on scroll
function initRevealOnScroll() {
  if (prefersReducedMotion) return;
  
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  if (revealElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  });
  
  revealElements.forEach(el => observer.observe(el));
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
  if (!prefersReducedMotion) {
    initCounters();
    initScrollAnimations();
    initParallax();
    initStaggerAnimation();
    initRevealOnScroll();
  }
  
  // Add CSS class to indicate animations are enabled/disabled
  document.documentElement.classList.add(
    prefersReducedMotion ? 'reduce-motion' : 'animations-enabled'
  );
});

// Re-initialize on language change (some content may be dynamically loaded)
document.addEventListener('languageChanged', function() {
  if (!prefersReducedMotion) {
    // Re-observe new elements that may have been added
    setTimeout(() => {
      initScrollAnimations();
      initRevealOnScroll();
    }, 100);
  }
});
