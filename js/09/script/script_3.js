// Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.

let resizableDesk = document.createElement("div"); // create a div 
document.body.appendChild(resizableDesk);
resizableDesk.setAttribute("id", "resizable"); // add an id
resizableDesk.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, eaque adipisci temporibus corrupti molestias vero debitis tempora fugiat quis eos?";

let resizer = document.createElement('div'); // create a resizer
resizableDesk.appendChild(resizer); // append a resizer
resizer.setAttribute("class", "resizer"); // add a class to the resizer

let startX, startY, startWidth, startHeight; // declare useful variables

resizer.addEventListener('mousedown', StartDrag); // add the pre-drag function

function StartDrag(e) {
    startX = e.clientX; // getting mouse coordinates X and Y and storing them in variables
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(resizableDesk).width, 10); // getting the initial width and height of the div
    startHeight = parseInt(document.defaultView.getComputedStyle(resizableDesk).height, 10);

    document.documentElement.addEventListener('mousemove', DragIt); // adding drag function and stop drag functions
    document.documentElement.addEventListener('mouseup', StopDrag);
};

function DragIt(e) {
    resizableDesk.style.width = `${startWidth + e.clientX - startX}px`; // the calculated width / height is original width/height + the difference between initial and next mouse coordinates;
    resizableDesk.style.height = `${startHeight + e.clientY - startY}px`;
};

function StopDrag(e) {
    document.documentElement.removeEventListener('mousemove', DragIt); // after releasing the mouse the events are removed
    document.documentElement.removeEventListener('mouseup', StopDrag);
}

