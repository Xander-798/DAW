window.onload = function(){ //Acciones tras cargar la página
    pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
    document.onkeydown = teclado; //Habilitar el ingresar dígitos desde el teclado
}

//Inicializar variables a utilizar
    x = "0"; //Guardamos el número en pantalla
    xi = 1; //Inicializar el número número: 0 es no, 1 es sí
    punto = 0; //Estado del punto decimal 0 = no, 1 = si;
    ni = 0; //Número en espera.
    opcion = "no";

function numero(xx) { //Obtenemos el número que se ha pulsado
    if (x=="0" || xi==1  ){ // Inicializamos el número
        pantalla.innerHTML=xx; //Mostrar a pantalla
        x = xx; //guardamos el número ingresado

        if (xx == ".") { //Si se inicia la cadena de números con un punto (".") se mostrará así: 0.
            pantalla.innerHTML="0.";
            x = xx; //Guardamos el número
            punto = 1; //cambiar estado del punto
        }
    }else{ 
        //Continúa la cadena de dígitos
        if (xx == "." && punto == 0){ //escribimos un punto decimal solo una vez
            pantalla.innerHTML += xx;
            x += xx;
            punto = 1; //cambiamos el esta del punto 
        }else if (xx == "." && coma == 1) {
            //No se podrá escribir un segundo punto decimal
        }else{
            pantalla.innerHTML+=xx; //Resto de casos: escribir un número del 0 al 9: 	 
            x+=xx
        }
    }   

    xi=0 //el número está iniciado y acumular el dígito.
}

    function operar(s) {
        igual(); //Si se cuentan con operaciones previas, se resulven
        ni = x //Guardamos el primer número para poder escribir el segundo.
        opcion = s; //Se almacena el operador
        xi = 1; //Inicializamos la pantalla
    }

    function igual() {
        if (opcion == "no") { 
            //Cuando no hay operaciones pendientes
            pantalla.innerHTML = x;	//No efectuamos nada y solo mostramos el número en pantalla
        }else{ 
            //Al haber operaciones, resolvemos
           sl = ni + opcion + x; //Acumulamos la operación en forma de cadena
           sol = eval(sl) //Se convierte la cadena a código y así, se puede efectuar la operación
           pantalla.innerHTML = sol //Mostramos la solución en pantalla.
           x = sol; //Guardamos la solución por si es necesario en una operación proxima
           opcion = "no"; //Ya no hay operaciones actualmente
           xi = 1; //Se puede acumular un nuevo número
        }
    }

    function raiz() {
        x = Math.sqrt(x) //Con el objeto Math, se resuelve el la raíz cuadrada
        pantalla.innerHTML = x; //Se muestra el resultado
        opcion = "no"; //Se elimina algún proceso pendiente
        xi = 1; //Se puede volver a acumular
    }

    function porcentaje() { 
        x= x/100; //Se divide el número ingresado entre 100
        pantalla.innerHTML = x; //Se muestra el resultado en pantalla
        igualar(); //Resolver operaciones pendientes
        xi = 1; //Reiniciamos la acumulación de dígitos para el primer número
    }

    function invertir() {
        nx = Number(x); //Convertimos los dígitos a números operables
        nx = (1/nx); //Invertimos el número al dividir 1 entre el número ingresado.
        x = String(nx); //Lo convertimos el número a cadena para poder mostrarlo en pantalla y usarlo en otras funcionas
        pantalla.innerHTML = x; //Mostramos el resultado en pantalla
        xi = 1; //Reiniciamos la acumulación de dígitos para el primer número
    }

    function retroceder(){ 
        //Borrar el último número ingresado
        cifras = x.length; //Encontramos el número de caracteres en pantalla
        br = x.substr(cifras-1,cifras); //Obtenemos el último número en pantalla
        x = x.substr(0,cifras-1); //Se elimina el último caracter
        if (x==""){
            x="0"; //Al ya no tener más caracteres, escribimos " 0 ";
        } 
        if(br == "."){
            punto = 0; //Si se llega a eliminar el punto decimal, permitimos volverlo a usar.
        } 
        pantalla.innerHTML = x; //Se muestra el resultado en pantalla.
    }

    function borradoParcial() {
        pantalla.innerHTML=0; //Borramos el número en pantalla.
        x = 0; //Borrar el número guardado.
        punto = 0; //Se reinicia el ingreso del punto decimal
    }

    function borradoTotal() {
        pantalla.innerHTML = 0; //Dejamos la pantalla con el estado inicial, escribimos "0"
        x = "0"; //Reiniciamos el número en trabajo
        punto = 0; //Se reinicia el ingreso del punto decimal
        ni = 0 //El número en espera también se reinicia
        opcion = "no" //Borramos la operación en curso, si es ese el caso
    }

    function teclado (eventO) { 
        evento = eventO || window.event;
        k = evento.keyCode; //obtenemos el número que representa el código de la tecla
        
        //Identificamos las teclas numéricas del teclado alfanumérico
        if (k > 47 && k < 58){ 
            p = k - 48; /*Identificamos el número a mostrar al restar "48" al código 
                          numérico para obtener el número que este dentro de los Naturales*/
            p = String(p); //Se convierte este número obtenido a una cadena para añadir en pantalla
            numero(p); //Se envía a la función numero() para mostrarlo en pantalla.
        }

        //Identificar las teclas numéricas del teclado numérico
        if (k > 95 && k < 106){
           p = k - 96; //El proceso es el mismo que en el anterior, solo que en este caso, se resta "96".
           p = String(p);
           numero(p);
        }

        //Identificamos los caracteres especiales y operadores (*, +, -, /, retroceder, =, CE, C,)
        if(k==110 || k==190){
            numero("."); //Tecla para identificar el punto decimal ( . )
        } 

        if(k==106){
            operar('*'); //Tecla para identificar el operador de multiplicación ( * )
        }

        if(k==107){
            operar('+'); //Tecla para identificar el operador de suma ( + )
        } 

        if(k==109){
            operar('-'); //Tecla para identificar el operador de resta ( - )
        }
         
        if(k==111){
            operar('/'); //Tecla para identificar el operador de división ( / )
        } 

        if(k==32 || k==13){
            igual(); //Tecla para identificar el operador de igualdad ( = ): Enter o Barra espaciadora
        } 

        if(k==46){
            borradoTotal(); //Tecla para identificar el Borrador Total ( C ): "Supr"
        } 

        if(k==8){
            retroceder(); //Tecla para identificar el Retroceder digitado (Retro): tecla de retroceso
        } 
        if(k==36){
            borradoParcial(); //Tecla para identificar el Borrador Parcial ( CE ): tecla de inicio
        } 
    }
