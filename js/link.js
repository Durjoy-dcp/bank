document.getElementById('sbmt').addEventListener('click', function () {

    const emailField = document.getElementById('email-field');

    const passwordField = document.getElementById('password-field');


    if (emailField.value === 'downtown@gmail.com' && passwordField.value === 'bangladesh') {
        // console.log('valid user');
        document.location.href = 'bank.html';
    } else {
        // console.log('invalid user');
        alert('You forgot the password!!!');
    }

})