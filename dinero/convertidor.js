function convertCurrency() {
    const euros = parseFloat(document.getElementById("euros").value);
    if (!isNaN(euros)) {
        // Puedes cambiar 'EUR' por otra moneda según tus necesidades
        fetch(`https://api.exchangerate-api.com/v4/latest/EUR`)
            .then(response => response.json())
            .then(data => {
                const exchangeRate = data.rates.USD;
                const dollars = euros * exchangeRate;
                document.getElementById("dollars").value = dollars.toFixed(2);
            })
            .catch(error => {
                console.error("Error al obtener la tasa de cambio: " + error);
            });
    } else {
        document.getElementById("dollars").value = "";
    }
}