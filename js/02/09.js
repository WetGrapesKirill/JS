/**
 * @type {number}
 */
let rating = 0;
let questOne = prompt("Enter 1 , 2  or 3");
switch (questOne) {
    case 1:
        rating = rating + 2;
        break;
    default:
        break;
}
let questTwo = prompt("Enter 1 , 2  or 3");
switch (questTwo) {
    case 2:
        rating = rating + 2;
        break;
    default:
        break;
}
let questThree = prompt("Enter 1 , 2  or 3");
switch (questThree) {
    case 3:
        rating = rating + 2;
        break;
    default:
        break;
}
alert(`you rating ${rating}`)