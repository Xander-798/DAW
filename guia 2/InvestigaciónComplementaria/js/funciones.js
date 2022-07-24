with(document){
    write("<section>");
    write("<article>");
    write("<h1>1° Investigación: Funciones del objeto Math</h1>");    
}

//función abs()
with(document){
    write("<h2>Función abs()</h2>");
    write("<p>Esta función, <b>Math.abs()</b>, devuelve el valor absoluto de un número. En otras palabras, su posición con relación al 0 sin importar si el número evaluado es positivo o negativo.</p>");
    write("<div>");
    write("<h2 class='ejemplo'>Ejemplo:</h2>");
    write("<label for='numero'>Ingrese un número: </label><input type='text' class='dato' id='numero'><input type='submit' class='very' value='Verificar' onclick=' verificar();'>");
    write("</div>");
}
    function verificar(){
        var numero = document.getElementById('numero').value;
        alert("El valor absoluto es: " + Math.abs(Number(numero)));
    }

//función round()
    with(document){
        write("<h2>Función round()</h2>");
        write("<p>Esta función, <b>Math.round()</b>, devuelve el número redondeado o aproximado al valor entero más cercano (ya sea menor o mayor al ingresado).</p>");
        write("<div>");
        write("<h2 class='ejemplo'>Ejemplo:</h2>");
        write("<label for='redondear'>Ingrese un número decimal: </label><input type='text' class='dato' id='redondear'><input type='submit' class='very' value='Verificar' onclick=' redondeado();'>");
        write("</div>");
    }

    function redondeado(){
        var redondear = document.getElementById('redondear').value;
        alert("El valor redondeado es: " + Math.round(Number(redondear)));
    }

//función ceil()
with(document){
    write("<h2>Función ceil()</h2>");
    write("<p>Esta función, <b>Math.ceil()</b>, retorna el valor entero mayor más proximo al número ingresado.</p>");
    write("<div>");
    write("<h2>Ejemplo:</h2>");
    write("<label for='aprox'>Ingrese un número decimal: </label><input type='text' class='dato' id='aprox'><input type='submit' class='very' value='Verificar' onclick=' aproximar();'>");
    write("</div>");
}

function aproximar(){
    var aprox = document.getElementById('aprox').value;
    alert("El valor entero mayor más proximo al ingresado, es: " + Math.ceil(Number(aprox)));
}

//función floor()
with(document){
    write("<h2>Función floor()</h2>");
    write("<p>Esta función, <b>Math.floor()</b>, retorna el valor entero menor más proximo al número ingresado.</p>");
    write("<div>");
    write("<h2>Ejemplo:</h2>");
    write("<label for='aprox2'>Ingrese un número decimal: </label><input type='text' class='dato' id='aprox2'><input type='submit' class='very' value='Verificar' onclick=' aproximar2();'>");
    write("</div>");
}

function aproximar2(){
    var aprox2 = document.getElementById('aprox2').value;
    alert("El valor entero mayor más proximo al ingresado, es: " + Math.floor(Number(aprox2)));
}

//función exp()
with(document){
    write("<h2>Función exp()</h2>");
    write("<p>Esta función, <b>Math.exp()</b>, retorna el valor resultante de elevar el número de Euler (e o constante de Napier) al número ingresado.</p>");
    write("<div>");
    write("<h2>Ejemplo:</h2>");
    write("<label for='napier'>Ingrese un número decimal: </label><input type='text' class='dato' id='napier'><input type='submit' class='very' value='Verificar' onclick=' logaritmo();'>");
    write("</div>");
}

function logaritmo(){
    var napier = document.getElementById('napier').value;
    alert("Elevando el valor de euler al valor ingresado, da: " + Math.exp(Number(napier)));
}

//función log()
with(document){
    write("<h2>Función log()</h2>");
    write("<p>Esta función, <b>Math.log()</b>, retorna la base neutral del número ingresado (con base e), equivale a ln(x) en la matemática.</p>");
    write("<div>");
    write("<h2>Ejemplo:</h2>");
    write("<label for='log'>Escriba un número para encontrar su base natural: </label><input type='text' class='dato' id='log'><input type='submit' class='very' value='Verificar' onclick=' neutral();'>");
    write("</div>");
}

function neutral(){
    var log = document.getElementById('log').value;
    if(log < 0 )
        log = log * (-1);
    alert("El valor será: " + Math.log(Number(log)));
}

with(document){
    write("</article>");
    write("</section>");
}