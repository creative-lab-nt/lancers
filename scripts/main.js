'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header
    const header = document.querySelector('.header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
    }

    // 2. Scroll Animations with IntersectionObserver
    const animatedElements = document.querySelectorAll('.anim-fade-in, .anim-fade-in-up');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

});
