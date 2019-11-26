// Запросите у пользователя трехзначное число и выведите его задом наперед.
// Для решения задачи вам понадобится оператор % (остаток от деления).

let number;
let result = ``;
number = prompt("Enter a three-digit number");

let numberThree = number % 10;

let numberTwo = (number % 100 - numberThree) / 10;

let numberOne = ((number - (number % 100 - numberThree) * 10) - numberThree) / 100
result = `${numberThree}${numberTwo}${numberOne}`
alert(result);