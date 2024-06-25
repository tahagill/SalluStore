//Log-in Page Start - UMUT
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.loginPageFormButton input[type="button"]');
    const errorMessage = document.querySelector('.loginPageFormErrorMessage');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginButton.addEventListener('click', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'admin' && password === 'admin') {
            window.location.href = 'index.html';
        } else {
            if (username === '' || password === '') {
                errorMessage.textContent = 'Please enter Email / Phone Number and Password.';
            } else {
                errorMessage.textContent = 'Email / Phone Number or Password is incorrect. Please try again.';
            }
        }
        loginButton.disabled = true;

        setTimeout(function () {
            loginButton.disabled = false;
        }, 3000);
    });
    usernameInput.addEventListener('input', function () {
        loginButton.disabled = false;
    });

    passwordInput.addEventListener('input', function () {
        loginButton.disabled = false;
    });
});
//Log-in Page End - UMUT