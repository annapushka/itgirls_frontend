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
        this.reateUnputElement = this.element.querySelector('#reate');
        this.typeInput = 'goal';
        this.configure();
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    renderContent() { }
    submitHandler(event) {
        var _a;
        event.preventDefault();
        const userInput = this.getUserInput();
        const goalType = (_a = event.submitter) === null || _a === void 0 ? void 0 : _a.id;
        if (Array.isArray(userInput) && goalType) {
            const [title, desc, reate] = userInput;
            goalsState.addGoal(title, desc, reate, goalType);
            this.clearInputs();
        }
    }
    getUserInput() {
        const validateTitle = {
            value: this.titleUnputElement.value,
            min: 5,
            max: 20
        };
        const validateDescription = {
            value: this.descriptionUnputElement.value,
            min: 5,
            max: 200
        };
        const validateReate = {
            value: +this.reateUnputElement.value,
            min: 1,
            max: 5
        };
        if (!validate(validateTitle) || !validate(validateDescription) || !validate(validateReate)) {
            return alert('Invalid input');
        }
        else {
            const titleInput = this.titleUnputElement.value;
            const descriptionInput = this.descriptionUnputElement.value;
            const reateInput = +this.reateUnputElement.value;
            return [titleInput, descriptionInput, reateInput];
        }
    }
    clearInputs() {
        this.titleUnputElement.value = '';
        this.descriptionUnputElement.value = '';
        this.reateUnputElement.value = '';
    }
}
class GoalsList extends Component {
    constructor(type) {
        super('list', 'app', false, `${type}`);
        this.type = type;
        this.goalsList = [];
        this.configure();
        this.renderContent();
    }
    renderGoal() {
        const listEl = document.getElementById(`${this.type}-list`);
        listEl.innerHTML = '';
        for (const goalItem of this.goalsList.sort((a, b) => a.reate - b.reate)) {
            new GoalItem(`${this.type}-list`, goalItem);
        }
    }
    configure() {
        goalsState.addListener((goals) => {
            const goalsFiltered = goals.filter(goal => {
                if (this.type === 'goal') {
                    return goal.status === GoalStatus.goal;
                }
                return goal.status === GoalStatus.achievement;
            });
            this.goalsList = goalsFiltered;
            this.renderGoal();
        });
    }
    renderContent() {
        const listId = `${this.type}-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type.toLocaleUpperCase();
    }
}
class GoalItem extends Component {
    constructor(hostId, goal) {
        super('single-goal', hostId, false, goal.id);
        this.goal = goal;
        this.configure();
        this.renderContent();
    }
    configure() { }
    renderContent() {
        this.element.querySelector('h2').textContent = this.goal.title;
        this.element.querySelector('p').textContent = this.goal.description;
        this.element.querySelector('h4').textContent = String(this.goal.reate);
    }
}
function validate(validationInput) {
    if (typeof validationInput.value === 'string') {
        if (validationInput.value.length !== 0 && validationInput.value.length > validationInput.min && validationInput.value.length <= validationInput.max) {
            return true;
        }
        else {
            return false;
        }
    }
    if (typeof validationInput.value === 'number') {
        if (validationInput.value && validationInput.value >= validationInput.min && validationInput.value <= validationInput.max) {
            return true;
        }
        else {
            return false;
        }
    }
    return false;
}
var GoalStatus;
(function (GoalStatus) {
    GoalStatus[GoalStatus["goal"] = 0] = "goal";
    GoalStatus[GoalStatus["achievement"] = 1] = "achievement";
})(GoalStatus || (GoalStatus = {}));
class Goal {
    constructor(id, title, description, reate, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.reate = reate;
        this.status = status;
    }
}
class GoalsState {
    constructor() {
        this.listeners = [];
        this.goals = [];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new GoalsState();
        return this.instance;
    }
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
    addGoal(title, description, rate, type) {
        const newGoal = new Goal(Math.random().toString(), title, description, rate, type === 'goal' ? GoalStatus.goal : GoalStatus.achievement);
        this.goals.push(newGoal);
        for (const listenerFn of this.listeners) {
            listenerFn(this.goals.slice());
        }
    }
}
const goalsState = GoalsState.getInstance();
const input = new InputElement();
const goalsList = new GoalsList('goal');
const achievementList = new GoalsList('achievement');
//# sourceMappingURL=app.js.map