let numberOne = +prompt("Введите начальное число");
let numberTwo = +prompt("Введите конечное число");
let sum = 0;
while (numberOne <= numberTwo) {
    sum += numberOne;
    numberOne++;
}
alert(`сумма всех чисел в диапазоне от ${numberOne} до ${numberTwo} равна ${sum}`);