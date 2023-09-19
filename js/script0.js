function mostrarImpares() {
    // Obtener los valores de inicio y fin
    var inicio = parseInt(document.getElementById("inicio").value);
    var fin = parseInt(document.getElementById("fin").value);
    
    // Validar que el inicio sea menor que el fin
    if (inicio >= fin) {
        alert("El valor de inicio debe ser menor que el valor de fin.");
        return;
    }
    var numerosImpares = "";
    
    // Iterar a través del rango y agregar los números impares a la variable
    for (var i = inicio; i <= fin; i++) {
        if (i % 2 !== 0) { // Si es impar
            if (numerosImpares !== "") {
                numerosImpares += ", "; // Agregar una coma y espacio si ya hay números impares en la lista
            }
            numerosImpares += i; // Agregar el número impar a la lista
        }
    }

    // Mostrar los números impares en el elemento con id "resultado"
    document.getElementById("resultado").value = "" + numerosImpares;
}

function limpiarResultado() {
    // Limpiar el contenido de la caja de texto
    document.getElementById("resultado").value = "";
}