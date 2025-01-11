//Test Taget Sistema
//Lucas Spartacus 11/01/2025

const faturamentoMensal  = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const totalFaturamento = Object.values(faturamentoMensal).reduce((accumulator, valor) => accumulator + valor, 0);
  
  function calcularPercentual(valor, total) {
    return ((valor / total) * 100).toFixed(2);
  }
  
  for (let estado in faturamentoMensal) {
    const valor = faturamentoMensal[estado];
    const percentual = calcularPercentual(valor, totalFaturamento);
    console.log(`${estado}: ${percentual}%`);
  }
  