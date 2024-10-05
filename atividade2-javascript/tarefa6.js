function calcularTabuada() {
    let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

    if (isNaN(numero)) {
        let mensagem = "Por favor, insira um número válido.";
        console.log(mensagem);
        document.getElementById('result').innerHTML = `<p>${mensagem}</p>`;
        return;
    }

    let resultado = `<h2>Tabuada do ${numero}:</h2>`;
    for (let i = 1; i <= 10; i++) {
        resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }

    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    document.getElementById('result').innerHTML = resultado;
}

calcularTabuada();