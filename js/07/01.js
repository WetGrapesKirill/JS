// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 
class Circule {
    constructor(_options) {
        this.gavno = _options.radius;
    }
    get info() {
        document.write(`<pre>${this.gavno} sm</pre>`)
    }

    get diametr() {
        document.write(`<pre>${(this.gavno * 2)} sm</pre>`);
    }
    printS() {
        document.write(`<pre>${Math.fround((this.gavno * this.gavno) * Math.PI)}</pre>`)
    }
    print() {
        document.write(`<pre>${Math.fround((this.gavno * Math.PI) * 2)}</pre>`)
    }
}
let head = new Circule({
    radius: 15
});
head.printS();
head.print();
