document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar links (to keep "Home" active) ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default link behavior for '#' links
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
            }
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            // In a real application, you'd navigate here or load content dynamically
            console.log(`Navigated to: ${link.textContent}`);
        });
    });

    // --- Vertical Tab Switching (Dashboard / Job Board) ---
    const tabButtons = document.querySelectorAll('.vertical-tabs .tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' to the clicked button
            button.classList.add('active');

            // Show the corresponding content
            const targetTabId = button.getAttribute('data-tab');
            const targetTabContent = document.getElementById(targetTabId);
            if (targetTabContent) {
                targetTabContent.classList.add('active');
            }
            console.log(`Switched to tab: ${button.textContent}`);
        });
    });

    // --- Alumni Profile Carousel ---
    const alumniCarousel = document.querySelector('.alumni-carousel');
    const alumniProfiles = document.querySelectorAll('.alumni-profile');
    const carouselDots = document.querySelectorAll('.alumni-carousel-nav .dot');
    let currentAlumniIndex = 0;

    const updateAlumniCarousel = () => {
        const offset = -currentAlumniIndex * 100;
        alumniCarousel.style.transform = `translateX(${offset}%)`;

        carouselDots.forEach((dot, index) => {
            if (index === currentAlumniIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentAlumniIndex = index;
            updateAlumniCarousel();
        });
    });

    // Auto-advance carousel (optional)
    let alumniCarouselInterval = setInterval(() => {
        currentAlumniIndex = (currentAlumniIndex + 1) % alumniProfiles.length;
        updateAlumniCarousel();
    }, 5000); // Change every 5 seconds

    // Pause on hover
    alumniCarousel.addEventListener('mouseenter', () => clearInterval(alumniCarouselInterval));
    alumniCarousel.addEventListener('mouseleave', () => {
        alumniCarouselInterval = setInterval(() => {
            currentAlumniIndex = (currentAlumniIndex + 1) % alumniProfiles.length;
            updateAlumniCarousel();
        }, 5000);
    });

    // Initialize carousel
    if (alumniProfiles.length > 0) {
        updateAlumniCarousel();
    }

    // --- Other interactive elements (placeholders) ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            alert('Hamburger menu clicked! (Implement sidebar toggle here)');
        });
    }

    const notificationBell = document.querySelector('.notification-bell');
    if (notificationBell) {
        notificationBell.addEventListener('click', () => {
            alert('Notifications clicked! (Show notification dropdown)');
        });
    }

    v
});