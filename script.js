// 1) Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList   = document.querySelector('.nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// 2) Smooth scroll for in‑page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      navList.classList.remove('open');
    }
  });
});

// 3) Reveal cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
