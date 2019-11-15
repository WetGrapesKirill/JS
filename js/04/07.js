// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
let hours = +prompt("Введите часы");
let minutes = +prompt("Введите минуты");
let seconds = +prompt("Введите секунды");

function clock(_hours, _minutes, _seconds) {
    _hours = _hours < 10 ? `0${_hours}` : _hours;
    _minutes = _minutes < 10 ? `0${_minutes}` : _minutes;
    _seconds = _seconds < 10 ? `0${_seconds}` : _seconds;
    _minutes = _minutes === 0 ? "00" : _minutes;
    _seconds = _seconds === 0 ? "00" : _seconds;
    return (`${_hours}:${_minutes}:${_seconds}`);
}

alert(clock(hours, minutes, seconds));