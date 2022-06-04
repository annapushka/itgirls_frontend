function sum() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;
    result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}

function subtract() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;
    result = num1 - num2;
    document.getElementById("result").innerHTML = result;
}

function multiply() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;
    result = num1 * num2;
    document.getElementById("result").innerHTML = result;
}

function divide() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result;

    if (num2 === 0) {
        result = "(－‸ლ)";
        document.getElementById("result").innerHTML = result;
        return;
    }
    result = num1 / num2;
    document.getElementById("result").innerHTML = result;
}

function select(sender) {
    sender.classList.add('selected');
}