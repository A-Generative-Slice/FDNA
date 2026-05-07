/**
 * Najeema Afrin Portfolio - Interactions
 */

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Project Data
const projects = {
    'victorian-glam': {
        title: 'Victorian Glam Collection',
        sub: 'A Royal Synthesis of Tradition & Modernity',
        desc: 'The Victorian Glam collection is an exhaustive exploration of 19th-century royal aesthetics reimagined for the modern era. From the deep velvet ballgowns of the British aristocracy to contemporary mermaid silhouettes with industrial-grade finishing, this story showcases the full journey of a garment—from moodboard and technical illustration to the final stitched masterpiece.',
        img: 'assets/victorianglam/victorian_glam_cover.jpg',
        story: [
            'assets/victorianglam/victorian_glam_cover.jpg',
            'assets/victorianglam/moodboard_2.jpg',
            'assets/victorianglam/heritage_gown_illustration.jpg',
            'assets/victorianglam/heritage_gown_photo_1.jpg',
            'assets/victorianglam/heritage_gown_photo_2.jpg',
            'assets/victorianglam/maroon_ballgown_illustration.jpg',
            'assets/victorianglam/maroon_ballgown_photo_1.jpg',
            'assets/victorianglam/maroon_ballgown_photo_2.jpg',
            'assets/victorianglam/maroon_ballgown_photo_3.jpg',
            'assets/victorianglam/black_velvet_illustration.jpg',
            'assets/victorianglam/black_velvet_photo_1.jpg',
            'assets/victorianglam/black_velvet_photo_2.jpg',
            'assets/victorianglam/lavender_gown_illustration.jpg',
            'assets/victorianglam/lavender_gown_photo_1.jpg',
            'assets/victorianglam/lavender_gown_photo_2.jpg',
            'assets/victorianglam/lavender_gown_photo_3.jpg',
            'assets/victorianglam/maroon_mermaid_illustration.jpg',
            'assets/victorianglam/maroon_mermaid_photo_1.jpg',
            'assets/victorianglam/maroon_mermaid_photo_2.jpg',
            'assets/victorianglam/maroon_mermaid_photo_3.jpg',
            'assets/victorianglam/detail_sketch_1.jpg',
            'assets/victorianglam/detail_embroidery_1.jpg',
            'assets/victorianglam/detail_lace_1.jpg'
        ]
    }
};

// Open Project Detail
function openProject(id) {
    const data = projects[id];
    const modal = document.getElementById('project-modal');
    const storyContainer = document.getElementById('modal-story-container');
    
    // Clear previous story
    storyContainer.innerHTML = '';
    
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    
    // Populate Story View
    data.story.forEach(imgPath => {
        const img = document.createElement('img');
        img.src = imgPath;
        img.className = 'story-image';
        storyContainer.appendChild(img);
    });
    
    // Reset scroll positions
    storyContainer.scrollTop = 0;
    document.querySelector('.modal-details').scrollTop = 0;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
    document.body.classList.add('modal-open');

    gsap.from('.modal-content', { scale: 0.95, opacity: 0, duration: 0.6, ease: "power2.out" });
    gsap.from('.story-image', { opacity: 0, y: 50, duration: 0.8, stagger: 0.1, delay: 0.2 });
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
