var addropa = document.getElementById('btnagregar');
//Creando un arreglo para guardar las ciudades de cada país
var ropa = new Array(4);
ropa = ["Camisa", "Jeans", "Sweater", "Shorts", "Zapatos"];
//Asociando el manejador de evento click al elemento select country
//Asociando el manejador de evento click
addropa.onclick = function(){
    addRopa(ropa[document.testform.options.text]);
}

function addRopa(optionList, optionMenu){
var newRopa;
do{
newRopa = prompt("Ingrese la ciudad que desea agregar:","");
}while(newRopa == null || newRopa == undefined || newRopa.length == 0);
optionList.push(newRopa);
removeOptions(optionMenu);
addOptions(optionList, optionMenu);
}