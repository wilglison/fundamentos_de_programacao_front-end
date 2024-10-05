function calcularIdade() {
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));

    if (isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > 2024) {
        let mensagem = "Por favor, insira um ano de nascimento válido entre 1900 e 2024.";
        console.log(mensagem);
        document.body.innerHTML += `<p>${mensagem}</p>`;
        return;
    }

    let idade2024 = 2024 - anoNascimento;
    let resultado = `Quem nasceu em ${anoNascimento} irá completar ${idade2024} anos em 2024.`;

    console.log(resultado);
    document.getElementById('result').innerHTML = resultado;
}

calcularIdade();
