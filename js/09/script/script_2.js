// Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.

let workers = [{
    name: "John",
    position: "accountant",
    salary: 25000

}, {
    name: "Laura",
    position: "manager",
    salary: 30000

}, {
    name: "Vasya",
    position: "security guard",
    salary: 12000

}, {
    name: "Anna",
    position: "boss",
    salary: 100000

}, {
    name: "Captain Price",
    position: "Door Opener",
    salary: 200000

}, {
    name: "Tonya",
    position: "accountant",
    salary: 26500

}, {
    name: "Terenty",
    position: "cook",
    salary: 13000000
}
]

let root = document.createElement("div");
document.body.appendChild(root);

function getHtml(_workers) {

    let buff = `
    <table>
    <thead>
        <tr>
            <th>No.</th>
            <th id="name">Name</th>
            <th id="position">Position</th>
            <th id="salary">Salary</th>
        </tr>
    </thead>
        `
    for (let i = 0; i < _workers.length; i++) {
        const element = _workers[i];
        buff += `<tr> 
        <td>${i + 1}</td>
        <td>${element.name}</td>
        <td>${element.position.toLowerCase()}</td>
        <td>${element.salary}</td>
        </tr>`
    }

    buff += `</table>`
    root.innerHTML = (`${buff}`);


    let salary = document.getElementById("salary");
    salary.addEventListener("click", SortSalary);

    let name = document.getElementById("name");
    name.addEventListener("click", SortName);

    let positionName = document.getElementById("position");
    positionName.addEventListener("click", SortPosition);
};

getHtml(workers);

function SortSalary() {
    workers.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary));
    getHtml(workers);
};

function SortName() {
    workers.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })
    getHtml(workers);
};

function SortPosition() {
    workers.sort(function (a, b) {
        if (a.position < b.position) { return -1; }
        if (a.position > b.position) { return 1; }
        return 0;
    })
    getHtml(workers);
};
