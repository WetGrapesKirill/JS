// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

let btnModalOpen = document.getElementById("btnModalOpen");
let modal = document.getElementsByClassName("modal")[0];
let btnModalClose = document.getElementById("btnModalClose");

btnModalOpen.addEventListener("click", OpenModal);
btnModalClose.addEventListener("click", CloseModal);
window.addEventListener("click", CloseModalOutside);

function OpenModal() {
    modal.style.display = "block";
}

function CloseModal() {
    modal.style.display = "none";
}

function CloseModalOutside(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}