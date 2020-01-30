let num;

let even = 0,
    odd = 0,
    negative = 0,
    positive = 0,
    zero = 0;

for (let i = 0; i < 10; i++) {
    num = prompt("enter number");
    if (num > 0) {
        positive++;
    } else if (num < 0) {
        negative++;
    }
    else if (num == 0) {
        zero++;
    }
    else if (num % 2 == 0) {
        even++;
    }
    else if (num % 2 != 0) {
        odd++;
    }
}

alert(`
even = ${even};
odd = ${odd};
negative = ${negative};
positive = ${positive};
zero = ${zero};
`)