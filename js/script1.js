function reverseWord() {
    let entrada = document.getElementById('entrada').value;
    let palabra = entrada.split('').reverse().join('');
    document.getElementById('palabra').textContent = "Palabra al revés: " + palabra;
}