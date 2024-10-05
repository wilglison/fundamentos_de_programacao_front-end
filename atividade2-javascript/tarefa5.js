function parOuImpar() {
    let numero = parseInt(prompt("Digite um número:"));

    if (isNaN(numero)) {
        let mensagem = "Por favor, insira um número válido.";
        console.log(mensagem);
        document.getElementById('result').innerHTML = `<p>${mensagem}</p>`;
        return;
    }

    let parOuImpar = numero % 2 === 0 ? "par" : "ímpar";
    let resultado = `O número ${numero} que foi digitado é ${parOuImpar}!`;

    console.log(resultado);
    document.getElementById('result').innerHTML = `<p>${resultado}</p>`;
}

parOuImpar();
