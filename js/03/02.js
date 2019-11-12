let one = +prompt("Введите первое число");
let two = +prompt("Введите второе число");
let i = Math.min(one, two);
while (one % i !== 0 || two % i !== 0) {
    i--;
}
alert(i);