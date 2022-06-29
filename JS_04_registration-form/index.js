function check() {
    const name = document.getElementById('exampleInputName');
    const surname = document.getElementById("exampleInputSurname");
    const year = document.getElementById("exampleInputBirthYear");
    const email = document.getElementById("exampleInputEmail1");
    const password = document.getElementById("exampleInputPassword1");
    const password2 = document.getElementById("exampleInputPassword2");
    const password_len = password.value.length;
    const constters = /^[А-Яа-я]+$/;
    const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const year_len = year.value.length;
    let name_result = false;
    let surname_result = false;
    let year_result = false;
    let email_result = false;
    let password_result = false;
    let password2_result = false;
    let passwords_result = false;

    document.getElementById('message').innerHTML = "";

    if (name.value == '' || !name.value.match(constters)) {
        document.getElementById('message').innerHTML += "Введите корректное имя<br>";
    } else {name_result = true;}
    if (surname.value == '' || !name.value.match(constters)) {
        document.getElementById("message").innerHTML += "Введите корректную фамилию<br>";
    } else {surname_result = true;}
    if (year.value == '' || year_len !== 4) {
        document.getElementById("message").innerHTML += "Введите корректный год рождения<br>";
    } else {year_result = true;}
    if (email.value == '' || !email.value.match(mailformat)) {
        document.getElementById("message").innerHTML += "Введите корректную электронную почту<br>";
    } else {email_result = true;}
    if (password.value == '' || password_len >= 20 || password_len < 5) {
        document.getElementById("message").innerHTML += "Пароль должен содержать от 5 до 20 символов<br>";
    } else {password_result = true;}
    if (password2.value == '') {
        document.getElementById("message").innerHTML += "Введите пароль повторно<br>";
    } else {password2_result = true;}
    if (password.value !== password2.value) {
        document.getElementById("message").innerHTML += "Пароли не совпадают<br>";
    }  else {passwords_result = true;}
    
    if (name_result == true && surname_result == true && year_result == true && email_result == true && password_result == true && password2_result == true && passwords_result == true) {
        document.getElementById("message").innerHTML += 'Добро пожаловать, ' + name.value + '!';
    }
}