let buf = '<pre>';
for (let i = 2; i < 10; i++) {
    for (let k = 1; k < 11; k++) {
        buf += i + ' * ' + k + ' = ' + i * k + '\n';
    }
    buf += '---------\n';
}
buf += '</pre>';
document.write(buf);