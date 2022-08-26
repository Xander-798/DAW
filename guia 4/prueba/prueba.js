//Función que obtiene el texto seleccionado
function getTextSelected(){
var selText = "";
//Internet Explorer
if(document.selection){
selText = document.selection.createRange().text;
}
//Otros navegadores (Chrome, Firefox, Opera, etc.)
if(window.getSelection){
selText = window.getSelection();
}
if(document.getSelection){
selText = document.getSelection();
}
//Asignar el texto seleccionado a un elemento P
document.getElementById("paragraph").innerHTML = "<p>Texto seleccionado: " + selText +
"</p>";
}