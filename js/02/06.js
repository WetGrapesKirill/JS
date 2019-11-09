// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

let usd = prompt("enter amount of money");
let currency = prompt("choose currency EUR, UAN or AZN")

switch (currency) {
    case "EUR":
        currency = usd * 2;
        alert(`${currency} EUR`);
        break;
    case "UAN":
        curency = usd / 1.2;
        alert(`${currency} UAN`);
        break;
    case "AZN":
        curency = usd * 2.2;
        alert(`${currency} AZN`);
        break;
    default:
        alert(`CHOOSE THE CURENCY`);
        break;
}