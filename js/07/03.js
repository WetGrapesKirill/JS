// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
class Employee {
    constructor(_options) {
        this.name = _options.name ? _options.name : "Name";
        this.year = _options.year ? _options.year : "Old Years";
        this.jobs = _options.jobs ? _options.jobs : "Jobs";
    }
}