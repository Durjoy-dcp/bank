document.getElementById('withdraw-btn').addEventListener('click', function () {
    // console.log("its clicked");
    const withdrawField = document.getElementById('withdraw-field');

    const totalwithdraw = document.getElementById('total-withdraw');

    const totalBalance = document.getElementById('total-balance');
    if (isNaN(withdrawField.value)) {
        alert('Please provide a valid number');
        withdrawField.value = '';

        return;
    }

    if (withdrawField.value > parseFloat(totalBalance.innerText)) {
        alert("Insufficient amount");
        withdrawField.value = '';

        return;
    }
    totalBalance.innerText = parseFloat(totalBalance.innerText) - parseFloat(withdrawField.value);

    totalwithdraw.innerText = parseFloat(withdrawField.value) + parseFloat(totalwithdraw.innerText);


    withdrawField.value = '';



})