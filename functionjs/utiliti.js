function getInputById(inputId) {
    const InputField = document.getElementById(inputId);
    const InputFieldString = InputField.value;
    InputField.value = '';
    if (isNaN(InputFieldString) || InputFieldString == '') {
        alert("please Provide a Number");
        return 'x';
    }
    return parseFloat(InputFieldString);
}
function getElementFieldById(inputId) {
    const InputField = document.getElementById(inputId);
    const InputFieldString = InputField.innerText;
    return parseFloat(InputFieldString);
}
function setElementFieldById(inputId, number) {
    document.getElementById(inputId).innerText = number;
}