// 1. MOBILE HAMBURGER MENU TOGGLE
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
}

// 2. SCROLL SPY (ACTIVE NAVIGATION LINKS)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("active");
        }
    });
});

// 3. SKILLS MASTERY DYNAMIC DISPLAY
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const isActive = tag.classList.contains('active');
            skillTags.forEach(t => t.classList.remove('active'));
            if (!isActive) {
                tag.classList.add('active');
            }
        });
    });
});

function startDemo() {
        const overlay = document.getElementById('demoOverlay');
        const video = document.getElementById('biomassVideo');
        
        // Hide the button overlay
        overlay.style.display = 'none';
        
        // Start playing the video automatically
        video.play();
    }