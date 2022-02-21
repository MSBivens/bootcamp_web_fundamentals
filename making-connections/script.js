var username = document.querySelector('#username');
var req = document.querySelector('#conreq');
var connections = document.querySelector('#connections');

function changename() {
    username.innerText = "Michaela Z";
}

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    req.innerText--;
    connections.innerText++;
}

function deny(id) {
    var element = document.querySelector(id);
    element.remove();
    req.innerText--;
}