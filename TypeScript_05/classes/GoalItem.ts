import { Component } from "./Component";
import { Goal } from "./Goal";


export class GoalItem extends Component < HTMLUListElement, HTMLLIElement > {
    private goal: Goal;

    constructor(hostId: string, goal: Goal) {
        super('single-goal', hostId, false, goal.id);
        this.goal = goal;

        this.configure();
        this.renderContent();
    }

    configure() {}

    renderContent() {
        this.element.querySelector('h2') !.textContent = this.goal.title;
        this.element.querySelector('p') !.textContent = this.goal.description;
        this.element.querySelector('h4') !.textContent = String(this.goal.reate);
    }
}