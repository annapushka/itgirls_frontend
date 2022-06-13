function check() {
    let name = document.getElementById('exampleInputName');
    let surname = document.getElementById("exampleInputSurname");
    let year = document.getElementById("exampleInputBirthYear");
    let email = document.getElementById("exampleInputEmail1");
    let password = document.getElementById("exampleInputPassword1");
    let password2 = document.getElementById("exampleInputPassword2");
    let password_len = password.value.length;
    let letters = /^[А-Яа-я]+$/;
    let mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let year_len = year.value.length;

    document.getElementById('message').innerHTML += "";

    if (name.value == '' || !name.value.match(letters)) {
        document.getElementById('message').innerHTML += "Введите корректное имя<br>";
    } else if (surname.value == '' || !name.value.match(letters)) {
        document.getElementById("message").innerHTML += "Введите корректную фамилию<br>";
    } else if (year.value == '' || year_len !== 4) {
        document.getElementById("message").innerHTML += "Введите корректный год рождения<br>";
    } else if (email.value == '' || !email.value.match(mailformat)) {
        document.getElementById("message").innerHTML += "Введите корректную электронную почту<br>";
    } else if (password.value == '' || password_len >= 20 || password_len < 5) {
        document.getElementById("message").innerHTML += "Пароль должен содержать от 5 до 20 символов<br>";
    } else if (password2.value == '') {
        document.getElementById("message").innerHTML += "Введите пароль повторно<br>";
    } else if (password.value !== password2.value) {
        document.getElementById("message").innerHTML += "Пароли не совпадают<br>";
    } 
    else {
        document.getElementById("message").innerHTML += 'Добро пожаловать, ' + name.value + '!';
    }
}