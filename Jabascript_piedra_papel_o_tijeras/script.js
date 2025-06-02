function piedra() {
  let numerosRandom = Math.floor(Math.random() * 3);
  let resultado = document.getElementById("resultado");
  if (numerosRandom == 0) {
    numerosRandom = "Aplicacion seleccionó piedra por lo tanto es empate";
  }
  else if (numerosRandom == 1) {
    numerosRandom = "Aplicacion seleccionó palel por lo tanto perdiste";
  }
  if (numerosRandom == 2) {
    numerosRandom = "Aplicacion seleccionó tijera por lo tanto ganaste";
  }

  resultado.textContent = numerosRandom.trim();
}
function papel() {
  let numerosRandom = Math.floor(Math.random() * 3);
  let resultado = document.getElementById("resultado");
  if (numerosRandom == 0) {
    numerosRandom = "Aplicacion seleccionó piedra por lo tanto ganaste";
  }
  else if (numerosRandom == 1) {
    numerosRandom = "Aplicacion seleccionó palel por lo tanto es empate";
  }
  if (numerosRandom == 2) {
    numerosRandom = "Aplicacion seleccionó tijera por lo tanto perdiste";
  }

  resultado.textContent = numerosRandom.trim();
}
function tijera() {
  let numerosRandom = Math.floor(Math.random() * 3);
  let resultado = document.getElementById("resultado");
  if (numerosRandom == 0) {
    numerosRandom = "Aplicacion seleccionó piedra por lo tanto perdiste";
  }
  else if (numerosRandom == 1) {
    numerosRandom = "Aplicacion seleccionó palel por lo tanto ganaste";
  }
  if (numerosRandom == 2) {
    numerosRandom = "Aplicacion seleccionó tijera por lo tanto es empate";
  }

  resultado.textContent = numerosRandom.trim();
}
