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
const handleOnScroll = () => {
    if (window.scrollY >= 60) {
        document.body.classList.add('with-sticky-header');
    } else {
        document.body.classList.remove('with-sticky-header');
    }
};

window.onscroll = handleOnScroll;

setTimeout(() => {
    // Run it once to make sure it is correctly shown
    handleOnScroll();
}, 100);