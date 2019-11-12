let next;
do {
    let firstNUMBER = prompt("введите первое число");
    let secondNumber = prompt("введите второе число");
    let operator = prompt("введите математический оператор");
    let answer = eval(`${first} ${operator} ${second}`);
    alert(answer);
}
while (prompt("хотите решить еще один пример?"));