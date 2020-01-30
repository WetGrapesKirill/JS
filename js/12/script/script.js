// Реализовать веб-страницу для поиска фильмов. При открытии страницы пользователю доступна только форма для ввода названия фильма (или части названия) и выбора типа (movie, series, episode).

// После того, как пользователь ввел данные и нажал на кнопку Search, необходимо отправить соответствующий запрос к API ресурса OMDB (http://www.omdbapi.com/) с помощью AJAX.

// Если в качестве ответа на запрос вы получили список фильмов, то его необходимо отобразить под формой поиска. Если по заданным критериям не будут найдены фильмы, то отобразите сообщение Movie not found!.

// Учтите, что OMDB по умолчанию возвращает только первые 10 фильмов. Поэтому необходимо реализовать пагинацию для тех случаев, когда под критерии поиска подходит больше, чем 10 фильмов. Пагинация – это порядковая нумерация страниц, которая обычно находится вверху или внизу страниц сайта. Вероятно, вы видели в интернет-магазинах на страницах с товарами кнопки с цифрами 1, 2, 3 и т. д., при нажатии на которые отбражается другой блок товаров. Вот такие кнопки и называют пагинацией. Таким образом, при первом поиске необходимо выводить первые 10 фильмов и кнопки для перехода по страницам. При клике на такую кнопку необходимо отправить запрос с указанием в параметрах требуемой страницы, и полученный результат вывести на место текущего списка фильмов.

// Возле каждого фильма должна быть кнопка Details, при нажатии на которую будет выводиться подробная информация о фильме. Эту информацию необходимо выводить на этой же странице сразу под списком найденных фильмов и пагинацией.

// Все запросы необходимо отправлять, используя AJAX. То есть при нажатии на любые кнопки ваша веб-страница не должна обновляться.
// Ссылка на API OMDB: http://www.omdbapi.com/ (необходимо зарегистри роваться для получения API KEY).
// Ссылка на альтернативный API с фильмами (для того случая, если OMDB не будет работать): https://developers.themoviedb.org/3/ search/search-movies.
// Если же и этот API не будет работать, вам придется сам остоятельно найти другой доступный ресурс и адаптировать под него задание.
let input = document.getElementById("name");
let select = document.getElementById("select");
let submit = document.getElementById("submit");
input.addEventListener("keyup", function () {
    if (event.keyCode === 13) {
        event.preventDefault();
        ClearPage();
        FetchFilm(input.value, select.value, page, 0);
    }
});
submit.addEventListener('click', function () {
    ClearPage();
    FetchFilm(input.value, select.value, page, 0);
});
let btn = document.createElement("button");
btn.innerText = "Next Page"
let btnLast = document.createElement("button");
btnLast.innerText = "Last Page"
btn.addEventListener('click', function () { FetchFilm(input.value, select.value, page, 1); });
btnLast.addEventListener('click', function () { FetchFilm(input.value, select.value, page, -1); });
let page = 1;
let wrapper = document.createElement("div");
wrapper.setAttribute('id', 'wrapper');
document.getElementById("panel").appendChild(wrapper);
function FetchFilm(_name, _type, _page, _increment) {
    _page = _page + _increment;
    page = _page;
    let url = `https://www.omdbapi.com/?s=${_name}&type=${_type}&page=${_page}&apikey=c19ba406`;
    fetch(url)
        .then(response => response.json())
        .then(myJson => {
            obj = myJson;
            console.log(myJson)
            wrapper.innerHTML = ''
            for (let i = 0; i < obj.Search.length; i++) {
                let element = document.createElement('div');
                element.classList.add("element");
                let inner = document.createElement('div');
                inner.classList.add("inner");
                let img = document.createElement('img');
                img.setAttribute("src", `${obj.Search[i].Poster}`)
                img.setAttribute("onerror", 'imgError(this)')
                inner.appendChild(img)
                let p1 = document.createElement('p')
                p1.classList.add('movie_title')
                p1.innerText = `${obj.Search[i].Title}`
                let p2 = document.createElement('p')
                p2.innerText = `${obj.Search[i].Year}`
                let infobtn = document.createElement('a')
                infobtn.innerText = "Show info"
                infobtn.setAttribute('data-remodal-target', 'modal')
                infobtn.classList.add("btn-more")
                infobtn.addEventListener('click', function () { getInfo(obj.Search[i].imdbID) })
                let fav = document.createElement('a');
                fav.classList.add("btn-more")
                fav.classList.add("btn-fav")
                fav.innerText = "Add to favourites"
                fav.addEventListener('click', function () { saveId(obj.Search[i].imdbID) })
                element.appendChild(inner)
                element.appendChild(p1)
                element.appendChild(p2)
                element.appendChild(infobtn)
                element.appendChild(document.createElement('br'))
                element.appendChild(fav)
                wrapper.appendChild(element);
            }
            document.getElementById("nav").appendChild(btnLast);
            document.getElementById("nav").appendChild(btn);
            if (_page == 1) {
                btnLast.disabled = true;
            } else {
                btnLast.disabled = false;
            };
            if (_page >= (parseInt(obj.totalResults) / 10)) {
                btn.disabled = true;
            } else {
                btn.disabled = false;
            }
        })
        .catch(function (error) {
            console.log("ERROR!");
            console.error(error);
            let inst = $('[data-remodal-id=modal-error]').remodal();
            inst.open();
            document.getElementById('table').innerHTML = ''
        });
}
function getInfo(_id) {
    fetch(`https://www.omdbapi.com/?i=${_id}&plot=full&apikey=c19ba406`)
        .then(response => response.json())
        .then(myJson => {
            object = myJson;
            console.log(myJson)
            document.getElementById(`plot-para`).innerHTML = `${object.Plot}`
            document.getElementById(`heading`).innerHTML = `${object.Title}`
            document.getElementById(`year`).innerHTML = `${object.Year}`
            document.getElementById(`image`).setAttribute('src', `${object.Poster}`)
            document.getElementById('image').setAttribute("onerror", 'imgError(this)')
        })
}
let films = JSON.parse(localStorage.films || '[]');
console.log(localStorage.getItem("films"))
function saveId(_id) {
    let present = false;
    let arrayindex = ''
    for (let i = 0; i < films.length; i++) {
        if (_id == films[i].id) {
            present = true
            arrayindex = i
        }
    }
    if (present == false) {
        films.push({ 'id': `${_id}` })
        localStorage.setItem("films", JSON.stringify(films));
        console.log(localStorage.getItem("films"))
    }
    if (present == true) {
        console.log(arrayindex)
        films.splice(arrayindex, 0)
        console.log(films)
        localStorage.setItem("films", JSON.stringify(films));
        console.log(localStorage.getItem("films"))
    }
    present = false;
    arrayindex = ''
}
function ClearPage() {
    page = 1;
}
function imgError(image) {
    image.onerror = "";
    image.src = "./img/error.png";
}
