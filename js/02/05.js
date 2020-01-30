// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
let number = prompt("enter a five-digit number")

let one = number.slice(0, 1),
    two = number.slice(1, 2),
    foure = number.slice(3, 4),
    five = number.slice(4, 5);

if ((one == fve) && (two == foure)) {
    alert(`palindrom`);
} else {
    alert(`not palindrom`);
}