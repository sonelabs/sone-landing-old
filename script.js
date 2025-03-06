
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  let scrolled = false;
  
  function handleScroll() {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      scrolled = isScrolled;
      if (scrolled) {
        navbar.style.padding = '0.75rem 0';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
      } else {
        navbar.style.padding = '1.25rem 0';
        navbar.style.boxShadow = 'none';
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  
  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks.style.display === 'flex' && window.innerWidth < 768) {
          navLinks.style.display = 'none';
          mobileMenuBtn.classList.remove('active');
        }
      }
    });
  });
  
  // Add more functionality as needed
});
