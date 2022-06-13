const dark = document.getElementById('dark');
const blue = document.getElementById('blue');
const white = document.getElementById('white');

dark.onclick = function () {
    document.body.style.backgroundColor = '#646366';
}

blue.onclick = function () {
    document.body.style.backgroundColor = '#4402fa';
}

white.onclick = function () {
    document.body.style.backgroundColor = '#efebfa';
}