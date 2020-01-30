let d = +prompt("enter circumference");

let p = +prompt("enter square perimeter");

d = d / 2;
p = p / 4;
alert(`${d <= p / 2 ? "circle can be entered into a square" : "circle cannot be squared"}`)