function sumar() {
    let numero1 = parseFloat(document.getElementById("Num1").value);
    let numero2 = parseFloat(document.getElementById("Num2").value);
    document.getElementById("resultado").innerText = "Resultado: " + (numero1 + numero2);
}
function add7() {
    let numero7 = parseFloat(document.getElementById("Num7").value);
    document.getElementById("resultado").innerText = "Resultado: " + (numero7 + 7);
}
function multiply() {
    let numero1 = parseFloat(document.getElementById("Num1").value);
    let numero2 = parseFloat(document.getElementById("Num2").value);
    document.getElementById("resultado").innerText = "Resultado: " + (numero1 * numero2);
}
function capitalize() {
    const texto = document.getElementById("texMayuscula").value.trim();
    if (texto.length === 0) {
        document.getElementById("resultado").innerText = "";
        return;
    }
    const capitalizado = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    document.getElementById("resultado").innerText = capitalizado;
}
function lastLetter() {
    const texto = document.getElementById("ultimaLetra").value;
    const fintext = texto.charAt(texto.length - 1);
    document.getElementById("resultado").innerText = fintext;
}
