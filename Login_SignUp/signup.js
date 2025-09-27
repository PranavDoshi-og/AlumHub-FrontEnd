document.addEventListener('DOMContentLoaded', () => {
    const formCarousel = document.querySelector('.form-carousel');
    const typeButtons = document.querySelectorAll('.user-type-selector .type-button');
    const signInRedirectButton = document.getElementById('signInRedirectButton');
    const signupForms = document.querySelectorAll('.signup-form-type');

    let currentFormIndex = 0; // 0: Alumni, 1: Student, 2: Administrator

    // Function to update the carousel's position
    const updateCarousel = () => {
        const offset = -currentFormIndex * 100;
        formCarousel.style.transform = `translateX(${offset}%)`;
    };

    // Add click listeners to type selector buttons
    typeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            typeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFormIndex = index;
            updateCarousel();
        });
    });

    // Handle redirection to your existing Login page
    if (signInRedirectButton) {
        signInRedirectButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }

    // Handle form submissions for all sign-up types
    signupForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formId = form.id;
            const userType = formId.split('-')[0];
            
            // Collect all form data dynamically
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            alert(`Sign Up attempt for ${userType} with details: \n${JSON.stringify(data, null, 2)}`);
            console.log(`Submitting ${formId}:`, data);

            // Here you would send this data to your backend for registration
        });
    });

    // Initialize carousel position
    updateCarousel();
});