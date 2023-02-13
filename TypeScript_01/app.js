(function () {
    // 1.	Получите сумму let random1 = 39 let random2 = ‘18’ и выведите в консоль со словом Сумма: перед.
    var random1 = 39;
    var random2 = '18';
    var result = +random1 + +random2;
    console.log("\u0421\u0443\u043C\u043C\u0430: ".concat(result));
    // 2.	Создайте массив cities с любыми 4-мя городами внутри:
    var cities = ['Санкт-Петербург', 'Калининград', 'Тверь', 'Кострома'];
    // •	выведите содержимое в консоль;
    console.log(cities.toString());
    // •	потом добавьте 1 новый город в начало списка, выведите обновлённый массив в консоль;
    cities.unshift('Москва');
    console.log(cities.toString());
    // •	удалите 1 город из конца списка и выведите удалённый город в консоль.
    console.log(cities.pop());
    // 2.	Создайте объект из 4 городов, где ключом будет название города, а значением население этого города
    var citiesObj = {
        'Санкт-Петербург': 5361900,
        'Калининград': 498260,
        'Тверь': 424969,
        'Кострома': 277021
    };
    //  выводим в консоль ключи, а потом значения, а также выводим значение первого города.
    console.log(Object.keys(citiesObj).toString());
    console.log(Object.values(citiesObj).toString());
    console.log(Object.values(citiesObj)[0]);
    // 3.	Создайте 3 enum с данными: fruits, books и cars. На своё усмотрение придумайте, 
    // какие данные каждый из них может содержать, укажите не меньше 3 параметров для каждого.
    var Fruits;
    (function (Fruits) {
        Fruits[Fruits["SIMPLE"] = 0] = "SIMPLE";
        Fruits[Fruits["AGGREGATE"] = 1] = "AGGREGATE";
        Fruits[Fruits["MULTIPLE"] = 2] = "MULTIPLE";
    })(Fruits || (Fruits = {}));
    ;
    var Books;
    (function (Books) {
        Books[Books["CLASSICS"] = 0] = "CLASSICS";
        Books[Books["TRAGEDY"] = 1] = "TRAGEDY";
        Books[Books["FANTASY"] = 2] = "FANTASY";
        Books[Books["ACTION_AND_ADVENTURE"] = 3] = "ACTION_AND_ADVENTURE";
        Books[Books["CRIME_AND_MYSTERY"] = 4] = "CRIME_AND_MYSTERY";
        Books[Books["ROMANCE"] = 5] = "ROMANCE";
        Books[Books["HUMOR_AND_SATIRE"] = 6] = "HUMOR_AND_SATIRE";
        Books[Books["HORROR"] = 7] = "HORROR";
        Books[Books["COMICS"] = 8] = "COMICS";
        Books[Books["BIOGRAPHY_AND_AUTOBIOGRAPHY"] = 9] = "BIOGRAPHY_AND_AUTOBIOGRAPHY";
        Books[Books["MEMOIRS"] = 10] = "MEMOIRS";
        Books[Books["COOKBOOKS"] = 11] = "COOKBOOKS";
        Books[Books["TRUE_STORIES"] = 12] = "TRUE_STORIES";
        Books[Books["SELF_HELP"] = 13] = "SELF_HELP";
    })(Books || (Books = {}));
    ;
    var Cars;
    (function (Cars) {
        Cars[Cars["BLUE"] = 0] = "BLUE";
        Cars[Cars["YELLOW"] = 1] = "YELLOW";
        Cars[Cars["RED"] = 2] = "RED";
    })(Cars || (Cars = {}));
    ;
    // 4.	Создайте объект животное (Animal), который содержит название, возраст, является ли животное млекопитающим,
    //  домашнее оно или дикое.
    var Animal = {
        name: 'cat',
        age: 3,
        isMammal: true
    };
    var test = 12;
})();
