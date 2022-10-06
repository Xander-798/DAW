if (document.addEventListener) {
    this.addEvent = function (elem, type, fn) {
        elem.addEventListener(type, fn, false);
        return fn;
    };

    this.removeEvent = function (elem, type, fn) {
    elem.removeEventListener(type, fn, false);
    };
}
else if (document.attachEvent) {
    this.addEvent = function (elem, type, fn) {
    var bound = function () {
        return fn.apply(elem, arguments);
    };
    elem.attachEvent("on" + type, bound);
    return bound;
    };

    this.removeEvent = function (elem, type, fn) {
        elem.detachEvent("on" + type, fn);
    };
}

/* Probando el manejador de eventos portable */
addEvent(window, "load", function () {
    var elems = document.getElementsByTagName("div");
    for (var i=0; i < elems.length; i++)
        (function (elem) {
            var handler = addEvent(elem, "click", function () {
            this.className = document.frmestilos.selestilos.options[document.frmestilos.selestilos.selectedIndex].value;
            //removeEvent(elem, "click", handler);
            });
        })(elems[i]);
});