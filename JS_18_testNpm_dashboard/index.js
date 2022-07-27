const chart = require('chart.js');
const moment = require('moment');
const datepicker = require('js-datepicker');

const form = document.querySelector('.newTask__form');
const userForm = document.querySelector('.newUser__form');
const taskList = document.querySelector('.taskList');
let tasksArr = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
let i = tasksArr.length;



class Task {
    constructor(task, date, time) {
        this.task = task;
        this.date = date;
        this.time = time;
    }
}

class User {
    constructor(name, location, ava) {
        this.name = name;
        this.location = location;
        this.ava = ava;
    }
}

class TaskPerMonth {
    constructor(month, num) {
        this.month = month;
        this.num = num;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('user') !== null) {
        const user = JSON.parse(localStorage.getItem('user'));
        document.querySelector('.profile__userName').textContent = user.name;
        document.querySelector('.profile__userLocation').textContent = user.location;
        document.querySelector('.profile__img').src = user.ava;
    }
    if (localStorage.getItem('tasks') !== null) {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        let j = 0;
        for (let task of tasks) {
            document.querySelector('.taskList').innerHTML += ` <div class="tackList__item" id="item">
                <div class="taskList__date" id="dateDash">${task.date} </div>
                <div class="taskList__time" id="timeDash">${task.time} </div>
                <div class="taskList__text" id="taskDash">${task.task} </div>
                <button type="button" class="btn-close btn-close_mini" data-bs-dismiss="modal" aria-label="Close" id="delete"></button>
            </div>`
        }
    }
    getChart();
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const task = document.querySelector('#task').value;
    const date = moment(document.querySelector('#date').value).format('ll');
    const time = document.querySelector('#time').value;
    document.querySelector('.taskList').innerHTML += ` <div class="tackList__item" id="item">
            <div class="taskList__date" id="dateDash">${date} </div>
            <div class="taskList__time" id="timeDash">${time} </div>
            <div class="taskList__text" id="taskDash">${task} </div>
            <button type="button" class="btn-close btn-close_mini" data-bs-dismiss="modal" aria-label="Close" id="delete"></button>
        </div>`
    let newTask = new Task(task, date, time);
    tasksArr[i] = newTask;
    i++;
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
    task.value = '';
    date.value = '';
    time.value = '';
})

userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const location = document.querySelector('#location').value;
    const ava = document.querySelector('#ava').value;
    document.querySelector('.profile__userName').textContent = name;
    document.querySelector('.profile__userLocation').textContent = location;
    document.querySelector('.profile__img').src = ava;
    let newUser = new User(name, location, ava);

    console.log(newUser);

    localStorage.setItem('user', JSON.stringify(newUser));
    console.log(JSON.parse(localStorage.getItem('user')));
})

taskList.onclick = function (event) {
    event.target.parentElement.remove();
    event.stopPropagation();
    for (let key in tasksArr) {
        const text = event.target.parentElement.children[2].innerText;
        if (text.includes(tasksArr[key].task)) {
            tasksArr.splice(key, 1);
            break;
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
}

function getChart() {
    let taskPerMonthArr = [];
    let months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const data = JSON.parse(localStorage.getItem('tasks'));
    console.log(data);

    if(data) {
        for (let month of months) {
            let sum = 0;
            for (let task of data) {
                if (task.date.includes(month)) {
                    sum++;
                }
            }
            let taskPerMonth = new TaskPerMonth(month, sum);
            taskPerMonthArr.push(taskPerMonth);
        }
    
        let labels = taskPerMonthArr.map(function (e) {
            return e.month;
        });
        let info = taskPerMonthArr.map(function (e) {
            return e.num;
        });
    
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'my activity',
                    data: info,
                    backgroundColor: '#ff715e42',
                    borderColor: '#ff725e',
                    borderWidth: 3,
                    radius: 4,
                }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0.5
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    }
    
}