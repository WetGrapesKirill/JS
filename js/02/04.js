// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let year = prompt("Enter year");

alert(`${year % 400 ? (year % 4 ? "unleap-year" : (year % 100 ? "leap-year" : "unleap-year")) : "leap-year"}`);