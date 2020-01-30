let numeratorOne, denominatorOne, numeratorTwo, denominatorTwo, fractionOne, fractionTwo, fractionThree;

let GenerateFractions = function () {

    numeratorOne = +prompt("Enter the numerator of the first fraction");

    do {
        denominatorOne = +prompt("Enter the denominator of the first fraction");
    }

    while (denominatorOne == 0);

    numeratorTwo = +prompt("Enter the numerator of the second fraction");

    do {
        denominatorTwo = +prompt("Enter the denominator of the second fraction");
    }

    while (denominatorTwo == 0);

    fractionOne = {
        numerator: `${numeratorOne}`,
        denominator: `${denominatorOne}`
    };

    fractionTwo = {
        numerator: `${numeratorTwo}`,
        denominator: `${denominatorTwo}`
    };

    fractionThree = {
        numerator: "",
        denominator: ""
    };

    document.getElementById("desk").innerHTML = (`<pre> Your fractions are ${fractionOne.numerator}/${fractionOne.denominator} and ${fractionTwo.numerator}/${fractionTwo.denominator}. Use buttons to do some quick math.</pre>`);


};

let ReduceFraction = function (_numerator, _denominator) {
    firstNumber = Number(_numerator);
    secondNumber = Number(_denominator);

    let remainder;

    if (firstNumber < 0) {
        firstNumber = -firstNumber;
    };

    if (secondNumber < 0) {
        secondNumber = -secondNumber;
    };

    if ((firstNumber % secondNumber) == 0) {
        firstNumber = firstNumber / secondNumber;
        secondNumber = 1;

        _numerator = firstNumber;
        _denominator = secondNumber;
    }

    else {

        while ((firstNumber % secondNumber) > 0) {

            remainder = (firstNumber % secondNumber);

            firstNumber = secondNumber;
            secondNumber = remainder;
        };

        _numerator = Number(_numerator) / remainder;
        _denominator = Number(_denominator) / remainder;

    }

    fractionThree.numerator = _numerator;
    fractionThree.denominator = _denominator;

};

let ReduceFractions = function (_fractionOne, _fractionTwo) {

    let firstNumber = Number(_fractionOne.numerator);
    let secondNumber = Number(_fractionOne.denominator);
    let remainder;

    if (firstNumber < 0) {
        firstNumber = -firstNumber;
    };

    if (secondNumber < 0) {
        secondNumber = -secondNumber;
    };

    if ((firstNumber % secondNumber) == 0) {
        firstNumber = firstNumber / secondNumber;
        secondNumber = 1;

        _fractionOne.numerator = firstNumber;
        _fractionOne.denominator = secondNumber;
    }

    else {
        while ((firstNumber % secondNumber) > 0) {

            remainder = (firstNumber % secondNumber);

            firstNumber = secondNumber;
            secondNumber = remainder;
        };

        _fractionOne.numerator = Number(_fractionOne.numerator) / remainder;
        _fractionOne.denominator = Number(_fractionOne.denominator) / remainder;

    }

    firstNumber = Number(_fractionTwo.numerator);
    secondNumber = Number(_fractionTwo.denominator);
    remainder = 0;

    if (firstNumber < 0) {
        firstNumber = -firstNumber;
    };

    if (secondNumber < 0) {
        secondNumber = -secondNumber;
    };

    if ((firstNumber % secondNumber) == 0) {
        firstNumber = firstNumber / secondNumber;
        secondNumber = 1;

        _fractionTwo.numerator = firstNumber;
        _fractionTwo.denominator = secondNumber;
    }

    else {
        while ((firstNumber % secondNumber) > 0) {

            remainder = (firstNumber % secondNumber);

            firstNumber = secondNumber;
            secondNumber = remainder;
        };

        _fractionTwo.numerator = Number(_fractionTwo.numerator) / remainder;
        _fractionTwo.denominator = Number(_fractionTwo.denominator) / remainder;

    }
    document.getElementById("desk").innerHTML = (`<pre>Your reduced fractions are ${fractionOne.numerator}/${fractionOne.denominator} and ${fractionTwo.numerator}/${fractionTwo.denominator}</pre>`);

};

let AddFractions = function (_fractionOne, _fractionTwo) {

    if ((_fractionOne.denominator) == (_fractionTwo.denominator)) {
        fractionThree.denominator = Number(_fractionOne.denominator);
        fractionThree.numerator = Number(_fractionOne.numerator) + Number(_fractionTwo.numerator);
    }

    else {
        fractionThree.denominator = fractionOne.denominator * fractionTwo.denominator;
        fractionThree.numerator = Number(fractionOne.numerator * fractionTwo.denominator) + Number(fractionTwo.numerator * fractionOne.denominator);
    };

    ReduceFraction(fractionThree.numerator, fractionThree.denominator);

    document.getElementById("desk").innerHTML = (`<pre>${fractionOne.numerator}/${fractionOne.denominator} + ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}</pre>`);


};

let MultiplyFractions = function (_fractionOne, _fractionTwo) {

    fractionThree.denominator = fractionOne.denominator * fractionTwo.denominator;
    fractionThree.numerator = fractionOne.numerator * fractionTwo.numerator;

    ReduceFraction(fractionThree.numerator, fractionThree.denominator);

    document.getElementById("desk").innerHTML = (`<pre>${fractionOne.numerator}/${fractionOne.denominator} * ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}</pre>`);

};

let DivideFractions = function (_fractionOne, _fractionTwo) {
    fractionThree.numerator = _fractionOne.numerator * _fractionTwo.denominator;
    fractionThree.denominator = _fractionOne.denominator * _fractionTwo.numerator;

    firstNumber = Number(fractionThree.numerator);
    secondNumber = Number(fractionThree.denominator);

    ReduceFraction(fractionThree.numerator, fractionThree.denominator);

    document.getElementById("desk").innerHTML = (`<pre>${fractionOne.numerator}/${fractionOne.denominator} / ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}</pre>`);

};

let SubstractFractions = function (_fractionOne, _fractionTwo) {

    if ((_fractionOne.denominator) == (_fractionTwo.denominator)) {
        fractionThree.denominator = _fractionOne.denominator;
        fractionThree.numerator = Number(_fractionOne.numerator) - Number(_fractionTwo.numerator);

    }

    else {

        fractionThree.denominator = fractionOne.denominator * fractionTwo.denominator;
        fractionThree.numerator = Number(fractionOne.numerator * fractionTwo.denominator) - Number(fractionTwo.numerator * fractionOne.denominator);

    };

    ReduceFraction(fractionThree.numerator, fractionThree.denominator);

    document.getElementById("desk").innerHTML = (`<pre>${fractionOne.numerator}/${fractionOne.denominator} - ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}</pre>`);

};