let one = +prompt(`enter first number`);
let two = +prompt(`enter second number`);
let i = Math.min(one, two);
while (one % i !== 0 || two % i !== 0) {
    i--;
}
alert(i);