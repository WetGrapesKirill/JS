// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

class Circle {

    // поле, хранящее радиус окружности;
    constructor(_properties) {
        this.r = _properties.r;
    }

    // get-свойство, возвращающее радиус окружности;
    get radius() {
        return this.r;
    }

    // set-свойство, устанавливающее радиус окружности;
    set radius(newRadius) {
        this.r = newRadius;
    }

    // get-свойство, возвращающее диаметр окружности;
    get diameter() {
        return this.r * 2;
    }

    // метод, вычисляющий площадь окружности;
    area() {
        return Math.PI * Math.pow(this.r, 2)
    }

    // метод, вычисляющий длину окружности.
    circumference() {
        return Math.PI * this.r * 2;
    }
}

// Продемонстрировать работу свойств и методов. 
let a = new Circle({ r: 15 });
console.log(a);

// get-свойство, возвращающее радиус окружности;
console.log(a.radius);

// set-свойство, устанавливающее радиус окружности;
a.radius = 20;
console.log(a.radius);

// метод, вычисляющий площадь окружности;
console.log(a.area());

// метод, вычисляющий длину окружности.
console.log(a.circumference());