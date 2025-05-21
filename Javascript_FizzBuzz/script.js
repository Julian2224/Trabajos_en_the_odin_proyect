
function fizzbuzz() {
    let numInput = parseInt(document.getElementById("numero_usuario").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numInput) || numInput < 1) {
        resultado.innerHTML = "<li>Ingrese un número válido mayor que 0.</li>";
        return;
    }
    
    let numeros = "";
      for (let i = 1; i <= numInput; i++) {
        numeros += i + " ";
      }

    resultado.textContent = numeros.trim();

    
}