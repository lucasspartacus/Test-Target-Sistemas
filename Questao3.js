//Test Taget Sistema
//Lucas Spartacus 11/01/2025

const fs = require('fs');

function carregarDados() {
    const dadosJson = fs.readFileSync('dados.json', 'utf-8');
    return JSON.parse(dadosJson);
}

function calcularMenorEmaior(faturamento) {
    let menor = Infinity;
    let maior = -Infinity;

    faturamento.forEach(dia => {
        if (dia.valor > 0) {  
            if (dia.valor < menor) {
                menor = dia.valor;
            }
            if (dia.valor > maior) {
                maior = dia.valor;
            }
        }
    });

    return { menor, maior };
}

function calcularMediaMensal(faturamento) {
    let soma = 0;
    let diasFaturamento = 0;

    faturamento.forEach(dia => {
        if (dia.valor > 0) {  
            soma += dia.valor;
            diasFaturamento++;
        }
    });

    return soma / diasFaturamento;
}

function contarDiasAcimaDaMedia(faturamento, media) {
    let contador = 0;
    faturamento.forEach(dia => {
        if (dia.valor > media) {
            contador++;
        }
    });
    return contador;
}
function executar() {
    const faturamentoDiario = carregarDados();

    const { menor, maior } = calcularMenorEmaior(faturamentoDiario);
    const mediaMensal = calcularMediaMensal(faturamentoDiario);
    const diasAcimaDaMedia = contarDiasAcimaDaMedia(faturamentoDiario, mediaMensal);


    console.log(`Menor valor de faturamento: R$ ${menor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maior.toFixed(2)}`);
    console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`);
}

executar();
