function nameNormalizer() {

    const fullName = document.getElementById('name').value;
    const array = fullName.trim().split(" ");
    let surname = array[0].toLowerCase();
    let name = array[1].toLowerCase();
    let lastName = array[2].toLowerCase();
    surname = surname[0].toUpperCase() + surname.slice(1);
    name = name[0].toUpperCase() + name.slice(1);
    lastName = lastName[0].toUpperCase() + lastName.slice(1);

    alert(`Фамилия: ${surname}, Имя: ${name}, Отчество: ${lastName}`);
}