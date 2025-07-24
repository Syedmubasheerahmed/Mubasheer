// Enhanced JavaScript for Data Science/Cybersecurity Portfolio
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link
    function setActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .contact-item');
    animatedElements.forEach(element => {
        element.classList.add('loading');
        observer.observe(element);
    });

    // Project filtering (if needed)
    function filterProjects(category) {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    if (card.style.opacity === '0') {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
    }

    // Skill category hover effects
    document.querySelectorAll('.skill-category').forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Tech tag hover effects with enhanced animation
    document.querySelectorAll('.tech-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-2px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Project card enhanced hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
    });

    // Contact form animation (if you add a form later)
    function animateContactForm() {
        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Typing animation for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Enhanced particle effect
    function createDataParticles() {
        const heroSection = document.querySelector('.hero');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'data-particle';
            
            // Random particle types (representing data/security elements)
            const symbols = ['1', '0', '🔒', '📊', '🔐', '💡', '⚡', '🛡️'];
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            
            particle.textContent = randomSymbol;
            particle.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 16 + 10}px;
                color: rgba(255, 255, 255, 0.3);
                pointer-events: none;
                animation: dataFloat ${Math.random() * 15 + 10}s linear infinite;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 5}s;
                z-index: 1;
            `;
            heroSection.appendChild(particle);
        }
    }

    // Add CSS for data particle animation
    const dataParticleStyle = document.createElement('style');
    dataParticleStyle.textContent = `
        @keyframes dataFloat {
            0% {
                transform: translateY(0px) translateX(0px) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-120px) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(dataParticleStyle);

    createDataParticles();

    // Enhanced button click effects
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: dataRipple 0.8s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
    });

    // Add ripple animation CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes dataRipple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Performance metrics counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-item h3');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + (target === 6 || target === 5 ? '+' : '%');
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + (target === 6 || target === 5 ? '+' : '%');
                }
            }, 20);
        });
    }

    // Trigger counter animation when hero section is visible
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    });

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // Parallax effect for background shapes with data theme
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shapes .shape');
        const dataParticles = document.querySelectorAll('.data-particle');
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });

        dataParticles.forEach((particle, index) => {
            const speed = (index % 3 + 1) * 0.05;
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Console message for recruiters/developers
    console.log(`
    🚀 Data Science & Cybersecurity Portfolio
    📊 Built with: HTML5, CSS3, JavaScript ES6
    🔒 Optimized for: Performance, Accessibility, SEO
    🎯 Targeting: Data Science, Cybersecurity, Analytics roles
    
    💼 Contact: your.email@example.com
    🔗 LinkedIn: linkedin.com/in/yourprofile
    📱 GitHub: github.com/yourusername
    
    Thanks for checking out the code! 💻
    `);

    console.log('🎯 Portfolio loaded successfully! Ready for Data Science & Cybersecurity opportunities!');
});

// Additional utility functions for enhanced interactivity
function showProjectDetails(projectId) {
    // Function to show detailed project modal (can be implemented later)
    console.log(`Showing details for project: ${projectId}`);
}

function downloadResume() {
    // Function to trigger resume download
    console.log('Resume download triggered');
    // You can implement actual download functionality here
}

// Data Science themed easter egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Data science easter egg
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
        
        console.log('🎉 Data Science Mode Activated! 📊🔬🤖');
        konamiCode = [];
    }
});
