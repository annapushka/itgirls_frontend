function sum() {
    let a = prompt('Введите a', 0);
    let b = prompt('Введите b', 0);
    alert('Сумма: ' + (Number(a) + Number(b)));
}

function subtract() {
    let a = prompt('Введите a', 0);
    let b = prompt('Введите b', 0);
    alert('Разность: ' + (Number(a) - Number(b)));
}

function multiply() {
    let a = prompt('Введите a', 0);
    let b = prompt('Введите b', 0);
    alert('Произведение: ' + (Number(a) * Number(b)));
}

function divide() {
    let a = prompt('Введите a', 0);
    let b = prompt('Введите b', 0);
    if (b == 0) {
        alert("На ноль делить нельзя! (－‸ლ)");
        return;
    }
    alert('Частное: ' + (Number(a) / Number(b)));
}