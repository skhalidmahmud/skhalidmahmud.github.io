const gsap = window.gsap
const ScrollTrigger = window.ScrollTrigger

// theme Management
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Animate the theme change
  gsap.to(themeToggle, {
    scale: 0.9,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
    ease : "power2.inOut"
  });
});

// Mobile Menu Management
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');

  // Prevent body scroll when menu is open
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Loading Animation
function initLoader() {
  const loader = document.querySelector('.loader');
  const loadingText = loader.querySelector('.loading-text');
  const loaderProgress = loader.querySelector('.loader-progress');

  // Animate the loading text
  gsap.to(loadingText, {
    opacity: 1,
    duration: 0.7,
    ease: "power2.Out",
  });

    // Simulate loading bar
    gsap.to(loaderProgress, {
      width: '100%',
      duration: 2,
      ease: "power2.Out",
      onComplete: () => {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.7,
          onComplete: () => {
            loader.style.display = 'none';
            initAnimations();
          }
        });
      }
    });
}

window.addEventListener('load', initLoader)

function initAnimations() {
    // Navigation animation
    gsap.to('nav', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.Out",
    });
}