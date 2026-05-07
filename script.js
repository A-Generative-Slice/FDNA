/**
 * Najeema Afrin Portfolio - Interactions
 */

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Project Data
const projects = {
    'item-1': {
        title: 'The Sketchbook: Editorial Vision',
        desc: 'A curated series of fashion illustrations that bridge the gap between abstract concept and wearable reality. This collection explores the use of negative space and fluid line-work to convey the movement of silk on the human form. It represents my initial design phase, where curiosity meets the tip of the pencil.',
        img: 'https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&q=80&w=1200'
    },
    'item-2': {
        title: 'Stitched with Care: Industrial Precision',
        desc: 'Drawing from my hands-on experience in the export sector, these pieces showcase the technical side of fashion. From intricate seam finishes to calibrated industrial stitching, this work demonstrates my ability to bring a design to life with factory-level precision and an uncompromising eye for detail.',
        img: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=1200'
    },
    'item-3': {
        title: 'The Jamun Project: Sustainable Science',
        desc: 'My flagship research project focusing on eco-conscious fashion. I successfully extracted high-pigment natural dyes from Jamun seeds, applying them to organic cotton and silk samples. This project reflects my commitment to sustainable textile science and my desire to bring environmental curiosity into the fashion classroom.',
        img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200'
    }
};

// Open Project Detail
function openProject(id) {
    const data = projects[id];
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    
    const modal = document.getElementById('project-modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scroll
    document.body.classList.add('modal-open');

    gsap.from('.modal-content', { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.7)" });
}

// Close Project Detail
function closeProject() {
    gsap.to('.modal-content', { 
        scale: 0.8, opacity: 0, duration: 0.3, 
        onComplete: () => {
            document.getElementById('project-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.classList.remove('modal-open');
        } 
    });
}

// Animations
gsap.from('.hero-content h1', { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
gsap.from('.hero-content p', { opacity: 0, y: 30, duration: 1.5, delay: 0.8 });

const reveals = document.querySelectorAll('.reveal');
reveals.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });
});

// Navigation Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        gsap.to(window, { duration: 1, scrollTo: target, ease: "power2.inOut" });
    });
});
