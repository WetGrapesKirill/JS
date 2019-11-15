// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
function perfect(_n) {
    let _sum = 0;
    for (let i = _n - 1; i > 0; i--) {
        _sum += _n % i == 0 ? i : 0;
    }
    return _n == _sum;
}

function perfectPlus(_min, _max) {
    let buf = '';
    for (let i = _min; i < _max; i++) {
        buf += perfect(i) ? i + " " : '';
    }
    return buf;
}

alert(perfectPlus(prompt("first"), prompt("second")));