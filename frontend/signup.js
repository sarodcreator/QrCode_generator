document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login');
    const signupButton = document.getElementById('signup');
    const loginPopup = document.getElementById('loginPopup');
    const closeBtn = document.getElementById('closeBtn');
    
    loginButton.addEventListener('click', () => {
        loginPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
    });
});

