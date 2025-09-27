document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userType = urlParams.get('type') || 'alumni';
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';

    switch (userType) {
        case 'alumni':
            link.href = 'alumni.css';
            break;
        case 'student':
            link.href = 'student.css';
            break;
        case 'administration':
            link.href = 'admin.css';
            break;
        default:
            link.href = 'alumni.css';
            break;
    }
    
    document.head.appendChild(link);
});