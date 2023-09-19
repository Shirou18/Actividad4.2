

window.onload = function() { //al cargarse la página

fondol-document.getElementById("fondouno"); //referencia al primer fondo.

fondo2=document.getElementById("fondodos"); //referencia al segundo fondo pararmover-setInterval(mover, 50); //iniciar primer temporizador: movimiento

setInterval(repetir, 2250); //iniciar segundo temporizador: repetición del ciclo.

}

desplazar=0; //estado inicial del movimiento.

function mover() { //temporizador 1: movimiento

desplazar-=10; //desplazar fondo1 -10px

desplazar2=desplazar+450; //desplazar fondo2 a la vez

posicion1-desplazar+"px"; //preparar para código CSS fondol

posicion2=desplazar2+"px"; //preparar para código CSS fondo1

fondo1.style.left=posicion1; //cambiar posición fondol mediante CSS

fondo2.style.left=posicion2; //cambiar posición fondo2

}

function repetir() { //temporizador 2: repetir ciclo

fondo1.style.left="0px"; //posición inicial de fondol

fondo2.style.left="450px"; //posición inicial de fondo2

desplazar=0; //posicion inicial referencia de movimiento.

}