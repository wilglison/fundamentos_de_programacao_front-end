class IMCCalculator {
    constructor() {
        this.form = document.getElementById('imc-form');
        this.alturaInput = document.getElementById('altura');
        this.pesoInput = document.getElementById('peso');
        this.resultadoDiv = document.getElementById('resultado');
        this.imcValorSpan = document.getElementById('imc-valor');
        this.situacaoSpan = document.getElementById('situacao');
        this.grauObesidadeSpan = document.getElementById('grau-obesidade');
        this.tabelaIMCDiv = document.getElementById('tabela-imc');
        
        this.form.addEventListener('submit', this.calcularIMC.bind(this));
        this.form.addEventListener('reset', this.limparResultados.bind(this));
        
        this.preencherTabelaIMC();
    }

    calcularIMC(event) {
        event.preventDefault();
        
        const altura = parseFloat(this.alturaInput.value.replace(',', '.'));
        const peso = parseFloat(this.pesoInput.value.replace(',', '.'));
        
        if (this.validarEntradas(altura, peso)) {
            const imc = peso / (altura * altura);
            const { situacao, grauObesidade } = this.classificarIMC(imc);
            
            this.exibirResultados(imc, situacao, grauObesidade);
        }
    }

    validarEntradas(altura, peso) {
        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            alert('Por favor, insira valores válidos para altura e peso.');
            return false;
        }
        if (altura < 0.5 || altura > 2.5) {
            alert('Por favor, insira uma altura entre 0.5m e 2.5m.');
            return false;
        }
        if (peso < 20 || peso > 500) {
            alert('Por favor, insira um peso entre 20kg e 500kg.');
            return false;
        }
        return true;
    }
    
    classificarIMC(imc) {
        if (imc < 16) return { situacao: 'Magreza grave', grauObesidade: '0' };
        if (imc < 17) return { situacao: 'Magreza moderada', grauObesidade: '0' };
        if (imc < 18.5) return { situacao: 'Magreza leve', grauObesidade: '0' };
        if (imc < 25) return { situacao: 'Saudável', grauObesidade: '0' };
        if (imc < 30) return { situacao: 'Sobrepeso', grauObesidade: '0' };
        if (imc < 35) return { situacao: 'Obesidade Grau I', grauObesidade: 'I' };
        if (imc < 40) return { situacao: 'Obesidade Grau II (severa)', grauObesidade: 'II' };
        return { situacao: 'Obesidade Grau III (mórbida)', grauObesidade: 'III' };
    }

    exibirResultados(imc, situacao, grauObesidade) {
        this.imcValorSpan.textContent = imc.toFixed(2);
        this.situacaoSpan.textContent = situacao;
        this.grauObesidadeSpan.textContent = grauObesidade;
        this.resultadoDiv.classList.remove('hidden');
        this.tabelaIMCDiv.classList.remove('hidden');
    }

    limparResultados() {
        this.resultadoDiv.classList.add('hidden');
        this.tabelaIMCDiv.classList.add('hidden');
    }

    preencherTabelaIMC() {
        const tabelaBody = this.tabelaIMCDiv.querySelector('tbody');
        const classificacoes = [
            { imc: 'Menor que 16', situacao: 'Magreza grave'},
            { imc: '16 a 16,9', situacao: 'Magreza moderada'},
            { imc: '17 a 18,4', situacao: 'Magreza leve'},
            { imc: '18,5 a 24,9', situacao: 'Saudável'},
            { imc: '25 a 29,9', situacao: 'Sobrepeso'},
            { imc: '30 a 34,9', situacao: 'Obesidade Grau I'},
            { imc: '35 a 39,9', situacao: 'Obesidade Grau II (severa)'},
            { imc: '40 ou maior', situacao: 'Obesidade Grau III (mórbida)'}
        ];

        classificacoes.forEach(({ imc, situacao }) => {
            const row = tabelaBody.insertRow();
            row.insertCell(0).textContent = imc;
            row.insertCell(1).textContent = situacao;
        });
    }
}

new IMCCalculator();
