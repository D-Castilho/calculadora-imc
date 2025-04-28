
alert("Bem-vindo à Calculadora de IMC")

function calcularIMC() {

const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultadoIMC = document.getElementById("resultadoIMC");
    const classificacao = document.getElementById("classificacao");

    const imc = peso / (altura * altura);
    resultadoIMC.textContent = `Seu IMC é: ${imc.toFixed(2)}`;

    let textoClassificacao = "";

    if (imc < 18.5) {
        textoClassificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        textoClassificacao = "Peso normal";
    } else if (imc < 29.9) {
        textoClassificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        textoClassificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
        textoClassificacao = "Obesidade grau 2";
    } else {
        textoClassificacao = "Obesidade grau 3 (mórbida)";
    }

    classificacao.textContent = `Classificação: ${textoClassificacao}`;

    if (imc < 18.5 || imc >= 24.9) {
        classificacao.style.color = "red";
    } else {
        classificacao.style.color = "green";
    }
}