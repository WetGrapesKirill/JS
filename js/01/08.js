// Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
// Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

let cash;

cash = +prompt("Enter the amount");

let chocolate;

chocolate = +prompt("The price of chocolate");

let price;

price = cash / chocolate;

alert(`Your chocolate ${price} ,your task ${cash - (price * chocolate)}`);