// Запросите у пользователя трехзначное число и выведите его задом наперед.
// Для решения задачи вам понадобится оператор % (остаток от деления).

let number;

number = prompt("Enter a three-digit number")

let numberThree = number % 10;

alert(numberThree);