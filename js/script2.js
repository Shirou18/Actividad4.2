function fibo() {
    var x = 0;
    var y = 1;
    var z;
    var resultado = "[" + x + "]";
    
    for (i = 0; i < 15; i++) { // Cambié <= por < para obtener 15 números.
        z = x + y; // Calcula el siguiente número de Fibonacci sumando los dos anteriores.
        resultado += ", [" + z + "]";
        x = y; // Actualiza los valores de x y y para el siguiente cálculo.
        y = z;
    } 
    // Actualiza el contenido del párrafo con el resultado
    document.getElementById("resultado").textContent = resultado;
}
// Llama a la función cuando se carga la página
fibo();