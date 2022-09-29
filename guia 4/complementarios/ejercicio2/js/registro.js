//Registrar el evento click al presionar el boton de Registro
function iniciar(){
    var btnenviar = document.getElementById("btnReg");
    var select = document.getElementById("selfab");

    //Al producirse en evento change en el elemento select
    //invocar a la función addOptions para volver a llenar
    //el select dependiente con los datos adecuados                
    if(select.addEventListener){
        select.addEventListener("change", function(){
            addOptions(marcas[this.options[this.selectedIndex].text],
            document.frmRegistro.selmod);
        }, false);
    }
    else{
        select.attachEvent("onchange", function(){
            addOptions(marcas[this.options[this.selectedIndex].text],
            document.frmRegistro.selmod);
        });
    }

    //Al producirse un click sobre el botón de envío
    //invocar los métodos del objeto carro que mostrarán
    //los valores ingresados en el formulario
    if(btnenviar.addEventListener){
        btnenviar.addEventListener("click", function(){
            var chkvalue, selvalue, nuevoUsuario;

            var radios = document.getElementsByName('gender');

            //determinar cual input radio está seleccionado (Sexo/Género)
            for (var i = 0; i <  radios.length; i++) {
                if (radios[i].checked) {
                   chkvalue = radios[i].value;
                  break;
                }
            }

            var seleccion = showRadioSelected(document.frmRegistro.radcolor);

            //Al producirse en evento change en el elemento select
            //invocar a la función addOptions para volver a llenar
            //el select dependiente con los datos adecuados
            var select = document.getElementById("selfab");
            if(select.addEventListener){
                select.addEventListener("change", function(){
                addOptions(marcas[this.options[this.selectedIndex].text],
                document.frmRegistro.selmod);
                }, false);
                }
                else{
                select.attachEvent("onchange", function(){
                addOptions(marcas[this.options[this.selectedIndex].text],
                document.frmRegistro.selmod);
                });
                }

            //deterina la selección de rol
            selvalue = document.frmRegistro.seldegree.options[frmRegistro.seldegree.selectedIndex].value;

            //Objeto a registrar
            nuevoUsuario = new Usuario(document.frmRegistro.nombre.value, document.frmRegistro.apellidos.value, 
                document.frmRegistro.edad.value, chkvalue, selvalue, document.frmRegistro.selfab.value,
                document.frmRegistro.selmod.value, seleccion, document.frmRegistro.txtanio.value);

                nuevoUsuario.registrar();
                nuevoUsuario.mostrar();

        }, false);
    }
    else if(btnenviar.attachEvent){
        btnenviar.attachEvent("onclick", function(){
            var chkvalue, selvalue, nuevoUsuario;
            var radiofield = document.frmRegistro.elements["chkgender"];

            var seleccion = showRadioSelected(document.frmRegistro.radcolor);

            //Al producirse en evento change en el elemento select
            //invocar a la función addOptions para volver a llenar
            //el select dependiente con los datos adecuados
            var select = document.getElementById("selfab");
            if(select.addEventListener){
                select.addEventListener("change", function(){
                    addOptions(marcas[this.options[this.selectedIndex].text],
                    document.frmRegistro.selmod);
                }, false);
            }
            else{
                select.attachEvent("onchange", function(){
                    addOptions(marcas[this.options[this.selectedIndex].text],
                    document.frmRegistro.selmod);
                });
            }            

            //deterina la selección de rol
            selvalue = document.frmRegistro.seldegree.options[frmRegistro.seldegree.selectedIndex].value;

            //Objeto a registrar
            nuevoUsuario = new Usuario(document.frmRegistro.nombre.value, document.frmRegistro.apellidos.value, 
                document.frmRegistro.edad.value, chkvalue, selvalue, document.frmRegistro.selfab.value,
                document.frmRegistro.selmod.value, seleccion, document.frmRegistro.txtanio.value);

                nuevoUsuario.registrar();
                nuevoUsuario.mostrar();
        });
    }
}

function showRadioSelected(radiogroup){
    var seleccionado;
    var numradios = radiogroup.length;
    for(var i=0; i<numradios; i++){
        if(radiogroup[i].checked){
            seleccionado = radiogroup[i].value;
        }
    }
    return seleccionado;
}

