// Запросите у пользователя трехзначное число и выведите его задом наперед.
// Для решения задачи вам понадобится оператор % (остаток от деления).

let number;
<<<<<<< HEAD

number = +prompt("Enter a three-digit number")
=======
let result = ``;
number = prompt("Enter a three-digit number");
>>>>>>> 0211e8a9b94d565317d0e1311b105dc17ee75b54

let numberThree = number % 10;
let numberTwo = (number % 100 - numberThree) / 10;
let numberOne = ((number - (numberTwo * 10)) - numberThree) / 100;
alert(`${numberThree}${numberTwo}${numberOne}`)

<<<<<<< HEAD
=======
let numberOne = ((number - (number % 100 - numberThree) * 10) - numberThree) / 100
result = `${numberThree}${numberTwo}${numberOne}`
alert(result);
>>>>>>> 0211e8a9b94d565317d0e1311b105dc17ee75b54
