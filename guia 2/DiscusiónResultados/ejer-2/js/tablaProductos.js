document.write("<th>Productos</th><th>Precio</th>");
var total = 0;
var b = false;

do{
    var c = prompt("Por favor, digite la cantidad de productos que vende: ");
    
    
    var dinero = new Array();

    for(var i = 1; i <= c; i++){
        dinero[i] = prompt("Ahora, ingrese el precio del " + i +"° producto ");
    }

        document.write("<table>");
        
        for(i = 1; i <= c; i++){
            document.write("<tr><td>Procuto " + i + "</td><td>$" + dinero[i] + "</td></tr>");
            total = total + parseInt(dinero[i]);
        }

        

        var verificar = confirm("¿Desea registrar otros productos?");

        if(verificar == true){
            b = true;
        }else{
            b = false;
        }
}while(b == true);
document.write("<tr><td>Total</td><td>$" + total +"</td></tr>");
document.write("</table>");