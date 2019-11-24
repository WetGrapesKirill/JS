let time = {
    seconds: 23,
    minutes: 00,
    hour: 22,
}
let buf;
function timeInfo(_time) {
    alert(`${_time.hour}:${_time.minutes}:${_time.seconds}`)
}
function name(params) {

}
function seconds(_time) {
    let i = +prompt(`how many seconds will increase`)
    time.seconds += i
    while (_time.seconds >= 60) {
        _time.seconds -= 60;
        _time.minutes++;
    }
    while (_time.minutes >= 60) {
        _time.minutes -= 60;
        _time.hour += 1;
    }
    if (_time.hour > 24) {
        _time.hour = 00
    }
    alert(timeInfo(_time))
}
function minutes(_time) {
    let i = +prompt(`how many seconds will increase`)
    _time.minutes += i
    if (_time.minutes > 60) {
        _time.minutes = 00;
        _time.hour += 1;
    }
    if (_time.hour > 24) {
        _time.hour = 00
    }
    alert(timeInfo(_time))
}
function hour(_time) {
    let i = +prompt(`how many seconds will increase`)
    _time.hour += i
    if (_time.hour > 24) {
        _time.hour = 00
    }
    alert(timeInfo(_time))
}