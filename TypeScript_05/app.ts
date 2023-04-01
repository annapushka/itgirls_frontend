// document.addEventListener('DOMContentLoaded', () => {

// })

// Component Base Class
abstract class Component < T extends HTMLElement, U extends HTMLElement > {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(
        templateId: string,
        hostElementId: string,
        insertAtStart: boolean,
        newElementId ? : string
    ) {
        this.templateElement = document.getElementById(
            templateId
        ) !as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId) !as T;

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as U;
        if (newElementId) {
            this.element.id = newElementId;
        }

        this.attach(insertAtStart);
    }

    private attach(insertAtBeginning: boolean) {
        this.hostElement.insertAdjacentElement(
            insertAtBeginning ? 'afterbegin' : 'beforeend',
            this.element
        );
    }

    abstract configure(): void;
    abstract renderContent(): void;
}

class InputElement extends Component < HTMLDivElement, HTMLFormElement > {

    titleUnputElement: HTMLInputElement;
    descriptionUnputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.titleUnputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionUnputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.configure();
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    renderContent(): void {}

    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.getUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc] = userInput;
            console.log(title, desc);
            todosState.addTodo(title, desc);
            this.clearInputs();
        }
    }

    private getUserInput(): [string, string] | void {
        const validateTitle: Validation = {
            value: this.titleUnputElement.value,
            minLength: 5,
            maxLength: 20
        }
        const validateDescription: Validation = {
            value: this.descriptionUnputElement.value,
            minLength: 5,
            maxLength: 200
        }
        if (!validate(validateTitle) || !validate(validateDescription)) {
            return alert('Invalid input')
        } else {
            const titleInput = this.titleUnputElement.value;
            const descriptionInput = this.descriptionUnputElement.value;
            return [titleInput, descriptionInput];
        }

    }
    private clearInputs() {
        this.titleUnputElement.value = '';
        this.descriptionUnputElement.value = '';
    }
}


class TodosList extends Component < HTMLDivElement, HTMLElement > {
    todosList: Todo[];

    constructor(private type: 'active' | 'finished') {
        super('todo-list', 'app', false, `${type}-todos`);
        this.todosList = [];

        this.configure();
        this.renderContent();
    }


    private renderTodo() {
        const listEl = document.getElementById(`${this.type}-todo-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        for (const todoItem of this.todosList) {
            new TodoItem(`${this.type}-todo-list`, todoItem)
        }
    }


    configure() {
        todosState.addListener((todos: Todo[]) => {
            const todosFiltered = todos.filter(todo => {
                if (this.type === 'active') {
                    return todo.status === TodoStatus.Active
                }
                return todo.status === TodoStatus.Finished
            });
            this.todosList = todosFiltered;
            this.renderTodo();
        });
    }

    renderContent() {
        const listId = `${this.type}-todo-list`;
        this.element.querySelector('ul') !.id = listId;
        this.element.querySelector('h2') !.textContent = this.type.toLocaleUpperCase() + ' TODOS';
    }

}


class TodoItem extends Component < HTMLUListElement, HTMLLIElement > {
    private todo: Todo;

    constructor(hostId: string, todo: Todo) {
        super('single-todo', hostId, false, todo.id);
        this.todo = todo;

        this.configure();
        this.renderContent();
    }

    configure() {}

    renderContent() {
        this.element.querySelector('h2') !.textContent = this.todo.title;
        this.element.querySelector('p') !.textContent = this.todo.description;
    }
}

interface Validation {
    value: String;
    minLength: number;
    maxLength: number;
}

type ValidationFuncion = (validationInput: Validation) => boolean

function validate(validationInput: Validation): boolean {
    if (validationInput.value.length !== 0 && validationInput.value.length > validationInput.minLength && validationInput.value.length <= validationInput.maxLength) {
        return true
    } else {
        return false
    }
}

enum TodoStatus {
    Active,
    Finished
}

class Todo {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public status: TodoStatus
    ) {}
}

// Todos State Management
type Listener = (items: Todo[]) => void;


class TodosState {
    private listeners: any[] = [];
    private todos: any[] = [];
    private static instance: TodosState;

    private constructor() {}

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new TodosState();
        return this.instance;
    }

    addListener(listenerFn: Function) {
        this.listeners.push(listenerFn);
    }

    addTodo(title: string, description: string) {
        const newTodo = new Todo(
            Math.random().toString(),
            title,
            description,
            TodoStatus.Active

        );
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
