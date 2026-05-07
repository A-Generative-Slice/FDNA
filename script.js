/**
 * Najeema Afrin Portfolio - Interactions
 */

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Project Data
const projects = {
    'vg-1': {
        title: 'Lavender Blossom: Ethereal Ballgown',
        desc: 'A dream-like lavender and silver gown featuring delicate tulle layers and a shimmering bodice. This piece explores the softer side of the Victorian Glam collection, balancing historical silhouettes with modern sparkle. (Reference: Illustration ...053 / Photo ...054)',
        img: 'assets/victorianglam/6332118641989587053.jpg'
    },
    'vg-2': {
        title: 'Midnight Sparkle: Black Velvet Gown',
        desc: 'A sophisticated black velvet and sparkle tulle gown. Features a detailed velvet bodice with beaded trim and a matching rhinestone tiara. This design represents the "Glam" in Victorian Glam, emphasizing high-contrast luxury. (Reference: Illustration ...099 / Photo ...101)',
        img: 'assets/victorianglam/6332118641989587099.jpg'
    },
    'vg-3': {
        title: 'Maroon Velvet Majesty',
        desc: 'A heavy maroon velvet and tulle ballgown. This technical masterpiece includes matching velvet gloves and a matchtone tiara. The rich texture of the velvet combined with the airiness of the tulle creates a commanding presence. (Reference: Illustration ...065 / Photo ...066)',
        img: 'assets/victorianglam/6332118641989587065.jpg'
    },
    'vg-4': {
        title: 'Maroon Mermaid: Modern Silhouette',
        desc: 'A bridge between traditional Victorian tones and modern mermaid silhouettes. Features a high-pigment maroon base with a delicate diamond-patterned overlay that catches the light with every movement. (Reference: Illustration ...090 / Photo ...087)',
        img: 'assets/victorianglam/6332118641989587090.jpg'
    },
    'vg-5': {
        title: 'Royal Victorian Heritage',
        desc: 'The flagship of the collection—a tiered Victorian dress in white and maroon. This design features intricate floral prints on the sleeves and a corset-style lacing, echoing the peak of 19th-century royal fashion. (Reference: Illustration ...364 / Photo ...045)',
        img: 'assets/victorianglam/6199535707391463364.jpg'
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

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

function toggleMenu() {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
}

mobileMenuBtn.addEventListener('click', toggleMenu);

// Navigation Smooth Scroll
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (mobileNav.classList.contains('active')) {
            toggleMenu();
        }

        gsap.to(window, { 
            duration: 1, 
            scrollTo: { y: targetId, offsetY: 70 }, 
            ease: "power2.inOut" 
        });
    });
});
