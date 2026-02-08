// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = target.offsetTop - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Improve touch scrolling on iOS
document.addEventListener('touchmove', function() {}, { passive: true });

// Form submission handler for Netlify
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const button = this.querySelector('button[type="submit"]');
  const originalText = button.textContent;
  
  button.textContent = 'Sending...';
  button.disabled = true;
  
  // Let Netlify handle the form submission naturally
  // The page will redirect to the success page or show confirmation
  // Note: You can customize the success/error pages in Netlify settings
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('.about, .work, .contact').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    nav.style.transform = 'translateY(0)';
  } else if (currentScroll > lastScroll && currentScroll > 100) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// Add transition to nav
nav.style.transition = 'transform 0.3s ease';

// Parallax effect for hero section (disabled on mobile for performance)
if (window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });
}

// Skills animation on scroll
const skillBars = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.originalWidth;
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  bar.dataset.originalWidth = bar.style.width;
  bar.style.width = '0';
  skillObserver.observe(bar);
});

// Project cards stagger animation
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 150);
      projectObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

projectCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  projectObserver.observe(card);
});

// Viewport height fix for mobile browsers
function setVHProperty() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVHProperty();
window.addEventListener('resize', setVHProperty);
window.addEventListener('orientationchange', setVHProperty);

// Detect if on mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
  document.body.classList.add('mobile-device');
}