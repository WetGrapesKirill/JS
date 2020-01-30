let auto = {
    producer: "Lamborghini",
    type: "Diablo",
    issue: "1990 year",
    speed: "320 km/h"
}
function autoInfo(_auto) {
    alert(`machine specifications
Producer : ${_auto.producer};
Type : ${_auto.type};
Year of Issue : ${_auto.issue};
Average Speed : ${_auto.speed};`);
}
let TripPlanner = function (_auto) {
    distance = prompt("What is the total distance of your trip. in km");

    hours = distance / _auto.speed;

    if (hours <= 4) {
        alert(`You will cover ${distance} km in ${hours} hours with the average speed of ${_car.speed}`);
    }

    else {
        resthours = Math.trunc(distance / 400);
        hours = hours + resthours;
        alert(`You will cover ${distance} km in ${hours} hours with the average speed of ${_car.speed}`);
    }


}