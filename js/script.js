function toggleMenu() {

    var x = document.getElementById("topMenu");

    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function checkTextboxes() {

    var y = document.getElementById("emptyMessage");
    var first = document.getElementById("inputFirst").value;
    var last = document.getElementById("inputLast").value;
    var msg = document.getElementById("inputMessage").value;

    if (first.length + last.length + msg.length <= 0) {
        y.style.display = "block";
    }
    else {
        y.style.display = "none";
    }
}
