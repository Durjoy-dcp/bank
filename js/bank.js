document.getElementById('depoist-btn').addEventListener('click', function () {
    // console.log("its clicked");
    const depositeField = document.getElementById('deposite-field');
    console.log(depositeField.value);
    const totalDeposite = document.getElementById('total-deposite');
    totalDeposite.innerText = depositeField.value;
})