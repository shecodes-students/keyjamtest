var container = document.createElement("div");

document.body.appendChild(container);

document.onkeydown = function(e) {
    e = e || window.event;

    if (document.getElementById(e.keyCode)) {return;}
    var span = document.createElement("span");
    span.innerHTML = String.fromCharCode(e.keyCode);

    span.setAttribute("id", e.keyCode);
    container.appendChild(span);
};

document.onkeyup = function (e) {
    e = e || window.event;
    var span = document.getElementById(e.keyCode);
    span.parentElement.removeChild(span);
};

