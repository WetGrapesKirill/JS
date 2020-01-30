// 1. Создать страницу, которая выводит нумерованный список песен:

let playlist = [{
    author: "Ram Jam",
    song: "Black Betty"
},
{
    author: "Chuck Berry",
    song: "Johnny B Goode"
},
{
    author: "Red Hot Chili Peppers",
    song: "Californication"
},

{
    author: "Ray Charles",
    song: "Hit The Road Jack"
},
{
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
},
{
    author: "The Animals",
    song: "House of the Rising Sun"
},
{
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
},
{
    author: "The Rolling Stones",
    song: "Paint It, Black"
}
];

let orderedList = document.createElement("ol"); // adding ordered list and appending it
document.body.appendChild(orderedList);

for (let i = 0; i < playlist.length; i++) {
    let listItem = document.createElement("li"); // adding list and appending it
    orderedList.appendChild(listItem);
    listItem.innerText = (`${playlist[i].song} by ${playlist[i].author}`); // writing inside li
    listItem.style.fontSize = "x-large";
}
