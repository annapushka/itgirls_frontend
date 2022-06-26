// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты",
//  всё в виде двух цифр, т.е. 31.12.16 10:00.


const askDate = prompt("Введите дату", '2022-06-26T10:00:00');

const date = Date.parse(askDate);
formatDate(date);

function formatDate(date) {
  const now = new Date();
  const result = now - date;
  console.log(result);

  if (result < 1000) {
    alert("прямо сейчас");
  } else if (result < 1000 * 60) {
    alert(`${Math.round(result / 1000)} сек. назад`);
  } else if (result < 1000 * 60 * 60) {
    alert(`${Math.round(result / 1000 / 60)} мин. назад`);
  } else {
    const printDate = new Date(date);
    const day = printDate.getDate();
    const month = printDate.getMonth();
    const year = (printDate.getFullYear()).toString().slice(-2);
    const hour = printDate.getHours();
    const min = printDate.getMinutes();
    const print = (day < 10 ? '0' : '') + day + ":" + (month < 10 ? '0' : '') + month + ":" + year + " " + (hour < 10 ? '0' : '') + hour + ":" + (min < 10 ? '0' : '') + min;
    alert(print);
  }
}