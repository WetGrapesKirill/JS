let number = prompt("Введите число");
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;
for (let i = 1; i <= 10; i++) {
    if (number > 0) {

        positive++;
    }
    if (number < 0) {
        negative++;
    }
    if (number == 0) {
        zero++;
    }
    if (number % 2 == 0) {
        even++;
    }
    if (number % 2 !== 0) {
        odd++;
    }
}
alert(positive);
alert(negative);
alert(zero);
alert(even);
alert(odd)