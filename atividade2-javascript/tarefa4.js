function calcularFatorial() {
    let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

    if (isNaN(numero) || numero < 0) {
        let mensagem = "Por favor, insira um número inteiro não-negativo.";
        console.log(mensagem);
        document.getElementById('result').innerHTML = `<p>${mensagem}</p>`;
        return;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    let resultado = `O fatorial de ${numero} é ${fatorial}`;

    console.log(resultado);
    document.getElementById('result').innerHTML = `<p>${resultado}</p>`;
}

calcularFatorial();
