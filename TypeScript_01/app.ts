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
    // enum Fruits {
    //     SIMPLE,
    //     AGGREGATE,
    //     MULTIPLE
    // };

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

    function doManipulations(a: number): void {
        if (a === 0 || a === 2) {
            a += 7
        } else {
            a /= 10
        }
        console.log(a)
    }
    doManipulations(5)
    doManipulations(0)
    doManipulations(-3)
    doManipulations(2)

    // 2. Если переменная a равна нулю, то выведите в консоль 'Верно', иначе выведите 'Неверно'.
    // Проверьте работу скрипта при трёх разных значениях a.

    function isRight(a: number): void {
        a === 0 ? console.log('Верно') : console.log('Неверно')
    }
    isRight(5)
    isRight(0)
    isRight(-3)

    // 3. Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr 
    // запишем массив дней недели на русском языке, а если имеет значение 'en', то на английском. Решите задачу через if и 
    // через switch-case.

    function localizeWeek(lang: string): string[] {
        const arr: string[] = []

        lang === 'ru' ?
            arr.push('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье') :
            arr.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')

        return arr
    }

    console.log(localizeWeek('ru'))
    console.log(localizeWeek('en'))

    function localizeWeekSwitch(lang: string): string[] {
        const arr: string[] = []
        switch (lang) {
            case 'ru': {
                arr.push('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье')
                break;
            }
            case 'en': {
                arr.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')
                break;
            }
            default: {
                alert('Language not found');
                break;
            }
        }
        return arr
    }

    console.log(localizeWeekSwitch('ru'))
    console.log(localizeWeekSwitch('en'))
    console.log(localizeWeekSwitch('az'))

    // 4. С помощью логических ветвлений рассчитайте, какую сумму работник должен перечислить на налог и какую сумму он
    //  получит на руки, если налоги начисляются таким образом:
    // Зарплата до 6000 включительно — 10%;
    // Зарплата до 10 000 включительно — 15%;
    // Зарплата до 15 000 включительно — 17.5%;
    // Зарплата свыше 15 000 — 20%.

    type Salary = {
        netSalary: number;
        tax: number;
    }

    function calculateNetSalaryAndTax(salary: number, coefficient: number): Salary {
        const netSalaryAndTax = {
            netSalary: 0,
            tax: 0
        }
        netSalaryAndTax.tax = salary * coefficient;
        netSalaryAndTax.netSalary = salary - netSalaryAndTax.tax

        return netSalaryAndTax;
    }

    function getNetSalaryAndTax(salary: number): Salary {
        if (salary <= 6000) {
            return calculateNetSalaryAndTax(salary, 0.1)
        } else if (salary <= 10000) {
            return calculateNetSalaryAndTax(salary, 0.15)
        } else if (salary <= 15000) {
            return calculateNetSalaryAndTax(salary, 0.175)
        } else {
            return calculateNetSalaryAndTax(salary, 0.2)
        }
    }

    console.log(getNetSalaryAndTax(5000))
    console.log(getNetSalaryAndTax(7000))
    console.log(getNetSalaryAndTax(12000))
    console.log(getNetSalaryAndTax(16000))

    // 5. Выведите столбец чисел от 1 до 50 с помощью цикла.

    function printLoop(start: number, end: number): void {
        for (let i: number = start; i <= end; i++) {
            console.log(i);
        }
    }

    printLoop(1, 50)


    // 6. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for выведите все числа в столбец вместе с текстом ‘Результат: ’.

    function printResults(results: number[]): void {
        results.forEach(result => console.log(`Результат: ${result}`));
    }

    printResults([2, 3, 4, 5])

    // 7. У нас есть объект
    let obj = {
        'кот': 'мяу',
        'собака': 'гав',
        'корова': 'муу',
    };
    // выведите на экран строки такого формата: 'кот говорит мяу'.

    function printVoice(animals: Object): void {
        Object.entries(animals).forEach(([animal, voice]) => console.log(`${animal} говорит ${voice}`));
    }

    printVoice(obj)


    // 1.	Создайте класс Person, который содержит переменные name, age, isStudent.

    class Person {
        name: string
        age: number
        isStudent: boolean

        constructor(name: string, age: number, isStudent: boolean) {
            this.name = name;
            this.age = age;
            this.isStudent = isStudent;
        }
        printPersonInfo(): void {
            console.log(`name: ${this.name}; age: ${this.age}; isStudent: ${this.isStudent}`);
        }
    }

    // 2.	Создайте три экземпляра класса Person.

    const vasya = new Person('Vasya', 19, true)
    const tosha = new Person('Tosha', 9, false)
    const sonya = new Person('Sonya', 21, true)

    // 3.	Создайте внутри класса метод, который будут выводить в консоль значения переменных и с 
    // его помощью выведите в консоль значения созданных выше экземпляров класса.

    vasya.printPersonInfo()
    tosha.printPersonInfo()
    sonya.printPersonInfo()

    // 4.	Создайте пример наследования через абстрактный класс и через интерфейс, реализуйте класс 
    // Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
    // 5.	Создайте метод getScholarship() для класса Student, который возвращает сумму стипендии.
    // Если средняя оценка студента равна 5, то сумма 200, иначе 150. Переопределить этот метод в классе Aspirant. 
    // Если средняя оценка аспиранта равна 5, то сумма 300, иначе 250.

    abstract class Pupil {
        constructor(name: string, lastName: string, institute: string, faculty: string, entryYear: number, avgMark: number) {}
        abstract getScholarship(): number;
    }

    class Student extends Pupil {
        avgMark: number
        constructor(name: string, lastName: string, institute: string,
            faculty: string, entryYear: number, avgMark: number) {
            super(name, lastName, institute, faculty, entryYear, avgMark)
            this.avgMark = avgMark
        }
        getScholarship(): number {
            return this.avgMark === 5 ? 200 : 150
        }
    }

    class Aspirant extends Pupil {
        titleResearchPaper: string
        avgMark: number

        constructor(name: string, lastName: string, institute: string,
            faculty: string, entryYear: number, titleResearchPaper: string, avgMark: number) {
            super(name, lastName, institute, faculty, entryYear, avgMark)
            this.titleResearchPaper = titleResearchPaper
            this.avgMark = avgMark
        }
        getScholarship(): number {
            return this.avgMark === 5 ? 300 : 250
        }
    }


    interface PupilI {
        name: string,
            lastName: string,
            institute: string,
            faculty: string,
            entryYear: number,
            avgMark: number,
            getScholarship(): number
    }

    class StudentI implements PupilI {
        name: string;
        lastName: string;
        institute: string;
        faculty: string;
        entryYear: number;
        avgMark: number;
        constructor(name: string, lastName: string, institute: string,
            faculty: string, entryYear: number, avgMark: number) {
            this.name = name
            this.lastName = lastName
            this.institute = institute
            this.faculty = faculty
            this.entryYear = entryYear
            this.avgMark = avgMark
        }
        getScholarship(): number {
            return this.avgMark === 5 ? 200 : 150
        }
    }

    class AspirantI implements PupilI {
        titleResearchPaper: string;
        name: string;
        lastName: string;
        institute: string;
        faculty: string;
        entryYear: number;
        avgMark: number;

        constructor(name: string, lastName: string, institute: string,
            faculty: string, entryYear: number, titleResearchPaper: string, avgMark: number) {
            this.titleResearchPaper = titleResearchPaper
            this.name = name
            this.lastName = lastName
            this.institute = institute
            this.faculty = faculty
            this.entryYear = entryYear
            this.avgMark = avgMark
        }
        getScholarship(): number {
            return this.avgMark === 5 ? 300 : 250
        }
    }


    // 6.	Создайте классы для описания интернет-магазина. У него должны быть несколько категорий товаров 
    // (с названием и ценой), покупатели (которые для покупки должны зарегистрироваться, соответственно у покупателя 
    // будет пароль, логин и история покупок), корзина. Также должны быть методы: добавить в корзину, купить, 
    // зарегистрироваться, войти в аккаунт.

    class Product {
        name: string;
        price: number;
        manufacturer: string;

        constructor(name: string, price: number, manufacturer: string) {
            this.name = name;
            this.price = price;
            this.manufacturer = manufacturer;
        }
    }

    class Foodstuffs extends Product {
        expirationDate: Date;

        constructor(name: string, price: number, manufacturer: string, expirationDate: Date) {
            super(name, price, manufacturer)
            this.expirationDate = expirationDate
        }
    }

    class ChildensGoods extends Product {
        ageСategory: number;

        constructor(name: string, price: number, manufacturer: string, ageСategory: number) {
            super(name, price, manufacturer)
            this.ageСategory = ageСategory
        }
    }



    interface Item {
        idProduct: string
    }

    interface Purchase extends Item {
        purchaseDate: Date
    }

    class Customer {
        name: string;
        login: string;
        password: string;
        purchaseHistory: Purchase[];
        backet: Item[];

        constructor(name: string, login: string, password: string, purchaseHistory: Purchase[], backet: Item[]) {
            this.name = name;
            this.login = login;
            this.password = password;
            this.purchaseHistory = purchaseHistory;
            this.backet = this.backet;
        }

        checkIn(): void {
            //...
        }
        logIn(): void {
            //...
        }
        addToBasket(item: Item): void {
            this.backet.push(item)
        }
        buy(): void {
            //...
            this.backet.length = 0
        }
    }

    //     WEEK 5
    // 1.	Написать дженерик функцию с одним параметром и с её помощью вывести в консоль сумму чисел, если параметры типа number и приветствие, если параметры типа string или boolean.

    function func < T > (arg: T): string | number | undefined {
        let result;
        if (typeof arg == 'number') {
            result = arg + arg;
        } else if (typeof arg == 'string' || typeof arg == 'boolean') {
            result = 'Hi!';
        }
        return result;
    }

    // 2.	Создать обобщённый класс с тремя параметрами (T, V, K).
    // 3.	Класс содержит три переменные типа (T, V, K), конструктор, принимающий на вход параметры типа (T, V, K), методы, возвращающие значения трёх переменных. Создать метод, выводящий на консоль имена классов для трёх переменных класса.

    class GenericClass < T, V, K > {
        login: T;
        id: K;
        isLoggedIn: V;
        constructor(login: T, id: K, isLoggedIn: V) {
            this.login = login;
            this.id = id;
            this.isLoggedIn = isLoggedIn
        }
        getLogin(): T {
            return this.login
        }
        getId(): K {
            return this.id
        }
        getIsLoggedIn(): V {
            return this.isLoggedIn
        }
        printType(): void {
            console.log(`login: ${typeof this.login}, id: ${typeof this.id}, isLoggedIn: ${typeof this.isLoggedIn}`)
        }
    }
    // 4.	Создать класс Fruits, Vegetables и функцию, которая будет проверять тип переменной и выводить в консоль разный текст, в зависимости от типа данных.

    class Fruits {
        type: string;
        drinks: string[];
        constructor(type: string, drinks: string[]) {
            this.type = type;
            this.drinks = drinks;
        }
    }

    class Vegetables {
        type: string;
        dishes: string[];
        constructor(type: string, dishes: string[]) {
            this.type = type;
            this.dishes = dishes;
        }
    }

    function printExs(obj: Fruits | Vegetables) {
        let res: string = '';
        if (obj instanceof Fruits) {
            res = `Вы можете приготовить из ${obj.type} следующие напитки ${obj.drinks.join(', ')}`;
        } else if (obj instanceof Vegetables) {
            res = `Вы можете приготовить из ${obj.type} следующие блюда ${obj.dishes.join(', ')}`;
        }
        return res;
    }

    // 5.	Создать два обобщённых интерфейса с одним параметром в каждом, создать константу, которая будет наследовать данные от обоих интерфейсов.
    interface IKey < KeyTypeGeneric > {
        key: KeyTypeGeneric;
    }

    interface IResult < ResultTypeGeneric > {
        result: ResultTypeGeneric;
    }

    const data: IKey < number > & IResult < string > = {
        key: 1,
        result: 'banana'
    }

