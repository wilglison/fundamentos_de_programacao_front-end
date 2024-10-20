class Calculator {
    constructor() {
        this.num1 = document.getElementById('num1');
        this.num2 = document.getElementById('num2');
        this.operator = document.getElementById('operator');
        this.resultField = document.getElementById('result');
        this.calculateButton = document.getElementById('calculate');

        this.calculateButton.addEventListener('click', () => this.calculate());
    }

    calculate() {
        const n1 = parseFloat(this.num1.value);
        const n2 = parseFloat(this.num2.value);
        const op = this.operator.value;

        if (isNaN(n1) || isNaN(n2)) {
            this.showError('Por favor, insira números válidos.');
            return;
        }

        let result;
        switch (op) {
            case '+':
                result = n1 + n2;
                break;
            case '-':
                result = n1 - n2;
                break;
            case '*':
                result = n1 * n2;
                break;
            case '/':
                if (n2 === 0) {
                    this.showError('Divisão por zero não é permitida.');
                    return;
                }
                result = n1 / n2;
                break;
        }

        this.resultField.value = result.toFixed(2);
    }

    showError(message) {
        this.resultField.value = message;
        setTimeout(() => {
            this.resultField.value = '';
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});
