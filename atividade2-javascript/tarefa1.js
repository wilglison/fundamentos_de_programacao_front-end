function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function calcularMediaAluno() {
    let nomeAluno = prompt("Digite o nome do aluno:");
    let disciplina = prompt("Digite o nome da disciplina:");
    let nota1 = parseFloat(prompt("Digite a nota 1:"));
    let nota2 = parseFloat(prompt("Digite a nota 2:"));
    
    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, insira notas válidas.");
        return;
    }
    
    let media = calcularMedia(nota1, nota2);

    let resultado = `
        <h2>Resultado:</h2>
        <p><strong>Nome do aluno:</strong> ${nomeAluno}</p>
        <p><strong>Disciplina:</strong> ${disciplina}</p>
        <p><strong>Nota 1:</strong> ${nota1.toFixed(2)}</p>
        <p><strong>Nota 2:</strong> ${nota2.toFixed(2)}</p>
        <p><strong>Média:</strong> ${media.toFixed(2)}</p>
    `;

    document.getElementById('result').innerHTML = resultado;
}
calcularMediaAluno();
