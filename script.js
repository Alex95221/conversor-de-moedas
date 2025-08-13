document.addEventListener("DOMContentLoaded", () => {
  const convertButton = document.querySelector(".convert-button");

  function convertValues() {
    const rawValue = document.querySelector(".input-currency").value.trim();
    
    // Troca vírgula por ponto e converte para número
    const inputCurrencyValue = parseFloat(rawValue.replace(",", "."));

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.2; // valor fixo para teste

    // Verifica se é número
    if (isNaN(inputCurrencyValue)) {
      alert("Digite um valor numérico válido.");
      return;
    }

    const convertedValue = inputCurrencyValue / dolarToday;

    // Formata como moeda
    currencyValueToConvert.innerHTML = inputCurrencyValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
    currencyValueConverted.innerHTML = convertedValue.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    console.log(convertedValue);
  }

  convertButton.addEventListener("click", convertValues);
});
