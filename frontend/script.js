document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login');
    const signupButton = document.getElementById('signup');
    const signupPopup = document.getElementById('signupPopup')
    const loginPopup = document.getElementById('loginPopup');
    const closeBtn = document.getElementById('closeBtn');
    const close_Btn = document.getElementById('close_Btn');
    const feedbackForm = document.getElementById('feedback-form');
    const signin_a = document.getElementById('hyperlink');
    const signup_a = document.getElementById('hyper-link');
       
    signin_a.addEventListener('click', () => {
        signupPopup.style.display = 'block';
        loginPopup.style.display = 'none';
    });
    signup_a.addEventListener('click', () => {
        loginPopup.style.display = 'block';
        signupPopup.style.display = 'none';
    });
    loginButton.addEventListener('click', () => {
        loginPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });
    close_Btn.addEventListener('click', () => {
        signupPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
    });
    signupButton.addEventListener('click', () => {
        signupPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        signupPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === signupPopup) {
            signupPopup.style.display = 'none';
        }
    });

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you can add the code to handle form submission
        alert('Thank you for your feedback!');
        feedbackForm.reset();
    });
});

