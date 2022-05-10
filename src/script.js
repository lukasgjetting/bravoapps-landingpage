// Enable smooth scroll when clicking ID links
document.querySelectorAll('a[href^=\\#]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (typeof document.querySelector(this.getAttribute('href')).scrollIntoView !== 'function') {
            return;
        }

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Make menu sticky
const header = document.querySelector('#header');

const handleOnScroll = () => {
    if (window.scrollY >= header.offsetTop) {
        header.classList.add('header-sticky');
    } else {
        header.classList.remove('header-sticky');
    }
};

window.onscroll = handleOnScroll;

setTimeout(() => {
    // Run it once to make sure it is correctly shown
    handleOnScroll();
}, 100);