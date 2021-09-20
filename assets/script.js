var numeroSecreto = Math.floor(Math.random() * 11);

function Chutar() {
    var tentativa = 0;

    var resultado = document.getElementById("resultado");
    var valor = parseInt(document.getElementById("valor").value);

    if (valor === numeroSecreto) {
        resultado.innerHTML = "Você acertou! Parabéns!";
    } else if (valor < 0 || valor > 10 || NaN) {
        resultado.innerHTML = "Você deve digitar um número entre 0 e 10!";
    } else {
        if (numeroSecreto > valor) {
            tentativa++
            resultado.innerHTML = "Você errou! Tenta um valor maior!";
        } else {
            resultado.innerHTML = "Você errou! Tenta um valor menor!";
            tentativa++
        }
    }
}