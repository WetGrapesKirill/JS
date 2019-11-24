let number;

do {
    number = prompt("enter number ");
} while (number.leng == 3);
let numberThree = number % 10;
let numberTwo = (number % 100 - numberThree) / 10;
let numberOne = ((number - (numberTwo * 10)) - numberThree) / 100;
if ((numberOne == numberTwo) || (numberThree == numberOne) || (numberTwo == numberThree)) {
    alert(`your numbers are equal`)
}
else {
    alert(`your numbers are not equal`)
}