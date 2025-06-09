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

