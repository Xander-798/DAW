window.onload = function(){ //Acciones tras cargar la página
    pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
    }
    x = "0"; //Guardamos el número en pantalla
    xi = 1; //Inicializar el número número: 0 es no, 1 es sí
    punto = 0; //Estado del punto decimal 0=no, 1=si;

function numero(xx) { //Obtenemos el número que se ha pulsado
    if (x=="0" || xi==1  ) { // Inicializamos el número
       pantalla.innerHTML=xx; //Mostrar a pantalla
       x = xx; //guardamos el número ingresado

       if (xx == ".") { //Si se inicia la cadena de números con un punto (".") se mostrará así: 0.
          pantalla.innerHTML="0.";
          x = xx; //Guardamos el número
          punto = 1; //cambiar estado del punto
          }
      }
      else { //Continúa la cadena de dígitos
          if (xx == "." && punto == 0) { //escribimos un punto decimal solo una vez
              pantalla.innerHTML += xx;
              x += xx;
              punto = 1; //cambiamos el esta del punto 
          }
         
          else if (xx == "." && coma == 1) {} 
            //No se podrá escribir un segundo punto decimal
          else {
              pantalla.innerHTML+=xx; //Resto de casos: escribir un número del 0 al 9: 	 
              x+=xx
          }
       }
       xi=0 //el número está iniciado y acumular el dígito.
    }

    /*
    Referencia
        https://aprende-web.net/jspracticas/calculadora/calculadora4.php
    */