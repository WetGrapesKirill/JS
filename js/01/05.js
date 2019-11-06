// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

let distance;

distance = prompt("Indicate the distance between two cities in kilometers ")

let time;

time = prompt("Desired time")

let speed = distance / time

alert(`Your speed ` + Math.round(speed))