document.addEventListener("DOMContentLoaded", () => {
  const convertButton = document.querySelector(".convert-button");
  const currencySelect = document.querySelector(".currency-select");

  function convertValues() {
    const rawValue = document.querySelector(".input-currency").value.trim();
    const inputCurrencyValue = parseFloat(rawValue.replace(",", "."));

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.20;
    const euroToday = 6.20;

    if (isNaN(inputCurrencyValue)) {
      alert("Digite um valor numérico válido.");
      return;
    }

    let convertedValue;

    if (currencySelect.value === "dolar") {
      convertedValue = inputCurrencyValue / dolarToday;
      currencyValueConverted.innerHTML = convertedValue.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    } else if (currencySelect.value === "euro") {
      convertedValue = inputCurrencyValue / euroToday;
      currencyValueConverted.innerHTML = convertedValue.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
      });
    }

    currencyValueToConvert.innerHTML = inputCurrencyValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    console.log(`Convertendo para: ${currencySelect.value} | Valor convertido: ${convertedValue}`);
  }

  convertButton.addEventListener("click", convertValues);
});
