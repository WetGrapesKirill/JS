// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
/**
 * @type {number}
 */
let number = +prompt("Enter how you old years");
if (number < 1) {
    alert(`you unexist`)
} else if ((number > 0) && (number < 13)) {
    alert(`you children`)
} else if ((number > 12) && (number < 18)) {
    alert(`you teen`)
} else if ((number > 17) && (number < 60)) {
    alert(`you adult`)
} else if (number > 59) {
    alert(`you aged`)
}