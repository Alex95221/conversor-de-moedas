// Aguarda o carregamento completo do HTML antes de executar o código
document.addEventListener("DOMContentLoaded", () => {

  // Seletores dos elementos principais
  const inputCurrency = document.querySelector(".input-currency"); // Campo para digitar o valor
  const fromSelect = document.querySelector(".from-select");       // Select da moeda de origem
  const toSelect = document.querySelector(".currency-select");     // Select da moeda de destino

  // Seletores dos elementos de exibição
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor original digitado
  const currencyValueConverted = document.querySelector(".currency-value");            // Valor convertido
  const currencyName = document.getElementById("currency-name");                       // Nome da moeda de destino

  // Seletores das imagens das moedas
  const fromImg = document.querySelector(".from-img"); // Imagem da moeda de origem
  const toImg = document.querySelector(".to-img");     // Imagem da moeda de destino

  // Valores de câmbio em relação ao Real Brasileiro
  const exchangeRates = {
    "R$ Real Brasileiro": 1,           // 1 real = 1 real
    "US$ Dólar Americano": 5.0,        // 1 dólar = 5 reais
    "€ Euro": 5.5,                     // 1 euro = 5,50 reais
    "£ Libra Esterlina": 6.0,          // 1 libra = 6 reais
    "₿ Bitcoin": 140000.0              // 1 bitcoin = 140.000 reais
  };

  // Caminhos das imagens de cada moeda
  const currencyImages = {
    "R$ Real Brasileiro": "./assets/brasil 2.png",
    "US$ Dólar Americano": "./assets/estados-unidos (1) 1.png",
    "€ Euro": "./assets/euro.png",
    "£ Libra Esterlina": "./assets/libra.png",
    "₿ Bitcoin": "./assets/bitcoin 1.png"
  };

  // Função que realiza a conversão
  function convertCurrency() {

    // Pega o valor digitado, substitui vírgula por ponto e converte para número
    let amount = parseFloat(inputCurrency.value.replace(",", "."));

    // Se não for um número válido, limpa a tela e sai da função
    if (isNaN(amount)) {
      currencyValueToConvert.textContent = "";
      currencyValueConverted.textContent = "";
      currencyName.textContent = "";
      return;
    }

    // Pega a moeda de origem e destino selecionadas
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    // Converte para reais primeiro
    const valueInReal = amount * exchangeRates[fromCurrency];

    // Depois converte de reais para a moeda de destino
    const convertedValue = valueInReal / exchangeRates[toCurrency];

    // Mostra o valor original formatado
    currencyValueToConvert.textContent = `${fromCurrency} ${amount.toFixed(2)}`;

    // Define o símbolo da moeda de destino
    let symbol = "";
    switch (toCurrency) {
      case "US$ Dólar Americano": symbol = "US$"; break;
      case "€ Euro": symbol = "€"; break;
      case "£ Libra Esterlina": symbol = "£"; break;
      case "₿ Bitcoin": symbol = "₿"; break;
      default: symbol = "R$"; // Caso seja real
    }

    // Mostra o valor convertido e o nome da moeda de destino
    currencyValueConverted.textContent = `${symbol} ${convertedValue.toFixed(2)}`;
    currencyName.textContent = toCurrency;

    // Atualiza as imagens das moedas
    fromImg.src = currencyImages[fromCurrency];
    toImg.src = currencyImages[toCurrency];
  }

  // Dispara a conversão automaticamente quando:
  // - O usuário digita no campo
  // - Ou muda a moeda de origem
  // - Ou muda a moeda de destino
  inputCurrency.addEventListener("input", convertCurrency);
  fromSelect.addEventListener("change", convertCurrency);
  toSelect.addEventListener("change", convertCurrency);

}); // Fim do DOMContentLoaded
// Fim do script.js
// Este script realiza a conversão de moedas com base em valores fixos