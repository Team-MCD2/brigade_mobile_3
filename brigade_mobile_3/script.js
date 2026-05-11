document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // Mobile Dropdown Toggle
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        btn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mascot Bubble Animation
    const mascotBubble = document.querySelector('.mascot-sticky .bubble');
    const messages = [
        "Besoin d'aide ? Je répare votre téléphone en 30 min !",
        "Diagnostic gratuit à la boutique !",
        "On répare toutes les marques : iPhone, Samsung...",
        "Garantie 1 an sur toutes nos réparations !"
    ];
    let msgIndex = 0;

    setInterval(() => {
        mascotBubble.style.opacity = '0';
        setTimeout(() => {
            msgIndex = (msgIndex + 1) % messages.length;
            mascotBubble.textContent = messages[msgIndex];
            mascotBubble.style.opacity = '1';
        }, 500);
    }, 5000);

    // FAQ Accordion
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Legal Modal
    const modal = document.getElementById('legal-modal');
    const openBtn = document.getElementById('open-legal');
    const closeBtn = document.querySelector('.close-modal');

    if (openBtn) {
        openBtn.onclick = () => modal.style.display = 'block';
    }

    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Simple Scroll Reveal
    const revealElements = document.querySelectorAll('.service-card, .feature-card, .review-card');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8;
            if (isVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
});
