document.getElementById('sbmt').addEventListener('click', function () {

    const emailField = document.getElementById('email-field');

    const passwordField = document.getElementById('password-field');


    if (emailField.value === 'downtown@gmail.com' && passwordField.value === 'bangladesh') {
        console.log('valid user');
    } else {
        console.log('invalid user');
    }

})