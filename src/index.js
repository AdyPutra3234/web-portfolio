import './styles/style.css';
import './styles/responsive.css';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';

import Aos from 'aos';
import 'aos/dist/aos.css';

import gsap from 'gsap';
import GsapTextPlugin from 'gsap/dist/TextPlugin';
gsap.registerPlugin(GsapTextPlugin);

const sectionTitle = document.querySelectorAll('.section-title');
const projectImg = document.querySelectorAll('.project-img');
const projectContent = document.querySelectorAll('.project-content');

sectionTitle.forEach((title) => {
    title.setAttribute('data-aos', 'fade-down');
});

projectImg.forEach((img) => {
    img.setAttribute('data-aos', 'zoom-in');
    // img.setAttribute('data-aos-delay', '200');
});

projectContent.forEach((content) => {
    content.setAttribute('data-aos', 'fade-right');
    content.setAttribute('data-aos-delay', '200');
});

gsap.from('.jumbotron-title', {
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.5,
});

gsap.to('.tagline', {
    duration: 2.5,
    delay: 1,
    text: {
        value: 'Front-End web developer | Electricall technician',
        delimiter: '',
    },
    ease: 'none',
});

gsap.from('.more-about', {
    duration: 1,
    y: '100%',
    opacity: 0,
    delay: 1.2,
    ease: 'bounce'
});

Aos.init({
    delay: 100,
    once: true,
});
