
var num = prompt("Por favor, digite un número entero:");
var pares, i, c = 0, total = 0;
var max = 0, min = 0;

document.write("<h1>Cantidad de cifras: " + num.length + "</h1>");

for(i = 0; i <= num.length; i++){
    pares = parseInt(num[i])%2;
    if(pares == 0){
        c++;
        total = total + parseInt(num[i]);
    }
}

document.write("<h1>Cantidad de cifras pares: " + c + "</h1>");
document.write("<h1>La suma de cifras pares: " + total + "</h1>");

c = 0;
total = 0;

for(i = 0; i <= num.length; i++){
    impar = parseInt(num[i])%2;
    if(impar == 1){
        c++;
        total = total + parseInt(num[i]);
    }
}

document.write("<h1>Cantidad de cifras impares: " + c + "</h1>");
document.write("<h1>La suma de las cifras impares es igual a: " + total + "</h1>");

for(i = 0; i < num.length; i++){
    if(num[i]>max){
        max = num[i];
    }
}

document.write("<h1>La cifra mayor es: " + max + "</h1>");

min = num[0];

for(i = 0; i <= num.length; i++){
    if(min > num[i]){
      min = num[i];  
    }
}

document.write("<h1>La cifra menor es: " + min + "</h1>");