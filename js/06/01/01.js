// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
let objekt = {
    naem: ``,
    quantity: ``,
    bought: -1
};
let napkins = {
    naem: "napkins",
    quantity: 2,
    bought: -1
};
let flour = {
    naem: "flour",
    quantity: "2kg",
    bought: 0
};
let antifreeze = {
    naem: "antifreeze",
    quantity: 1,
    bought: 0
};
let magazine = {
    naem: "magazine",
    quantity: 4,
    bought: -1

};
let apple = {
    naem: "apple",
    quantity: "4kg",
    bought: -1

};

let shoppinglist = [napkins, flour, antifreeze, magazine, apple,];

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.


function name(_shoppinglist) {
    shoppinglist = shoppinglist.sort(
        function (a, b) {
            a.bought - b.bought
            return this.naem
        })
    let buf = ``;
    for (let i = 0; i < shoppinglist.length; i++) {
        buf += "<li>" + shoppinglist[i].naem + "</li>\n"
    }
    document.write(`<ul>${buf}</ul>`);
};
name()
function add(objekt, shoppinglist) {
    objekt = {
        naem: prompt("enter name"),
        quantity: +prompt("enter quantity"),
        bought: -1
    }
    shoppinglist.push(objekt);
    name()
};


// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// // Покупка продукта. Функция принимает название продукта и отмечает его как купленный.