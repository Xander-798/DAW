//Creando el objeto
var book = new Object();

//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
    var showinfo = document.getElementById("mostrar");

    if(showinfo.addEventListener){
        showinfo.addEventListener("click", function(){
            createObject(document.frmbook);
        }, false);
    }
    else if(showinfo.attachEvent){
        showinfo.attachEvent("onclick", function(){
            createObject(document.frmbook);
        });
    }
}

// Creando el nuevo objeto
function createObject(form){
    book.autor = form.txtautor.value;
    book.titulo = form.txttitulo.value;
    book.editorial = form.seleditorial.options[form.seleditorial.selectedIndex].text;
    book.edicion = form.seledicion.options[form.seledicion.selectedIndex].text;
    book.pais = form.txtpais.value;
    showProperties(book, "InfoBook");
}

function showProperties(objeto, objName){
    var infBook = "";
    var tblBook = "";
    var info = document.getElementById('infolibro');
    for(var i in objeto){
        infBook = infBook + objName + " . " + i + " = " + objeto[i] + "\n";
    }

    if(!confirm(infBook + "\n\n¿Esta información está correcta?")){
        frmbook.txtautor.value = "";
        frmbook.txttitulo.value = "";
        frmbook.seleditorial.value = "a";
        frmbook.seledicion.value = "a";
        frmbook.txtpais.value = "";
    }

    tblBook += "<table class=\"bookinfo\">\n";
    tblBook += "<thead>\n\t</tr>\n";
    tblBook += "\t\t<th>Título</th>\n";
    tblBook += "\t\t<th>Autor</th>\n";
    tblBook += "\t\t<th>Editorial</th>\n";
    tblBook += "\t\t<th>Edición</th>\n";
    tblBook += "\t\t<th>País</th>\n";
    tblBook += "\t</tr>\n</thead>\n";
    tblBook += "<tbody>\n";
    tblBook += "\t<tr>\n";
    tblBook += "\t\t<td>" + book.titulo + "</td>\n";
    tblBook += "\t\t<td>" + book.autor + "</td>\n";
    tblBook += "\t\t<td>" + book.editorial + "</td>\n";
    tblBook += "\t\t<td>" + book.edicion + "</td>\n";
    tblBook += "\t\t<td>" + book.pais + "</td>\n";
    tblBook += "\t\t</tr>\n</tbody>\n";
    tblBook += "</table>\n";
    info.innerHTML = tblBook;
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}