(() => {

    // 1.	Получите сумму let random1 = 39 let random2 = ‘18’ и выведите в консоль со словом Сумма: перед.
    const random1 = 39
    const random2 = '18'
    const result: number = +random1 + +random2
    console.log(`Сумма: ${result}`)

    // 2.	Создайте массив cities с любыми 4-мя городами внутри:
    const cities = ['Санкт-Петербург', 'Калининград', 'Тверь', 'Кострома']
    // •	выведите содержимое в консоль;
    console.log(cities.toString())
    // •	потом добавьте 1 новый город в начало списка, выведите обновлённый массив в консоль;
    cities.unshift('Москва')
    console.log(cities.toString())
    // •	удалите 1 город из конца списка и выведите удалённый город в консоль.
    console.log(cities.pop())
    // 2.	Создайте объект из 4 городов, где ключом будет название города, а значением население этого города
    const citiesObj = {
        'Санкт-Петербург': 5361900,
        'Калининград': 498260,
        'Тверь': 424969,
        'Кострома': 277021
    }
    //  выводим в консоль ключи, а потом значения, а также выводим значение первого города.
    console.log(Object.keys(citiesObj).toString())
    console.log(Object.values(citiesObj).toString())
    console.log(Object.values(citiesObj)[0])

    // 3.	Создайте 3 enum с данными: fruits, books и cars. На своё усмотрение придумайте, 
    // какие данные каждый из них может содержать, укажите не меньше 3 параметров для каждого.
    enum Fruits {
        SIMPLE,
        AGGREGATE,
        MULTIPLE
    };

    enum Books {
        CLASSICS,
        TRAGEDY,
        FANTASY,
        ACTION_AND_ADVENTURE,
        CRIME_AND_MYSTERY,
        ROMANCE,
        HUMOR_AND_SATIRE,
        HORROR,
        COMICS,
        BIOGRAPHY_AND_AUTOBIOGRAPHY,
        MEMOIRS,
        COOKBOOKS,
        TRUE_STORIES,
        SELF_HELP,
    };

    enum Cars {
        BLUE,
        YELLOW,
        RED
    };

    // 4.	Создайте объект животное (Animal), который содержит название, возраст, является ли животное млекопитающим,
    //  домашнее оно или дикое.
    const Animal = {
        name: 'cat',
        age: 3,
        isMammal: true
    }

    // 5.	Создайте переменную собственного типа, а потом инициализируйте её значение.

    type stumber = string | number;
    let test: stumber = 12;

    //Неделя.3

    (function (): void {
        console.log('Anonymous function')
    });

    let show = function (): void {
        console.log('Anonymous function');
    };

    setTimeout(function (): void {
        console.log('Anonymous function')
    }, 1000);


    function getName(firstName: string, lastName ? : string): string {
        return `${firstName} ${lastName}`;
    }

    function getSum(a: number, b: number, c ? : number): number {
        if (c) {
            return a + b + c;
        }
        return a + b;
    }

    function sayGoodNight(goodNight: string, name ? : string): string {
        if (name) {
            return `${goodNight} ${name}`;
        }
        return goodNight;
    }

    function getNameSmb(firstName: string, lastName: string = "007"): string {
        return `${firstName} ${lastName}`;
    }

    function getSumSmth(a: number, b: number, c: number = 10): number {
        return a + b + c;
    }

    function sayGoodNightSmb(goodNight: string, name: string = "colleague"): string {
        return `${goodNight} ${name}`;
    }

    function getDate(): number {
        return Date.now()
    }

    function printNames(names: Array < string > ): string {
        return names.toString();
    }

    function printAnimals(intro: string, ...animals: string[]): string {
        return `${intro} ${animals.join(", ")}.`;
    }

    function sum(...theArgs: number[]): number {
        let total = 0;
        for (const arg of theArgs) {
            total += arg;
        }
        return total;
    }

    function multiply(multiplier: number, ...theArgs: number[]) {
        return theArgs.map((element) => multiplier * element);
    }

// 1. Если переменная a  равна нулю или равна двум, то прибавьте к ней 7, иначе поделите её на 10.
// Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// Выполните задание с помощью логических операторов.


// 2. Если переменная a равна нулю, то выведите в консоль 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при трёх разных значениях a. Выполните задание с помощью логических операторов и с помощью if.


// 3. Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr 
// запишем массив дней недели на русском языке, а если имеет значение 'en', то на английском. Решите задачу через if и 
// через switch-case.


// 4. С помощью логических ветвлений рассчитайте, какую сумму работник должен перечислить на налог и какую сумму он
//  получит на руки, если налоги начисляются таким образом:
// ```jsx
// Зарплата до 6000 включительно — 10%;
// Зарплата до 10 000 включительно — 15%;
// Зарплата до 15 000 включительно — 17.5%;
// Зарплата свыше 15 000 — 20%.
// ```


// 5. Выведите столбец чисел от 1 до 50 с помощью цикла.


// 6. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for выведите все числа в столбец вместе с текстом ‘Результат: ’.


// 7. У нас есть объект
// ```jsx
// let obj = {
// 	'кот': 'мяу',
// 	'собака': 'гав',
// 	'корова': 'муу',
// };
// ```
// С помощью цикла for-in выведите на экран строки такого формата: 'кот говорит мяу'.

})();