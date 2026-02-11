const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');
const revealItems = document.querySelectorAll('.reveal');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navAnchors.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 60, 260)}ms`;
  observer.observe(item);
});

const sections = document.querySelectorAll('section[id]');
const handleActiveLink = () => {
  const scrollY = window.scrollY + 140;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (!activeLink) return;

    if (scrollY >= top && scrollY < top + height) {
      activeLink.classList.add('active');
    } else {
      activeLink.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', handleActiveLink);
handleActiveLink();

const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
