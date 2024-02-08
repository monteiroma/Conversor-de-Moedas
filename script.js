function converterMoeda(tipoMoeda) {
    var valor = document.getElementById('valorMoeda').value;
    var cotacaoDoDolar = 4.91;
    var cotacaoDoEuro = 5.25;
    var cotacaoDoBitcoin = 1790671; // Substitua pelo valor real da cotaçao atual as moedas 

    var valorEmRealDolar = (valor * cotacaoDoDolar).toFixed(2);
    var valorEmRealEuro = (valor * cotacaoDoEuro).toFixed(2);
    var valorEmRealBitcoin = (valor * cotacaoDoBitcoin).toFixed(2);

    if (tipoMoeda === 'dolar') {
        document.getElementById('resultado').innerHTML = "Olá caro usuário, a conversão em Reais fica em R$" +
            valorEmRealDolar + " para Dólar.";
    } else if (tipoMoeda === 'euro') {
        document.getElementById('resultado').innerHTML = "Olá caro usuário, a conversão em Reais fica em R$" +
            valorEmRealEuro + " para Euro.";
    } else if (tipoMoeda === 'bitcoin') {
        document.getElementById('resultado').innerHTML = "Olá caro usuário, a conversão em Reais fica em R$" +
            valorEmRealBitcoin + " para Bitcoin.";
    }
}