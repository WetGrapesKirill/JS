// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро.
//  Курс валюты храните в константе.



let dolars;

dolars = prompt("Enter the desired amount");

const EU = dolars * 2;

alert(`Euro ` + Math.round(EU));