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
    let test: stumber = 12

})();