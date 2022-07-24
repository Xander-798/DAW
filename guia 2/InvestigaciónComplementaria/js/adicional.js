
with(document){
    write("<section>");
    write("<article>");
    write("<h1>3° Investigación: Método reverse()</h1>");    
}

//Función reverse()
with(document){
    write("<h2>Método reverse()</h2>");
    write("<p>El método <b>reverse()</b>, invierte el orden de los elementos en un arreglo ingresado. El primer elemento será el último y el último será el primero.</p>");
    write("<div>");
    write("<h2 class='ejemplo'>Ejemplo:</h2>");
    write("<p>Facciones comúnmente encontradas en la fantasía: </p>");
    write("<p>");
}

//mostramos un listado con este arreglo
var facciones = ["Caballero", "Asesino", "Paladin", "Mago", "Elfo", "No Muerto", "Demonio"];
for(var i = 0;i<facciones.length;i++){
    document.write(facciones[i]);
    if(i+1 != facciones.length){
        document.write(", ");
    }
}
with(document){
    write("</p>");
    write("<input type='submit' class='very' value='¡Invirtamos la lista!' onclick=' espejo();'>");
    write("</p>");
}
facciones.reverse();

var listado2;
listado2 = facciones.join(" | ")
function espejo(){
    alert("Al revés serían: " + listado2);
    
}
with(document){    
    write("<article>");
    write("<section>");
}