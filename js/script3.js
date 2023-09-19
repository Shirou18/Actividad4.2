function Palindromo() {
    let entrada = document.getElementById('entrada').value;
    let reverso = entrada.split('').reverse().join('');
    let palindromo = entrada === reverso;
    
    if (palindromo) {
        document.getElementById('Resultado').textContent = "Es un palíndromo.";
    } else {
        document.getElementById('Resultado').textContent = "No es un palíndromo.";
    }
}