//     WEEK 6
// 1. Создать класс User и у него декоратор, который будет генерировать id (с помощью встроенной в Typescript функции Random).
// 2. У класса User должны быть поля:
// - name: string;
// - registrationDate: Date;
// - orderHistory: Array<Order>.

// Необходимо создать декоратор, который сделает невозможным изменение поля `registrationDate`.

// 1. Создать геттер для поля `name` и сеттер для добавления новой позиции в `orderHistory`.
// 2. Создать класс Order с полями name:string, price: number, создать метод addToShopingCart, который добавляет товары в корзину и содержит декоратор, который выводит в консоль название товара.
// 3. Создать класс ShopingCart, который содержит список товаров.
// 4. Каждый класс помещаем в отдельный файл и связываем полученные модули между собой с помощью импорта экспорта.
    
    // Single responsibility principle (SRP): This principle states that software component (function, class or module) should 
//focus on one unique tasks (have only one responsibility).
class Person {
  public name : string;
  public email : string;
  constructor(name : string, email : string) {
    this.name = name;
    if(this.validateEmail(email)) {
      this.email = email;
    }
    else {
      throw new Error("Invalid email!");
    }
  }
  validateEmail(email: string) {
    return Boolean
  }
}
//Класс Person содержит метод валидации электронной почты, что можно вынести в отдельный класс. 
//В дальнейшем, можно, правила валидации менять, что не повляет на класс Person.
class Person {
public name : string;
public email : Email;
constructor(name : string, email : Email){
   this.email = email;
   this.name = name;
}
}

class Email {
public email : string;
constructor(email : string){
   if(this.validateEmail(email)) {
     this.email = email;
   }
   else {
     throw new Error("Invalid email!");
   }      
}
validateEmail(email: string) {
    return Boolean
  }
}

// Open/closed principle (OCP): This principle states that software entities should be designed with the 
//application growth (new code) in mind (be open to extension), but the application growth should require the smaller 
//amount of changes to the existing code as possible (be closed for modification).


// Liskov substitution principle (LSP): This principle states that we should be able to replace a class in a program with another class as long as both classes implement the same interface. After replacing the class no other changes should be required and the program should continue to work as it did originally.


// Interface segregation principle (ISP): This principle states that we should split interfaces which are 
//very large (general-purpose interfaces) into smaller and more specific ones (many client-specific interfaces) 
//so that clients will only have to know about the methods that are of interest to them.


// Dependency inversion principle (DIP): This principle states that entities should depend on abstractions (interfaces) as opposed to depend on concretion (classes).


https://hub.packtpub.com/object-oriented-programming-typescript/

})();
