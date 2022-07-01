const badWords = [/viagra/gi, /XXX/gi];
let userName = "";
let avatar = "";
let messages = localStorage.getItem('newMessage') ? JSON.parse(localStorage.getItem('newMessage')) : [];

const messsageData = JSON.parse(localStorage.getItem('newMessage'));

document.addEventListener('DOMContentLoaded', function () {
    let img = localStorage.getItem('ava');
    if (img != 0) {
        document.getElementById('url').value = img;
    }
    let user = localStorage.getItem('name');
    if (user != 0) {
        document.getElementById('autor').value = user;
    }
    if (messsageData != null) {
        messsageData.forEach(m => {
            avatar = localStorage.getItem('ava');
            userName = localStorage.getItem('name');
            generateMessages();
        });
    }
})

function generateMessages() {
    let optionsString = "";
    for (let message of messages) {
        optionsString += `<div class="mt-3 autor"><img src=${avatar}
        alt="avatar"><span>${userName}: </span></div><div><span>${message}</span></div>`;
    }
    document.getElementById('chatBox').innerHTML = optionsString;
}

function addMessage() {
    let text = document.getElementById('newMessage').value;
    for (let i = 0; i <= badWords.length; i++) {
        text = text.replace(badWords[i], "***");
    }
    messages.push(text);
    localStorage.setItem('newMessage', JSON.stringify(messages));
    avatar = document.getElementById('url').value;
    if (localStorage.getItem('ava') == null) {
        localStorage.setItem('ava', avatar);
    }
    userName = document.getElementById('autor').value;
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', userName);
    }
    generateMessages();
    document.getElementById('newMessage').value = "";
}