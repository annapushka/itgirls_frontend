let result = 0;
class Calculator {
    static sum(num1, num2) {
        return result = num1 + num2;
    }

    static subtract(num1, num2) {
        return result = num1 - num2;
    }

    static multiply(num1, num2) {
        return result = num1 * num2;
    }

    static divide(num1, num2) {
        if (num2 === 0) {
            return result = "(－‸ლ)";
        }
        return result = num1 / num2;
    }
}


function calculateSum() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    Calculator.sum(num1, num2);
    showResult(result);
}

function calculateSubstract() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    Calculator.subtract(num1, num2);
    showResult(result);
}

function calculateMultiply() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    Calculator.multiply(num1, num2);
    showResult(result);
}

function calculateDivade() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    Calculator.divide(num1, num2);
    showResult(result);
}

function select(sender) {
    sender.classList.add('selected');
}

function showResult(result) {
    document.getElementById("result").innerHTML = result;
}