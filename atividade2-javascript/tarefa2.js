function contagem() {
    let N = parseInt(prompt("Digite o valor de N para a contagem:"));

    if (isNaN(N) || N <= 0) {
        let mensagem = "Por favor, insira um número inteiro positivo.";
        console.log(mensagem);
        document.getElementById('result').innerHTML = `<p>${mensagem}</p>`;
        return;
    }

    let resultado = `Contagem de 1 até ${N} é `;

    for (let i = 1; i <= N; i++) {
        resultado += i;
        if (i < N) {
            resultado += ", ";
        }
    }

    console.log(resultado);
    document.getElementById('result').innerHTML = `<p>${resultado}</p>`;
}

contagem();