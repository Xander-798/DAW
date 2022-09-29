//Secuencia de comandos para demostrar la funcionalidad
//básica del DOM (Document Object Model)
//Variable que almacena el nodo actual resaltado
var nodoActual;

//Se usa para asignar un id único a los nuevos elementos
var cuentaid = 0;

//Registar manejadores de eventos e inicializar nodoActual
function iniciar(){
    document.getElementById("botonPorId").addEventListener("click", porId, false);
    document.getElementById("botonInsertar").addEventListener("click", insertar, false);
    document.getElementById("botonAdjuntar").addEventListener("click", adjuntarNodo, false);
    document.getElementById("botonReemplazar").addEventListener("click", reemplazarActual, false);
    document.getElementById("botonEliminar").addEventListener("click", eliminar, false);
    document.getElementById("botonPadre").addEventListener("click", padre, false);

    //Inicializar nodo actual
    nodoActual = document.getElementById("encabezadogrande");
}

if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}

//Obtener y resaltar un elemento en base a su atributo id
function porId(){
    var id = document.getElementById("gbi").value;
    var destino = document.getElementById(id);

    if(destino){
        cambiarA(destino);
    }
}

//Insertar un elemento párrafo antes del elemento actual
//usando el método insertBefore
function insertar(){
    var nuevoNodo = crearNuevoNodo(document.getElementById("ins").value);
    nodoActual.parentNode.insertBefore(nuevoNodo, nodoActual);
    cambiarA(nuevoNodo);
}

//Adjuntar un nuevo párrafo como hijo del nodo actual
function adjuntarNodo(){
    var nuevoNodo = crearNuevoNodo(document.getElementById("adjuntar").value);
    nodoActual.appendChild(nuevoNodo);
}

//Reemplazar el nodo actual selecconado por un nodo párrafo
function reemplazarActual(){
    var nuevoNodo = crearNuevoNodo(document.getElementById("reemplazar").value);
    nodoActual.parentNode.replaceChild(nuevoNodo, nodoActual);
}

//Eliminar el nodo actual
function eliminar(){
    if(nodoActual.parentNode == document.body){
        alert("No se puede eliminar un elemento de nivel superior");
    }else{
        var nodoAnterior = nodoActual;
        cambiarA(nodoAnterior.parentNode);
        nodoActual.removeChild(nodoAnterior);
    }
}

//Obtener y resaltar el padre del nodo actual
function padre(){
    var destino = nodoActual.parentNode;
    if(destino != document.body){
        cambiarA(destino);
    }else{
        alert("No hay padre.");
    }
}

//Función ayudante que devuelve un nuevo nodo párrafo
//que contiene un id único y texto dado
function crearNuevoNodo(texto){
    var nuevoNodo = document.createElement("p");
    idNodo = "nuevo" + cuentaid;
    ++cuentaid;

    //Establecer id del nuevoNodo
    nuevoNodo.setAttribute("id", idNodo);
    texto = "[" + idNodo + "]" + texto;
    nuevoNodo.appendChild(document.createTextNode(texto));
    return nuevoNodo;
}

//Función ayudante que cambia a un nuevo nodoActual
function cambiarA(nuevoNodo){
    //Elimina el resaltado anterior
    nodoActual.setAttribute("class", "");
    nodoActual = nuevoNodo;

    //Resaltar al nuevo nodo actual
    nodoActual.setAttribute("class", "highlighted");
    document.getElementById("gbi").value = nodoActual.getAttribute("id");
}