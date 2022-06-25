// Сделайте генератор 10 случайных чисел (по нажатию на кнопку) в диапазоне от -10 до 10
// и найдите среди них минимальное, максимальное и среднее арифметическое, 
// а также сумму и произведение всех этих чисел.


function random() {
    document.getElementById('message').innerHTML = "";

    const maxR = 10;
    const minR = -10;
    const randomArr = [];
    for (let i = 0; i < 10; i++) {
        randomArr.push(Math.round((Math.random() * (maxR - minR + 1)) + minR));
    }

    const min = Math.min(...randomArr);
    const max = Math.max(...randomArr);

    let sum = 0;
    for (r of randomArr) {
        sum += r;
    }

    const avg = sum / randomArr.length;

    let mult = 1;
    for (r of randomArr) {
        mult *= r;
    }

    document.getElementById('message').innerHTML += `Сгенерировали: ${randomArr}<br> Минимальное: ${min}<br> Максимальное: ${max}<br> Среднее арифметическое: ${avg}<br> Сумма чисел: ${sum}<br> Произведение чисел: ${mult}`;
}