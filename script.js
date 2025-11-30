
const navLinks = document.getElementById('navLinks');
const navbar = document.querySelector('.navbar');

function toggleMenu() {
    navLinks.classList.toggle('active');
}
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) navLinks.classList.remove('active');
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) navLinks.classList.remove('active');
});
