// Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб
//  помещается на флешку.

let size;

size = prompt("Indicate volume in GB")

size = (size * 1024) / 820

alert(`files of 820 MBs = ` + Math.trunc(size))
