// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let number = prompt("enter purchase amount")

if ((number > 0) && (number <= 200)) {
    alert(`${number}`)
} else if ((number > 200) && (number < 300)) {
    alert(`${number - ((number * 3) / 100)}`)
} else if ((number >= 300) && (number <= 500)) {
    alert(`${number - ((number * 5) / 100)}`)
} else if (number > 500) {
    alert(`${number - ((number * 7) / 100)}`)
}