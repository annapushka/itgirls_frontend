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


const fs = require('fs');

// Чтение входных данных из файла input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }

    // Разделение строки на числа A и B
    const [A, B] = data.split(' ').map(Number);

    // Вычисление суммы
    const sum = A + B;

    // Запись результата в файл output.txt
    fs.writeFile('output.txt', sum.toString(), (err) => {
        if (err) {
            console.error('Ошибка записи в файл:', err);
            return;
        }
        console.log('Сумма успешно записана в output.txt');
    });
});


// Импортируем модуль для работы с потоками
const readline = require('readline');

// Создаем интерфейс для чтения из стандартного ввода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Читаем строку из стандартного ввода
rl.on('line', (input) => {
    // Разделяем строку на числа A и B
    const [A, B] = input.split(' ').map(Number);
    
    // Вычисляем сумму
    const sum = A + B;
    
    // Выводим результат в стандартный вывод
    console.log(sum);
    
    // Закрываем интерфейс
    rl.close();
});


const fs = require('fs');

// Чтение входных данных из файла
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }

    // Разделяем входные данные на строки
    const lines = data.split('\n');
    const J = lines[0].trim(); // Строка драгоценностей
    const S = lines[1].trim(); // Строка камней

    // Подсчет количества драгоценностей в камнях
    let count = 0;
    for (let char of S) {
        if (J.includes(char)) {
            count++;
        }
    }

    // Запись результата в выходной файл
    fs.writeFile('output.txt', count.toString(), (err) => {
        if (err) {
            console.error('Ошибка записи в файл:', err);
            return;
        }
        console.log('Количество драгоценностей записано в output.txt');
    });
});