//Inicializando matriz para manejar las marcas y sus respectivos modelos
var marcas = new Array(7);
marcas["Toyota"] = ["Corolla", "Echo", "Yaris", "Avensis", "Camry", "Land Cruiser", "4 Runner", "Hilux"];
marcas["Nissan"] = ["Sentra", "Platina", "Almera", "Altima", "Tiida", "Pathfinder", "Patrol", "X-Trail", "Frontier"];
marcas["Hyundai"] = ["Elantra", "Accent", "Coupé", "Santa Fe", "i30"];
marcas["Volkswagen"] = ["Golf", "Jetta", "Passat", "Phaeton", "Thunder Bunny", "Touareg", "Saveiro"];
marcas["Chevrolet"] = ["Optra", "Aveo", "Cobalt", "Malibu", "Corvette", "Chevy", "Avalanche", "Trailblazer"];
marcas["Honda"] = ["Civic", "Acura", "Accord", "Fit", "Odyssey", "CR-V", "Pilot", "RidgeLine"];
marcas["Mitsubishi"] = ["Lancer", "Galant", "Eclipse", "Montero", "Nativa", "Outlander", "L200"];

//funciones usadas para establecer los valores del objeto
function addOptions(optionList, optionMenu){
    var i=0;
    removeOptions(optionMenu); //Limpia las opciones
    for(i=0; i<optionList.length; i++){
        optionMenu[i] = new Option(optionList[i], optionList[i]);
    }
}

function removeOptions(optionMenu){
    for(i=0; i<optionMenu.options.length; i++){
        optionMenu.options[i] = null;
    }

}

//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}

//Definiendo la clase Usuario a través del uso de sintexis de función

function Usuario(nombre, apellido, edad, sexo, rol, fabrica, modelo, color, año){
    //Propiedades de la clase
    this.nombre = nombre;
    this.apellidos = apellido;
    this.edad = edad;
    this.sexo = sexo;
    this.rol = rol;
    this.fabrica = fabrica;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
    this.id = null;

    //Métodos de la clase
    this.registrar = function(){
        var cod = this.setcod();
    };

    this.setcod = function(){
        var fecha = new Date();
        var year = fecha.getFullYear();
        var letras = this.letras();
        var alet = this.rand();

        //contruir ID
        this.id = letras + year + alet;
    }

    this.letras = function(){
        var arre = this.apellidos + '';
        var a, b, fin;
        var letr = arre.split(' ');

        if(letr[1] == null){
            a = letr[0];
            b = letr[0];
            fin = a.charAt(0) + b.charAt(0);
        }else{
            a = letr[0];
            b = letr[1];
            fin = a.charAt(0) + b.charAt(0);
        }
        fin = fin.toUpperCase();
        return fin;
    };
    
    this.rand = function(){
        var lok;
        lok = Math.random() * (9999 - 1000) + 1000;
        lok = parseInt(lok);
        return lok;
    };

    this.mostrar = function(){
        var info = document.getElementById('info');
        var informacion = "";
        informacion += "<table class=\"info\">\n<thead>\n\t<tr>\n";
        informacion += "\t\t<th colspan=\"2\">Datos del usuario</th>\n";
        informacion += "\t<tr>\n</thead>\n";
        informacion += "<tbody>\n\t<tr>\n";
        informacion += "\t\t<td>Carnet: </td>\n";
        informacion += "<td>" + this.id + "</td></tr>\n";
        informacion += "<tr><td>Nombre: </td>\n";
        informacion += "<td>" + this.nombre + " " + this.apellidos + "</td></tr>\n";
        informacion += "<tr><td>Edad: </td>\n";
        informacion += "<td>" + this.edad + "</td></tr>\n";
        informacion += "<tr><td>Género: </td>\n";
        informacion += "<td>" + this.sexo + "</td></tr>\n";
        informacion += "<tr><td>Rol: </td>\n";
        informacion += "\t\t<td>" + this.rol + "</td></tr>\n";
        informacion += "<tr><td>Auto preferido: </td>\n";
        informacion += "\t\t<td>" + this.fabrica + " " + this.modelo + " de color: " + this.color + "</td></tr>\n";
        informacion += "<tr><td>Auto obtenido en el año: </td>\n";
        informacion += "\t\t<td>" + this.año + "</td></tr>\n";        
        informacion += "\t</tr>\n</tbody>\n</table>\n";
        info.innerHTML = informacion;
    };

}