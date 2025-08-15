document.addEventListener("DOMContentLoaded", () => {
  const convertButton = document.querySelector(".convert-button");
  const currencyFromSelect = document.querySelector(".currency-from");
  const currencyToSelect = document.querySelector(".currency-to");

  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  const currencyNameFrom = document.querySelector(".currency-name-from");
  const currencyNameTo = document.querySelector(".currency-name-to");

  const currencyImgFrom = document.querySelector(".currency-img-from");
  const currencyImgTo = document.querySelector(".currency-img-to");

  const currencyData = {
    BRL: { name: "Real Brasileiro", img: "./assets/brasil 2.png" },
    USD: { name: "Dólar Americano", img: "./assets/estados-unidos (1) 1.png" },
    EUR: { name: "Euro", img: "./assets/euro.png" },
    GBP: { name: "Libra Esterlina", img: "./assets/libra.png" },
    BTC: { name: "Bitcoin", img: "./assets/bitcoin 1.png" },
  };

  async function convertValues() {
    const from = currencyFromSelect.value;
    const to = currencyToSelect.value;
    const rawValue = document.querySelector(".input-currency").value.trim();
    const amount = parseFloat(rawValue.replace(",", "."));

    if (isNaN(amount)) {
      alert("Digite um valor numérico válido.");
      return;
    }

    // API de conversão
    const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;
    const response = await fetch(url);
    const data = await response.json();

    currencyValueToConvert.textContent = amount.toLocaleString("pt-BR", {
      style: "currency",
      currency: from,
    });

    currencyValueConverted.textContent = data.result.toLocaleString("pt-BR", {
      style: "currency",
      currency: to,
    });
  }

  function updateCurrencyInfo() {
    const from = currencyFromSelect.value;
    const to = currencyToSelect.value;

    currencyNameFrom.textContent = currencyData[from].name;
    currencyImgFrom.src = currencyData[from].img;

    currencyNameTo.textContent = currencyData[to].name;
    currencyImgTo.src = currencyData[to].img;
  }

  currencyFromSelect.addEventListener("change", () => {
    updateCurrencyInfo();
    convertValues();
  });

  currencyToSelect.addEventListener("change", () => {
    updateCurrencyInfo();
    convertValues();
  });

  convertButton.addEventListener("click", convertValues);

  // Inicializa com dados padrão
  updateCurrencyInfo();
});
