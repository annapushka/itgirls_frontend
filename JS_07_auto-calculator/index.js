function calculate() {
    let auctionPrice = Number(document.getElementById('inputAuctionPrice').value);
    let auction = Number(document.getElementById('auction').value);
    let shipping_cost = 100000;
    let service_type_coefficient = Number(document.querySelector('input[name="service-type"]:checked').value);
    let fuel_type_coefficient = Number(document.querySelector('input[name="fuel-type"]:checked').value);
    let engineVolume = Number(document.getElementById('engineVolume').value);
    let engineVolume_coefficient = 1.2;
    let capacity = Number(document.getElementById('capacity').value);
    let capacity_coefficient = 0.8;
    let age_coefficient = Number(document.querySelector('input[name="age"]:checked').value);
    let addressee_coefficient = Number(document.querySelector('input[name="addressee"]:checked').value);
    let totaPrice = 0;

    document.getElementById('message').innerHTML = "";

    if (auctionPrice == '' || auctionPrice < 0) {
        document.getElementById('message').innerHTML += "Введите корректную цену на аукционе<br>";
    } else
        totaPrice = auctionPrice + shipping_cost * service_type_coefficient * fuel_type_coefficient * age_coefficient * addressee_coefficient + auction + engineVolume * engineVolume_coefficient + capacity * capacity_coefficient;

    document.getElementById("message").innerHTML += 'Стоимость автомобиля: ' + totaPrice + ' руб.';
}