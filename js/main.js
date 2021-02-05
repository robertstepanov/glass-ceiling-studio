gsap.from('.circle', { duration: 1, y: -500 });
gsap.from('.circle2', { duration: 1, x: 1500 });
gsap.from('.circle3', { duration: 1, x: -1500 });



function menuToggle() {
    const toggleMenu = document.querySelector('.toggle');
    toggleMenu.classList.toggle('active');
}
