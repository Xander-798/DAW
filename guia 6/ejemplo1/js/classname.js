function init(){
    var btnAgregar = document.getElementById("add");
    var btnEliminar = document.getElementById("remove");
    var hElement = document.getElementById("head");
    var clsName;
        //alert(hElement + " | " + clsName);
    
    //Controlar evento click sobre el botón Agregar
    if(btnAgregar.addEventListener){
        btnAgregar.addEventListener("click", function(){
            clsName = document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
            CSSClass.add(hElement, clsName);
        }, false);
    }
    else if(btnAgregar.attachEvent){
        btnAgregar.attachEvent("onclick", function(){
            clsName = document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
            CSSClass.add(hElement, clsName);
        });
    }

    //Controlar evento click sobre botón Eliminar
    if(btnEliminar.addEventListener){
        btnEliminar.addEventListener("click", function(){
            clsName = document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
            CSSClass.remove(hElement, clsName);
        }, false);
    }
    else if(btnEliminar.attachEvent){
        btnEliminar.attachEvent("onclick", function(){
            clsName = document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
            CSSClass.remove(hElement, clsName);
        });
    }
}

if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}