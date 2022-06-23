// Напишите функцию sumInput(), которая:
// 	Просит пользователя ввести значения, используя prompt и сохраняет их в массив
// 	Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена»
// 	Выводит получившийся массив в отсортированном по возрастанию виде
// 	Подсчитывает и возвращает сумму элементов массива 



function sumInput() {
    
    let numbers = [];
    while(true) {
        let value = prompt("Введите число", '');
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(Number(value));
      }
      let sum = 0;
      for (let number of numbers) {
        sum += Number(number);
      }
      alert('Сумма: ' + sum + '\n' + 'Массив: ' + numbers.sort(function(a,b){ return a - b}));
    }
    
    sumInput();