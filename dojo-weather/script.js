console.log("Loaded Correctly")

// Weather report loading allert

function cityalert() {
    alert("Loading weather report...")
}

// Remove cookie element once accepted

var cookie = document.querySelector(".div-cookie-container");

function accept() {
    cookie.remove();
}

// Converts temperature to selected measurement

function cTf(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function fTc(temp) {
    return Math.round((temp - 32) * 5 / 9);
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var temp = document.querySelector("#temp" + i);
        var tempnum = parseInt(temp.innerText);
        if(element.value == "°C") {
            temp.innerText = fTc(tempnum);
        }
        else {
            temp.innerText = cTf(tempnum);
        }
    }
}