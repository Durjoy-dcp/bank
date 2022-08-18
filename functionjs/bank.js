document.getElementById('depoist-btn').addEventListener('click', function () {
    const depositAmount = getInputById('deposite-field');
    // console.log(depositAmount);
    if (depositAmount === 'x') return;
    const depoitTotal = getElementFieldById('total-deposite');
    setElementFieldById('total-deposite', depoitTotal + depositAmount);
    const balanceTotal = getElementFieldById('total-balance');
    setElementFieldById('total-balance', depositAmount + balanceTotal);
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputById('withdraw-field');
    if (withdrawAmount === 'x') return;
    const withdrawTotal = getElementFieldById('total-withdraw');
    setElementFieldById('total-withdraw', withdrawTotal + withdrawAmount);
    const balanceTotal = getElementFieldById('total-balance');
    setElementFieldById('total-balance', balanceTotal - withdrawAmount);

})