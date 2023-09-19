function Buscar() {
    let valor1 = parseInt(document.getElementById("mes").value);
    let valor2 = parseInt(document.getElementById("año").value);

    // Crear un objeto Date para representar el primer día del mes especificado
    let primerDia = new Date(valor2, valor1 - 1, 1);

    // Crear un objeto Date para representar el último día del mes
    let ultimoDia = new Date(valor2, valor1, 0);

    // Obtener el elemento HTML donde mostrarás las fechas
    let resultado = document.getElementById("texsalida");

    // Limpiar cualquier contenido anterior
    resultado.value = "";

    // Mostrar el primer día en el elemento HTML
    resultado.value += "Primer día del mes: " + primerDia.toDateString() + "\n";

    // Mostrar el último día en el elemento HTML
    resultado.value += "Último día del mes: " + ultimoDia.toDateString();
}