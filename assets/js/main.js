/**
 * RL4LLM-Agents Workshop — Main JS
 */

(function () {
  'use strict';

  // Init AOS
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Mobile nav toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navmenu = document.querySelector('.navmenu');

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function () {
      navmenu.classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.navmenu a').forEach(navLink => {
    navLink.addEventListener('click', () => {
      if (navmenu.classList.contains('mobile-nav-active')) {
        navmenu.classList.remove('mobile-nav-active');
        mobileNavToggle.classList.add('bi-list');
        mobileNavToggle.classList.remove('bi-x');
      }
    });
  });

  // Scroll top button
  const scrollTop = document.querySelector('#scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add('active')
        : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', toggleScrollTop);
  toggleScrollTop();

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navmenu a');

  function updateActiveLink() {
    const scrollY = window.scrollY;
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    });
  });

})();
