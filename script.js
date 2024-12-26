// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Form Validation
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!nameInput.value.trim()) {
    alert('Please enter your name.');
    return;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('Form submitted successfully!');
  contactForm.reset();
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
});

if (localStorage.getItem('darkMode') === 'enabled') {
  darkModeToggle.checked = true;
  document.body.classList.add('dark-mode');
}

// Responsive Navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

