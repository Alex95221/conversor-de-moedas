function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor digitado
    const currencyValueConverted = document.querySelector(".currency-value") // Valor convertido

    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)
}


const convertButton = document.querySelector(".convert-button");
convertButton.addEventListener("click", convertValues);
// Adiciona evento de tecla para converter ao pressionar Enter