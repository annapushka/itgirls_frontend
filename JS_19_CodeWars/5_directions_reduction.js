function dirReduc(directions) {
    const opposites = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    };

    const stack = [];

    for (const direction of directions) {

        if (stack.length > 0 && stack[stack.length - 1] === opposites[direction]) {
            stack.pop();
        } else {
            stack.push(direction);
        }
    }

    return stack;
}


function getSumFromString(string) {
    const numbers = string.split('').map(Number);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b] = fileContent.toString().split(' ')

const result = Number(a) + Number(b)

fs.writeFileSync("output.txt", result.toString())


//Даны два числа A и B. Вам нужно вычислить их сумму A+B. В этой задаче вам нужно читать из файла и выводить ответ в файл
const fs = require('fs');


fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }


    const [A, B] = data.split(' ').map(Number);


    const sum = A + B;


    fs.writeFile('output.txt', sum.toString(), (err) => {
        if (err) {
            console.error('Ошибка записи в файл:', err);
            return;
        }
        console.log('Сумма успешно записана в output.txt');
    });
});