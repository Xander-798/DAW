//Registrar evento click del ratón al presionar botones de envío

function iniciar(){
    var btnarea = document.getElementById("area");
    var btnperim = document.getElementById("perimetro");

    if(btnarea.addEventListener){
        btnarea.addEventListener("click", calculararea, false);
    }
    else if(btnarea.attachEvent){
        btnarea.attachEvent("onclick", calculararea);
    }

    if(btnperim.addEventListener){
        btnperim.addEventListener("click", calcularperimetro, false);
    }
    else if(btnperim.attachEvent){
        btnperim.attachEvent("onclick", calcularperimetro);
    }
}

function calculararea(){
    var rect = new rectangulo(parseFloat(document.frmrectangulo.txtbase.value), parseFloat(document.frmrectangulo.txtaltura.value));

    rect.mostrar(rect.carea(), 'área');
    return false;
}

function calcularperimetro(){
    var peri = new rectangulo(parseFloat(document.frmrectangulo.txtbase.value), parseFloat(document.frmrectangulo.txtaltura.value));

    peri.mostrar(peri.cperimetro(), 'perímetro');
    return false;
}

//Creando una clase rectángulo
function rectangulo(base, altura){
    //propiedades de la clase
    this.base = base;
    this.altura = altura;

    //métodos de la clase
    //definidos usando el método constructor Function()
    this.carea = function(){
        return this.base * this.altura;
    };

    this.cperimetro = function(){
        return  2*this.base + 2*this.altura;
    };

    this.mostrar = function(valor, tipoc){
        var result = document.getElementById('resultado');
        result.innerHTML = '<p>El ' + tipoc + ' es: ' + Math.round(valor*Math.pow(10,2)/Math.pow(10,2)) + '</p>';
    };
}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}