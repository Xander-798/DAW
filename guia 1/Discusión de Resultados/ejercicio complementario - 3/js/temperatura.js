function init() {
    //Elemento div donde se mostrará el menú de las operaciones
    var temperatura = document.getElementById('temperatura');
    //Elemento div donde se mostrarán los tempDs
    var tempD = document.getElementById('tempD');
    //Creando el contenido de la página
    var cont = "<header>\n";
    cont += "\t<h1>Convirtamos <b>Celsius</b> a <b>Fahrenheit</b></h1>\n";
    cont += "</header>\n";
//Colocar el contenido dentro del elemento div
temperatura.innerHTML = cont;
//Preparando el manejo del evento click sobre los enlaces del menú
    var temp = prompt('¡Hola! Adelante, digita la temperatura (Dato está en Celsius):','');
    tempD.innerHTML = "<p class=\"letterpress\">" + temp + "° Celsius, Son <b>"+ ((temp * (9/5))+32) +" Grados Fahrenheit</b>.</p>";
}
window.onload = init;