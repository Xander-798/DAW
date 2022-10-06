document.onkeydown = keyHit;
var thisPic = 0;
function keyHit(evt){
    var myPix = new Array(
        "img/leon.jpg",
        "img/tigre.jpg",
        "img/puma.jpg",
        "img/leopardo.jpg",
        "img/lince.jpg"
    );

    var imgCt = myPix.length - 1;
    //37 y 39 son los códigos de las teclas que representan
    //la presión de las teclas de cursor izquierda y derecha
    //respectivamente
    var ltArrow = 37;
    var rtArrow = 39;
    //Manejo del objeto para controlar los eventos del teclado
    //de forma uniforme sin importar el navegador
    var thisKey = (evt) ? evt.which : window.event.keyCode;

    if(thisKey == ltArrow){
        chgSlide(-1);
    }
    else if(thisKey == rtArrow){
        chgSlide(1);
    }
    return false;

    function chgSlide(direction){
        thisPic = thisPic + direction;
        
        if(thisPic > imgCt){
            thisPic = 0;
        }
        if(thisPic < 0){
            thisPic = imgCt;
        }
        document.getElementById("myPicture").src = myPix[thisPic];
    }
}