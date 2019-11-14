let numberOne = +prompt(`Enter the starting number`);
let numberTwo = +prompt(`Enter the final number`);
let sum = 0;
while (numberOne <= numberTwo) {
    sum += numberOne;
    numberOne++;
}
alert(`the sum of all numbers in the range  from ${numberOne} to ${numberTwo} is ${sum}`);