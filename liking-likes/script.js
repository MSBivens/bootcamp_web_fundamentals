var likes = [9, 12, 9];
var display = [
    document.querySelector("#likesneil"),
    document.querySelector("#likesnichole"),
    document.querySelector("#likesjim")
];

function like(id) {
    likes[id]++;
    display[id].innerHTML = likes[id] + "like(s)";
}