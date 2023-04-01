"use strict";
// document.addEventListener('DOMContentLoaded', () => {
// })
// Component Base Class
class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }
}
class InputElement extends Component {
    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.titleUnputElement = this.element.querySelector('#title');
        this.descriptionUnputElement = this.element.querySelector('#description');
        this.configure();
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    renderContent() { }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.getUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc] = userInput;
            console.log(title, desc);
            todosState.addTodo(title, desc);
            this.clearInputs();
        }
    }
    getUserInput() {
        const validateTitle = {
            value: this.titleUnputElement.value,
            minLength: 5,
            maxLength: 20
        };
        const validateDescription = {
            value: this.descriptionUnputElement.value,
            minLength: 5,
            maxLength: 200
        };
        if (!validate(validateTitle) || !validate(validateDescription)) {
            return alert('Invalid input');
        }
        else {
            const titleInput = this.titleUnputElement.value;
            const descriptionInput = this.descriptionUnputElement.value;
            return [titleInput, descriptionInput];
        }
    }
    clearInputs() {
        this.titleUnputElement.value = '';
        this.descriptionUnputElement.value = '';
    }
}
class TodosList extends Component {
    constructor(type) {
        super('todo-list', 'app', false, `${type}-todos`);
        this.type = type;
        this.todosList = [];
        this.configure();
        this.renderContent();
    }
    // private renderTodo() {
    //     const listEl = document.getElementById(`${this.type}-todo-list`)! as HTMLUListElement;
    //     listEl.innerHTML = '';
    //     for (const todoItem of this.todosList) {
    //         new TodoItem(this.element.id, todoItem)
    //     }
    // }
    renderTodo() {
        const listEl = document.getElementById(`${this.type}-todo-list`);
        listEl.innerHTML = '';
        for (const todoItem of this.todosList) {
            new TodoItem(`${this.type}-todo-list`, todoItem);
        }
    }
    configure() {
        todosState.addListener((todos) => {
            const todosFiltered = todos.filter(todo => {
                if (this.type === 'active') {
                    return todo.status === TodoStatus.Active;
                }
                return todo.status === TodoStatus.Finished;
            });
            this.todosList = todosFiltered;
            this.renderTodo();
        });
    }
    renderContent() {
        const listId = `${this.type}-todo-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type.toLocaleUpperCase() + ' TODOS';
    }
}
class TodoItem extends Component {
    constructor(hostId, todo) {
        super('single-todo', hostId, false, todo.id);
        this.todo = todo;
        this.configure();
        this.renderContent();
    }
    configure() { }
    renderContent() {
        this.element.querySelector('h2').textContent = this.todo.title;
        this.element.querySelector('p').textContent = this.todo.description;
    }
}
function validate(validationInput) {
    if (validationInput.value.length !== 0 && validationInput.value.length > validationInput.minLength && validationInput.value.length <= validationInput.maxLength) {
        return true;
    }
    else {
        return false;
    }
}
var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["Active"] = 0] = "Active";
    TodoStatus[TodoStatus["Finished"] = 1] = "Finished";
})(TodoStatus || (TodoStatus = {}));
class Todo {
    constructor(id, title, description, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}
class TodosState {
    constructor() {
        this.listeners = [];
        this.todos = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new TodosState();
        return this.instance;
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addTodo(title, description) {
        const newTodo = new Todo(Math.random().toString(), title, description, TodoStatus.Active);
        this.todos.push(newTodo);
        for (const listenerFn of this.listeners) {
            listenerFn(this.todos.slice());
        }
    }
}
const todosState = TodosState.getInstance();
const input = new InputElement();
const activeTodosList = new TodosList('active');
const finishedTodosList = new TodosList('finished');
//# sourceMappingURL=app.js.map