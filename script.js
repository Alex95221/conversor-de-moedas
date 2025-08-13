// Espera o carregamento completo do DOM (a estrutura HTML) antes de executar o código
document.addEventListener("DOMContentLoaded", () => {

  // Seleciona o botão com a classe "convert-button" e guarda na variável convertButton
  const convertButton = document.querySelector(".convert-button");

  // Declara a função que fará a conversão dos valores
  function convertValues() {

    // Seleciona o valor digitado no input com a classe "input-currency" e remove espaços em branco nas extremidades
    const rawValue = document.querySelector(".input-currency").value.trim();

    // Substitui vírgula por ponto no valor digitado para garantir que o parseFloat funcione corretamente, e converte para número decimal
    const inputCurrencyValue = parseFloat(rawValue.replace(",", "."));

    // Seleciona o elemento onde será exibido o valor original em reais
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");

    // Seleciona o elemento onde será exibido o valor convertido em dólar
    const currencyValueConverted = document.querySelector(".currency-value");

    // Define o valor fixo do dólar para a conversão (5,20 reais por dólar)
    const dolarToday = 5.2;

    // Verifica se o valor digitado é um número válido
    if (isNaN(inputCurrencyValue)) {
      // Exibe um alerta pedindo um valor numérico válido
      alert("Digite um valor numérico válido.");
      // Sai da função para não continuar a conversão
      return;
    }

    // Calcula o valor convertido dividindo o valor em reais pelo valor do dólar
    const convertedValue = inputCurrencyValue / dolarToday;

    // Formata o valor original para moeda em Real brasileiro e exibe no elemento correspondente
    currencyValueToConvert.innerHTML = inputCurrencyValue.toLocaleString("pt-BR", {
      style: "currency",   // Formato moeda
      currency: "BRL"      // Real brasileiro
    });

    // Formata o valor convertido para moeda em Dólar americano e exibe no elemento correspondente
    currencyValueConverted.innerHTML = convertedValue.toLocaleString("en-US", {
      style: "currency",   // Formato moeda
      currency: "USD"      // Dólar americano
    });

    // Exibe o valor convertido no console para debug
    console.log(convertedValue);
  }

  // Adiciona um evento que, ao clicar no botão convertButton, executa a função convertValues
  convertButton.addEventListener("click", convertValues);
});
