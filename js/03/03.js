let number = +prompt("Введите число");
let k = number;
while (k >= 1) {
    number % k;
    if (number % k == 0) {
        alert(k);
    }
    k--;
}