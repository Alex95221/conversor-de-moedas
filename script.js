document.addEventListener("DOMContentLoaded", async () => {
  const inputCurrency = document.querySelector(".input-currency");
  const fromSelect = document.querySelector(".from-select");
  const toSelect = document.querySelector(".currency-select");

  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");
  const currencyName = document.getElementById("currency-name");

  const fromImg = document.querySelector(".from-img");
  const toImg = document.querySelector(".to-img");

  // Caminhos das imagens
  const currencyImages = {
    "R$ Real Brasileiro": "./assets/brasil 2.png",
    "US$ Dólar Americano": "./assets/estados-unidos (1) 1.png",
    "€ Euro": "./assets/euro.png",
    "£ Libra Esterlina": "./assets/libra.png",
    "₿ Bitcoin": "./assets/bitcoin 1.png"
  };

  // Mapeamento para código da moeda (ISO) usado na API
  const currencyCodes = {
    "R$ Real Brasileiro": "BRL",
    "US$ Dólar Americano": "USD",
    "€ Euro": "EUR",
    "£ Libra Esterlina": "GBP",
    "₿ Bitcoin": "BTC"
  };

  // Função para buscar cotação da API
  async function getRate(fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) return 1;

    const fromCode = currencyCodes[fromCurrency];
    const toCode = currencyCodes[toCurrency];

    const url = `https://economia.awesomeapi.com.br/json/last/${fromCode}-${toCode}`;
    const response = await fetch(url);
    const data = await response.json();

    // O objeto vem como {USDBRL: {...}} por exemplo
    const pair = Object.keys(data)[0];
    return parseFloat(data[pair].bid);
  }

  async function convertCurrency() {
    let amount = parseFloat(inputCurrency.value.replace(",", "."));
    if (isNaN(amount)) {
      currencyValueToConvert.textContent = "";
      currencyValueConverted.textContent = "";
      currencyName.textContent = "";
      return;
    }

    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    // Cotação
    const rate = await getRate(fromCurrency, toCurrency);
    const convertedValue = amount * rate;

    // Mostra valores
    currencyValueToConvert.textContent = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: currencyCodes[fromCurrency]
    }).format(amount);

    currencyValueConverted.textContent = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: currencyCodes[toCurrency]
    }).format(convertedValue);

    currencyName.textContent = toCurrency;

    // Atualiza imagens
    fromImg.src = currencyImages[fromCurrency];
    toImg.src = currencyImages[toCurrency];
  }

  // Eventos
  inputCurrency.addEventListener("input", convertCurrency);
  fromSelect.addEventListener("change", convertCurrency);
  toSelect.addEventListener("change", convertCurrency);
});
