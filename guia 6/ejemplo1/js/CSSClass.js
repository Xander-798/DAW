/**************************************************************************
* CSSClass.js: utilidades para manipular la clase CSS de un elemento HTML *
* Descripción: el módulo define un sólo objeto de espacios de nombres al *
* que se denominará CSSClass. Este objeto contiene funciones *
* de utilidad para trabajar con el atributo class (propiedad *
* className) de elementos HTML. *
* Argumentos: Todas las funciones aceptan dos argumentos: el elemento e *
* que se va a probar o a manipular y la clase CSS c que se *
* va a probar, añadir o eliminar. *
**************************************************************************/
//Crear un objeto de espacio de nombres usando notación de literal de objeto

var CSSClass = {}; //Sintaxis declarativa para objetos

//Devolver true si el elemento e es miembro de la clase c
//y devolver false en caso contrario
CSSClass.is = function(e, c){
    if(typeof e == "string") e = document.getElementById(e);

    //Antes de realizar una búsqueda con regexp, optimizar casos comunes
    var classes = e.className;

    if(!classes) return false; //No es miembro de ninguna clase

    if(classes == c) return true; //Es miembro sólo de una clase

    //En todos los demás casos, utilizar una expresión regular
    //para buscar c como palabra usando \b para coincidir con
    //cualquier límite de palabra. Note que la expresión devolverá
    //true o false dependiendo si el método search() encuentra o no
    //coincidencia con el patrón
    return e.className.search("\\b" + c + "\\b") != -1;
};

//Añadir la clase c al className del elemento e, si no está ya incluido
CSSClass.add = function(e, c){
    if(typeof e == "string") e = document.getElementById(e); //Id del elemento

    if(CSSClass.is(e, c)) return; //Si ya es miembro no hacer nada

    if(e.className) c = " " + c; //Si es necesario utilizar separador de
                                 //espacio en blanco si ya había otra clase

    //Añadir la nueva clase al final
    e.className += c;
};

//Eliminar todas las apariciones de la clase c del className
//del elemento e
CSSClass.remove = function(e, c){
    if(typeof e == "string") e = document.getElementById(e);

    //Buscar en className todas las apariciones de c y reemplazarlas
    //con "". Se utilizará \s* para coincidir con cualquier número
    //de caracteres de espacio en blanco y el modificador global "g"
    //para hacer que la expresión regular coincida con cualquier
    //número de apariciones.
    e.className =  e.className.replace(new RegExp("\\b" + c + "\\b\\s", "g"), "");
}