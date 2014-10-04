var container = document.createElement("div");
container.style.width = "200px";
container.style.height = "100px";

document.body.appendChild(container);

document.onkeydown = function(e) {
    e = e || window.event;

    if (document.getElementById(e.keyCode)) {return;}
    var span = document.createElement("span");
    span.innerHTML = String.fromCharCode(e.keyCode);
    span.setAttribute("style", "width:20px; height:20px; border: 1px solid black; border-radius:5px;padding: 4px;");

    span.setAttribute("id", e.keyCode);
    container.appendChild(span);
};

document.onkeyup = function (e) {
    e = e || window.event;
    var span = document.getElementById(e.keyCode);
    span.parentElement.removeChild(span);
};

