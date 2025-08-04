// Get elements
const faqs = document.querySelectorAll('.faq');
const toggleAllBtn = document.getElementById('toggleAll');
const scrollTopBtn = document.getElementById('scrollTop');
const themeToggleBtn = document.getElementById('themeToggle');

let allExpanded = false;

// Accordion toggle - only one open at a time
faqs.forEach(faq => {
  faq.querySelector('.question').addEventListener('click', () => {
    faqs.forEach(f => {
      if (f !== faq) f.classList.remove('active');
    });
    faq.classList.toggle('active');
  });
});

// Expand / Collapse All FAQs
toggleAllBtn.addEventListener('click', () => {
  allExpanded = !allExpanded;
  faqs.forEach(faq => {
    faq.classList.toggle('active', allExpanded);
  });
});

// Scroll to Top
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Light / Dark Mode Toggle
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
