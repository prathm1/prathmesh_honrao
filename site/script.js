// Smoothly highlight nav link for visible section
const navLinks = [...document.querySelectorAll('.nav a')]
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean)


const io = new IntersectionObserver((entries) => {
entries.forEach(e => {
if (e.isIntersecting) {
const id = '#' + e.target.id
navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id))
}
})
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 })


sections.forEach(s => io.observe(s))


// Optional: reduce motion if user prefers
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
document.documentElement.style.scrollBehavior = 'auto'
}