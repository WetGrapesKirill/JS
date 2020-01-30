// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

let colors = ["red", "yellow", "green"]; // colors array
let bulbs = document.getElementsByClassName("bulb"); // getting the bulbs
let lightSwitch = document.getElementById("lightSwitch"); // getting the button
let lightSwitchOff = document.getElementById("lightSwitchOff") // getting the off button

let i = 0;
let ChangeColor = function () { //changing the color according to the array item
    ClearColor(); // clearing the colors before the next color
    bulbs[i].style.backgroundColor = colors[i];
    i++;
    if (i > 2) {
        i = 0;
    };
};

let ClearColor = function () { // clear the colors to default
    bulbs[0].style.backgroundColor = "#111";
    bulbs[1].style.backgroundColor = "#111";
    bulbs[2].style.backgroundColor = "#111";

};

lightSwitch.addEventListener("click", ChangeColor);
lightSwitchOff.addEventListener("click", ClearColor);