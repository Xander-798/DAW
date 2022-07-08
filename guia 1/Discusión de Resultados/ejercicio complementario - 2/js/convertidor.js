/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con            *
* Software Interpretado en el Cliente                    *
* Archivo: calculadora.js                                *
* Descripción: Realizar operaciones aritméticas básicas. *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//Función que funciona como manejador de evento
//al producirse el evento load (carga de la página)
function init() {
    //Elemento div donde se mostrará el menú de las operaciones
    var operaciones = document.getElementById('operaciones');
    //Elemento div donde se mostrarán los resultados
    var resultado = document.getElementById('resultado');
    //Creando el contenido de la página
    var contenido = "<header>\n";
    contenido += "\t<h1>Convirtamos <b>Metros</b> a:</h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>PIES</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>PULGADAS</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>YARDAS</span></a>\n";
    contenido += "</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";
//Colocar el contenido dentro del elemento div
operaciones.innerHTML = contenido;
//Preparando el manejo del evento click sobre los enlaces del menú
var opciones = document.getElementsByTagName('a');
//Recorrer todos los elementos de enlace (elementos a)
//y asignar el manejador del evento click
for(var i=0; i<opciones.length; i++){
switch(i){
case 0:
//Función sumar
//Ingresar los datos de los números a operar
opciones[i].onclick = function(){
    do {
        var metroms = prompt('Introduzca la cantidad de metros a convertir:','');
    }while(metroms<0);
    resultado.innerHTML = "<p class=\"letterpress\">Haz ingresado " + metroms + " en metros.</p>\n<p>Equivaliendo a <b>"+ (metroms * 3.28) +" pies</b>.</p>";
}
break;
case 1:
opciones[i].onclick = function(){
    do {
        var metroms = prompt('Introduzca la cantidad de metros a convertir:','');
    }while(metroms<0);
resultado.innerHTML = "<p class=\"letterpress\">Haz ingresado " + metroms + " en metros.</p>\n<p>Equivaliendo a <b>"+ (metroms * 39.370) +" pulgadas</b>.</p>";
}
break;
case 2:
opciones[i].onclick = function(){

    do {
        var metroms = prompt('Introduzca la cantidad de metros a convertir:','');
    }while(metroms<0);
resultado.innerHTML = "<p class=\"letterpress\">Haz ingresado " + metroms + " en metros.</p>\n<p>Equivaliendo a <b>"+ (metroms * 1.0936) +" yardas</b>.</p>";
}
break;
}
}
}
window.onload = init;