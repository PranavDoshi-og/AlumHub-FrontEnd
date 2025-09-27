document.addEventListener('DOMContentLoaded', () => {
    const formCarousel = document.querySelector('.form-carousel');
    const typeButtons = document.querySelectorAll('.user-type-selector .type-button');
    const signUpRedirectButton = document.getElementById('signUpRedirectButton');
    const loginForms = document.querySelectorAll('.login-form-type');

    let currentFormIndex = 0; // 0: Alumni, 1: Student, 2: Administrator

    // Function to update the carousel's position
    const updateCarousel = () => {
        const offset = -currentFormIndex * 100; // -0% for first, -100% for second, etc.
        formCarousel.style.transform = `translateX(${offset}%)`;
    };

    // Add click listeners to type selector buttons
    typeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            typeButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            currentFormIndex = index;
            updateCarousel();
        });
    });

    // Handle redirection to your existing Sign Up page
    if (signUpRedirectButton) {
        signUpRedirectButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'signup.html'; // Points to your existing signup.html
        });
    }

    // Handle form submissions for all login types
    loginForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formId = form.id;
            const emailOrIdInput = form.querySelector('input[type="email"]').value;
            const passwordInput = form.querySelector('input[type="password"]').value;

            alert(`Login attempt for ${formId} with Email/ID: ${emailOrIdInput} and Password: ${passwordInput}`);
            console.log(`Submitting ${formId}:`, { emailOrId: emailOrIdInput, password: passwordInput });

            // Here you would send this data to your backend for authentication
            // e.g., fetch('/api/login', { method: 'POST', body: JSON.stringify({ type: formId, emailOrId: emailOrIdInput, password: passwordInput }) });
        });
    });

    // Handle "Forgot your password?" link click (optional)
    const forgotPasswordLinks = document.querySelectorAll('.forgot-password');
    if (forgotPasswordLinks) {
        forgotPasswordLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Forgot Password clicked! (Implement your password reset logic here)');
                // Example: window.location.href = 'forgot-password.html';
            });
        });
    }
    

    // Initialize carousel position
    updateCarousel();
});