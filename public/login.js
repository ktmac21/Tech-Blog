const signInForm = document.querySelector('#sign-in-form');
const signUpForm = document.querySelector('#sign-up-form');

console.log("I'm Here!")

signUpForm.addEventListener('submit', async (e) => {
e.preventDefault();

    const username = document.querySelector('#create-username');
    const email = document.querySelector('#create-email');
    const password = document.querySelector('#create-password');

    const payload = JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
    });

    const signupPost = await fetch('/api/users/', {
        method: 'POST',
        body: payload,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (signupPost.ok) {
        document.location.hfef = '/dashboard';
    }
});

signInForm. addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.querySelector('#sign-in-email');
    const password = document.querySelector('#sign-in-password');

    const payload = JSON.stringify({
        email: email.value,
        password: password.value,
    });

    const loginPost = await fetch('/api/users/login', {
        method: 'POST',
        body: payload,
        headers: {
            'Content-Type': 'application/json',
        }, 
    });

    if (loginPost.ok) {
        document.location.href = '/dashboard';
    }
});