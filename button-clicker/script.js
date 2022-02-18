function loginout() {
    document.getElementById('button-login').innerHTML = "Logout";
}

function remove() {
    var elem = document.getElementById('add-definition');
    elem.parentNode.removeChild(elem);
    return false;
}