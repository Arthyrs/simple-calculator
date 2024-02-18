const buttonDel = document.getElementById('delete-char');
const buttonC = document.getElementById('reset');
const equal = document.getElementById('equal');

buttonDel.onclick = function deleteValue() {
    let inputField = document.getElementById('input');
    inputField.value = inputField.value.slice(0, -1);
}

buttonC.onclick = function resetInput() {
    let inputField = document.getElementById('input');
    inputField.value = "";
}

equal.onclick = function calculate() {
    let inputField = document.getElementById('input').value;
    let y = eval(inputField);
    document.getElementById('input').value = y;
}

function charToInput(character) {
    let inputField = document.getElementById('input');
    inputField.value += character;

    let operators = ['/', '*', '+', '-'];

    let operatorCount = 0;

    for (let i = 0; i < inputField.value.length; i++) {
        if (operators.includes(inputField.value[i])) {
            operatorCount++;
            if (operatorCount > 1) {
                inputField.value = inputField.value.slice(0, -1);
                return true;
        }
    }
}

return false;

}
