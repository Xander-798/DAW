
with(document){
    write("<section>");
    write("<article>");
    write("<h1>2° Investigación: Métodos push() y pop()</h1>");    
}

//función push()
with(document){
    write("<h2>Método push()</h2>");
    write("<p>El método <b>push()</b>, añade uno o varios elementos al final de un arreglo y devuelve su nueva longitud.</p>");
    write("<div>");
    write("<h2 class='ejemplo'>Ejemplo:</h2>");
}
var ropa = ["Camisa","Sweater","Zapatos","Shorts"];
document.write("<input type='submit' class='very' value='Ver Listado Actual' onclick=' listado();'>");
function listado(){
    var ropas;
    ropas = " * " + ropa[0];
    for(var i = 1;i<ropa.length;i++){
        ropas += " * "+ropa[i];
    }
    alert(ropas);
}

with(document){
    write("<br>Añadamos más ropa (se mostrará através de una alerta):");
    write("<input type='text' class='dato' id='rop'><input type='submit' class='very' value='Añadir' onclick=' sumaLista();'>");
    write("</div>");
}
function sumaLista(){
    var newRopa = document.getElementById('rop').value;
    ropa.push(newRopa);
    var alerta = "Tenemos ROPA (lista actualizada):     ";
    for(var i = 0;i<ropa.length;i++){   
        alerta += "* "+ropa[i]+ "   ";
        
    }
    alert(alerta);
}


//función pop()
with(document){
    write("<h2>Método pop()</h2>");
    write("<p>El método <b>pop()</b>, elimina el elemento ubicado al final de un arreglo y devuelve su nueva longitud.</p>");
    write("<div>");
    write("<h2 class='ejemplo'>Ejemplo:</h2>");
    write("<input type='submit' class='very' value='Eliminar elemento en la lista de arriba' onclick=' eliminar();'>");
    write("</div>");
}

with(document){    
    write("<article>");
    write("<section>");
}

function eliminar(){
    ropa.pop();
    var alerta = "Tenemos ROPA (lista actualizada):     ";
    for(var i = 0;i<ropa.length;i++){   
        alerta += "* "+ropa[i]+ "   ";
        
    }
    alert(alerta);
}