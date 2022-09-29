//Crear objeto
var potencia = new Object();

//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
    var showinfo = document.getElementById("mostrar");

    if(showinfo.addEventListener){
        showinfo.addEventListener("click", function(){
            do {
                bs = prompt("Ingresar la base:");
                pt = prompt("Ingresar la potencia:");
            } while (isNaN(bs) && isNaN(pt));
            crearPotencia(bs, pt);
        }, false);
    }
    else if(showinfo.attachEvent){
        showinfo.attachEvent("onclick", function(){
            do {
                bs = prompt("Ingresar la base:");
                pt = prompt("Ingresar la potencia:");
            } while (isNaN(bs) && isNaN(pt));
            crearPotencia(bs, pt);
        });
    }
}

//Nuevo objeto
function crearPotencia(b, p){
    potencia.base = b;
    potencia.poten = p;
    potencia.result = potenciar(potencia.base, potencia.poten);

    mostrar(potencia);
}

function potenciar(base, pot){
    var result = Math.pow(base, pot);
    return result;
}

function mostrar(objeto){
    var pantalla = document.getElementById('resultado');
    pantalla.innerHTML = "";
    pantalla.innerHTML += "<h2>El número " + potencia.base + " elevado a " + potencia.poten + "</h2>";
    pantalla.innerHTML += "<h2>El resultado de calcular la potencia es: " + potencia.result + "</h2>";
}



//Asociar funcion que maneja el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar, false);
}