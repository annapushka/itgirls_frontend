document.addEventListener("DOMContentLoaded", function (event) {
    getCurrentBitcoinPrice();
});

function getCurrentBitcoinPrice() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(currentPrice => {
            console.log(currentPrice);
            document.getElementById('code_USD').innerText = currentPrice.bpi.USD.code;
            document.getElementById('rate_USD').innerText = currentPrice.bpi.USD.rate;
            document.getElementById('code_GBP').innerText = currentPrice.bpi.GBP.code;
            document.getElementById('rate_GBP').innerText = currentPrice.bpi.GBP.rate;
            document.getElementById('code_EUR').innerText = currentPrice.bpi.EUR.code;
            document.getElementById('rate_EUR').innerText = currentPrice.bpi.EUR.rate;
            document.getElementById('time_UK').innerText = currentPrice.time.updateduk;
            document.getElementById('bitcoin').innerText = currentPrice.chartName;
        })
        .catch(err => console.log(err));
}