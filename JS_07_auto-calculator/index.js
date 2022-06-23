function calculate() {
    const auctionPrice = Number(document.getElementById('inputAuctionPrice').value);
    const auction = Number(document.getElementById('auction').value);
    const shipping_cost = 100000;
    const service_type_coefficient = Number(document.querySelector('input[name="service-type"]:checked').value);
    const fuel_type_coefficient = Number(document.querySelector('input[name="fuel-type"]:checked').value);
    const engineVolume = Number(document.getElementById('engineVolume').value);
    const engineVolume_coefficient = 1.2;
    const capacity = Number(document.getElementById('capacity').value);
    const capacity_coefficient = 0.8;
    const age_coefficient = Number(document.querySelector('input[name="age"]:checked').value);
    const addressee_coefficient = Number(document.querySelector('input[name="addressee"]:checked').value);
    let totaPrice = 0;

    document.getElementById('message').innerHTML = "";

    if (auctionPrice == '' || auctionPrice < 0) {
        document.getElementById('message').innerHTML += "Введите корректную цену на аукционе<br>";
    } else
        totaPrice = auctionPrice + shipping_cost * service_type_coefficient * fuel_type_coefficient * age_coefficient * addressee_coefficient + auction + engineVolume * engineVolume_coefficient + capacity * capacity_coefficient;

    document.getElementById("message").innerHTML += 'Стоимость автомобиля: ' + totaPrice + ' руб.';
}