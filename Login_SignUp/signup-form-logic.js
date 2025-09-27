document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const inputs = signupForm.querySelectorAll('input');
            const data = {};
            inputs.forEach(input => {
                data[input.name] = input.value;
            });
            
            const formId = signupForm.id;
            const userType = formId.split('-')[0];
            const name = data.name || '';
            
            console.log(`Submitting sign-up data for ${userType}:`, data);

            // Function to generate a simple username and password
            const generateCredentials = (name) => {
                const username = name.split(' ')[0].toLowerCase() + Math.floor(1000 + Math.random() * 9000);
                const password = Math.random().toString(36).substring(2, 10);
                return { username, password };
            };

            const credentials = generateCredentials(name);

            alert(`Sign-up successful for ${userType}! 
            Your generated username is: ${credentials.username}
            Your generated password is: ${credentials.password}`);
        });
    }
});