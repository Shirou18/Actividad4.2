
window.onload = function () {
    visor1 = document.getElementById("visor");
    mititulo = document.getElementById("titulo");
  }
  
  function mifoto(num) {
    f = "img/img" + num + ".png"; // Ubicacion de la imagen
    document.images["fotoVisor"].src = f;//Cambiar la imagen
    t = document.images["fotos" + num].alt; // cambiar texto de pie de foto
    mititulo.innerHTML=t;//cambiar pie de foto
  }
  