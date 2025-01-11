//Test Taget Sistema
//Lucas Spartacus 11/01/2025

const readline = require('readline');

const input  = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pertenceFibonacci(numero) {
    
    let a = 0, b = 1;

    if (numero < 0) {
        return false;
    }

    if (numero === a || numero === b) {
        return true;
    }

    while (b < numero) {
        let temp = a + b;
        a = b;
        b = temp;

        if (b === numero) {
            return true;
        }
    }

    return false;
}

function verificarFibonacci() {
    input .question('Informe um número: ', (numero) => {
        numero = parseInt(numero);
        
        if (pertenceFibonacci(numero)) {
            console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
        }
        
        input .close(); 
    });
}

verificarFibonacci();
