document.getElementById('depoist-btn').addEventListener('click', function () {
    // console.log("its clicked");
    const depositeField = document.getElementById('deposite-field');

    const totalDeposite = document.getElementById('total-deposite');
    if (isNaN(depositeField.value)) {
        alert('Please provide a valid number');
        depositeField.value = '';

        return;
    }
    totalDeposite.innerText = parseFloat(depositeField.value) + parseFloat(totalDeposite.innerText);

    const totalBalance = document.getElementById('total-balance');
    console.log(totalBalance);
    totalBalance.innerText = parseFloat(depositeField.value) + parseFloat(totalBalance.innerText);
    depositeField.value = '';



})