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
    const libraToday = 7.00;

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
    if (currencySelect.value === "libra") {
      convertedValue = inputCurrencyValue / libraToday;
      currencyValueConverted.innerHTML = convertedValue.toLocaleString("en-UK", {
        style: "currency",
        currency: "GBP"
      });
    }

    console.log(`Convertendo para: ${currencySelect.value} | Valor convertido: ${convertedValue}`);


      

  }

   function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");
    if(currencySelect.value === "dolar") {
      currencyName.innerHTML = "Dólar americano";
     currencyImage.src = "./assets/estados-unidos (1) 1.png";

    }
    if(currencySelect.value === "euro") {
      currencyName.innerHTML = "Euro";
      currencyImage.src = "./assets/euro.png";
    } 
    if(currencySelect.value  === "Libra") {
      currencyName.innerHTML = "Libra Esterlina"
      currencyImage.src = "./assets/libra.png"
    }


     
    // Removido código incompleto para evitar erro de expressão esperada.

    convertValues();


   }



  currencySelect.addEventListener("change",  changeCurrency);
  convertButton.addEventListener("click", convertValues);
});
