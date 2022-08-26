window.onload = function(){ //Acciones tras cargar la página
    pantalla = document.getElementById("textoPantalla"); //Elemento para mostrar en pantalla la salida
    document.onkeydown = teclado;  //Función del teclado estará disponible
}

    x = "0"; //Guardamos el número en pantalla
    xi = 1; //Inicializar el número número: 0 es no, 1 es sí
    punto = 0; //Estado del punto decimal 0=no, 1=si;
    oper = "no"; //operación siguiente; "no" =  sin operación.

function numero(xx) { //Obtenemos el número que se ha pulsado
    if (x=="0" || xi==1  ) { // Inicializamos el número
       pantalla.innerHTML=xx; //Mostrar a pantalla
       x = xx; //guardamos el número ingresado

       if (xx == ".") { //Si se inicia la cadena de números con un punto (".") se mostrará así: 0.
          pantalla.innerHTML="0.";
          x = xx; //Guardamos el número
          punto = 1; //cambiar estado del punto
          }
    }else{ //Continúa la cadena de dígitos
          if (xx == "." && punto == 0) { //escribimos un punto decimal solo una vez
              pantalla.innerHTML += xx;
              x += xx;
              punto = 1; //cambiamos el esta del punto 
          }
         
          else if (xx == "." && punto == 1) {} 
            //No se podrá escribir un segundo punto decimal
          else {
              pantalla.innerHTML+=xx; //Resto de casos: escribir un número del 0 al 9: 	 
              x+=xx
          }
    }
       xi = 0 //el número está iniciado y acumula el dígito.
}

function operar(s) {
    igual(); //En el caso de haber operaciones pendientes, se realizan

    ni = x //Ponemos el primer número o cadena de dígitos en espera para poder escribir el segundo.
    oper = s; //Con esta variable guardamos el operador
    xi = 1; //Se vuelve a inicializar la pantalla
}


function igual() {
    if (oper == "no") { //No se realiza operación pues no hay alguna pendiente
       pantalla.innerHTML = x;	//mostramos el mismo número sin operarlo
    }else{ //Si hay una operación en espera, se realiza
       sl = ni + oper + x; //Al ser dígitos, ordenamos los datos y operador en forma de una cadena de caracteres.
       sol = eval(sl); //Se convierte la cadena a código y se evalúa
       pantalla.innerHTML = sol; //Mostramos la solución a pantalla
       x = sol; //Guardamos la solución por si se llega a necesitar en la siguiente operación.
       oper = "no"; //ya no hay operaciones pendientes
       xi = 1; //Se reinicia la acumulación de dígitos
    }
}


function raiz() {
    x = Math.sqrt(x) //Se resuelve una raíz cuadrada
    pantalla.innerHTML=x; //mostrar en pantalla resultado
    oper = "no"; //quitar operaciones pendientes.
    xi = 1; //se puede reiniciar la pantalla 
}

function porcentaje() { 
    x = x/100 //Dividimos el número entre 100
    pantalla.innerHTML = x; //Mostramos el porcentaje en pantalla
    igualar(); //Culminar operaciones pendientes
    xi = 1 //Reinicia la acumulación de dígitos
}

function opuesto() { 
    nx = Number(x); //El dígito lo convertimos a un número
    nx = -nx; //Cambiamos su signo
    x = String(nx); //Se devuelve como cadena de caracteres
    pantalla.innerHTML = x; //Se muestra el resultado
}

function invertir() {
    nx = Number(x); //Como lo hicimos con el anterior tipo de proceso, convertimos la cadena a número
    nx = (1/nx); //Operamos para encontrar el inverso del número;
    x= String(nx); //Se devuelve como cadena de caracteres		 
    pantalla.innerHTML = x; //Se muestra en pantalla
    xi = 1; //Se reinicia la acumulación de datos
}

function retroceder(){ //Eliminamos solo el último caracter en pantall
    cifras = x.length; //Determinamos el número de caracteres acumulados
    br= x.substr(cifras-1, cifras); //obtenemos la información del último caracter
    x= x.substr(0,cifras-1); //Eliminamos el último caracter
    
    if (x == ""){ //Al no hber más dígitos, pondremos 0
        x="0";
    } 
    
    if (br == "."){ //Si hemos eliminamos el punto decimal, se permitirá escribirla de nuevo.    
        punto = 0;
    } 
    pantalla.innerHTML=x; //Mostramos en pantalla	 
}

function borradoParcial() {
    pantalla.innerHTML = 0; //Borramos los dígitos en pantalla.
    x = 0; //Indicamos que no hay dígito pues se ha eliminado la cadena completa acumulada
    punto = 0; //Reiniciamos la caccería				
}

function borradoTotal() {
    pantalla.innerHTML = 0; //poner en pantalla "0"
    x = "0"; //Se reinicia el bloque de dígitos
    punto = 0; //Se reinicia el punto decimal
    ni = 0 //El número acumulado también será 0
    oper = "no" //Borramos o descartamanos el operador
}

function teclado(eve) { 
    evento = eve || window.event;
    k = evento.keyCode; //código numérico de la tecla pulsada
    
    //Determinar teclas numéricas del teclado alfanumérico
    if (k > 47 && k < 58){ 
       p = k - 48; //Restamos 48 al código de la tecla para determinar el número a mostrar
       p = String(p) //Se convierte en cadena de caracteres para mostrar en pantalla
       numero(p); //Se muestra en pantalla
    }

//Determinar teclas numéricas del teclado numérico, similar al previo
    if (k > 95 && k < 106) {
       p = k - 96; //En este caso al estar desde el código de tecla superior a 95, se le resta 96 para determinar el número a mostrar
       p = String(p); //Se convierte en cadena de caracteres
       numero(p); //Se muestra en pantalla
    }

    //Operadores
    if(k == 110 || k == 190){
        numero("."); //teclas de punto decimal
    } 

    if(k == 106){
        operar('*'); //Tecla para la operación de producto ("*" ó multiplicar)
    }

    if(k == 107){
        operar('+'); //Tecla para la operación de adición ("+" ó suma)
    }

    if(k == 109){
        operar('-'); //Tecla para la operación de reducción ("-" ó resta)
    }
    
    if(k == 111){
        operar('/'); //Tecla para la operación de división ("/" ó división)
    }

    if(k == 32 || k == 13){
        igual(); //Tecla para la operación de igualar ("=" ó igual)
    }

    if(k == 46){
        borradoTotal(); //Tecla para borrar todo ("supr")
    }

    if (k == 8){
        retroceder(); //Tecla para retroceder o borrar parcialmente ("retroceder" o "backspace")
    }

    if(k == 36){
        borradoParcial(); //Tecla para Borrar parcialmente una cadena de dígitos (tecla "inicio")
    } 
}