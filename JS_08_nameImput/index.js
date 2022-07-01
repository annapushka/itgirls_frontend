function nameNormalizer() {

    const fullName = document.getElementById('name').value;
    const array = fullName.trim().split(" ");
    let surname = array[0].toLowerCase();
    let name = array[1].toLowerCase();
    let lastName = array[2].toLowerCase();

    alert(`Фамилия: ${corrector(surname)}, Имя: ${corrector(name)}, Отчество: ${corrector(lastName)}`);
}

function corrector(str) {
    return str[0].toUpperCase() + str.slice(1);
}