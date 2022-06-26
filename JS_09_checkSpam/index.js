let messages = ["Привет, чем я могу тебе помочь?", ];
let badWords = [/viagra/gi, /XXX/gi];

function generateMessages() {
    let optionsString = "";
    for (let message of messages) {
        optionsString += `<div class="mt-3"><span>${message}</span></div>`;
    }
    document.getElementById("chatBox").innerHTML = optionsString;
}

function addMessage() {
    let text = document.getElementById("newMessage").value;
    for (let i = 0; i <= badWords.length; i++) {
        text = text.replace(badWords[i], "***");
    }
    messages.push(text);
    generateMessages();
    document.getElementById("newMessage").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    generateMessages();
})