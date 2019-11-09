// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
let number = prompt("enter number");
switch (number) {
    case "1":
        alert(`!`);
        break;
    case "2":
        alert(`@`);
        break;
    case "3":
        alert(`#`);
        break;
    case "4":
        alert(`$`);
        break;
    case "5":
        alert(`% `);
        break;
    case "6":
        alert(`^ `);
        break;
    case "7":
        alert(`& `);
        break;
    case "8":
        alert(`* `);
        break;
    case "9":
        alert(`(`);
        break;
    case "0":
        alert(`)`);
        break;
    default:
        break;
}