// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

let div = document.createElement("div"); // create a div 
document.body.appendChild(div);
div.setAttribute("class", "desk"); // add a class
div.setAttribute("id", "div"); // add an id

div.innerText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam delectus est expedita.`; // put some text inside the div

let textarea = document.createElement("textarea"); // create textarea
document.body.appendChild(textarea);
textarea.setAttribute("class", "desk"); // add a class
textarea.setAttribute("id", "textarea"); // add an id

textarea.style.display = "none"; // textarea is invisible by default

document.addEventListener('keydown', EditField);

function EditField() {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) { // if Ctrl + E is pressed
        div.style.display = "none"; // div is invisible
        textarea.style.display = "block"; // textarea is visible

        textarea.innerText = div.innerText; // text from the div goes to the textarea

        event.preventDefault(); // default shortcut function is prevented
    }
}

document.addEventListener('keydown', ReturnField);

function ReturnField() {

    if (textarea.style.display == "block") {
        if ((event.ctrlKey || event.metaKey) && event.code == 'KeyQ') { // if Ctrt+, is pressed
            div.style.display = "block"; // div is visible
            textarea.style.display = "none"; // text area is invisible

            let text = document.getElementById("textarea").value; // getting the value from the textarea
            div.innerText = text; // returning it to the div

            event.preventDefault(); // default shortcut function is prevented
        }

    }

}