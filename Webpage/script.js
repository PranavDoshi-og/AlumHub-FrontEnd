document.addEventListener('DOMContentLoaded', () => {
    const userProfileLink = document.getElementById('userProfileLink');

    if (userProfileLink) {
        // --- STEP 1: Determine User Role ---
        // In a real application, after a user logs in, your backend would
        // send their role. You would then store this in localStorage or sessionStorage.
        // For testing, you can uncomment one of these lines in your browser's console
        // to simulate different roles:
        // localStorage.setItem('userRole', 'alumni');
        // localStorage.setItem('userRole', 'student');
        // localStorage.setItem('userRole', 'admin'); // For when you implement admin

        const currentUserRole = localStorage.getItem('userRole'); // Get role from storage

        // --- STEP 2: Update the Link based on Role ---
        let targetProfilePage = 'login.html'; // Default if no role or unknown

        switch (currentUserRole) {
            case 'alumni':
                targetProfilePage = 'alumni-profile.html';
                break;
            case 'student':
                targetProfilePage = 'student-profile.html';
                break;
            case 'admin':
                targetProfilePage = 'admin-profile.html'; // Placeholder for admin
                break;
            default:
                console.warn('No user role found or unknown role. Redirecting to login.');
                break;
        }

        userProfileLink.href = targetProfilePage;
    }

    // --- Optional: Navbar Active State Logic (if applicable to your main nav) ---
    // Assuming 'style.css' handles '.nav-link.active' for highlighting
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar .nav-links .nav-link'); // Adjusted selector

    navLinks.forEach(link => {
        if (link.href.includes(currentPath) && currentPath !== "") {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Handle profile icon active state (if its the current page)
    if (userProfileLink && userProfileLink.href.includes(currentPath) && currentPath !== "") {
        userProfileLink.classList.add('active');
    } else if (userProfileLink) {
        // Remove active class if not on the profile page itself
        userProfileLink.classList.remove('active');
    }

    // Example for setting a role for testing purposes (you'd remove this in production)
    // For manual testing:
    // Go to your browser's console and type:
    // localStorage.setItem('userRole', 'alumni'); window.location.reload();
    // localStorage.setItem('userRole', 'student'); window.location.reload();
    // localStorage.removeItem('userRole'); window.location.reload();
});