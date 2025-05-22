
function fizzbuzz() {
    let numInput = parseInt(document.getElementById("numero_usuario").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numInput) || numInput < 1) {
        resultado.innerHTML = "<li>Ingrese un numero valido mayor que 0.</li>";
        return;
    }
    
    let numeros = "";
      for (let i = 1; i <= numInput; i++) {
        if (i % 3 == 0 && i % 5 === 0){
          numeros += "FizzBuzz ";
        }
        else if (i % 3 == 0){
          numeros += "Fizz ";
        }
        else if (i % 5 === 0){
          numeros += "Buzz "
        }
        else{
          numeros += i + " ";
        }
        
      }

    resultado.textContent = numeros.trim();

    
}