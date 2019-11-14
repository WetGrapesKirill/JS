alert(`guess the number from 0 to 100`)
let n;
let quest;
let quest02;
let max = 100;
let min = 0;
do {
    n = Math.round(((max - min) / 2) + min);
    quest = confirm(`this your number ${n}`);
    quest == true ? true : quest02 = confirm(`your number larger ${n}?`);
    if (quest02 == true) {
        min = n + 1
    } else if (quest02 == false) {
        max = n - 1
    }
} while (quest == false);
alert(`your number ${n}`);