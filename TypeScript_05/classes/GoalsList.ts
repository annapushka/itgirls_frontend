import { Component } from "./Component";
import { GoalItem } from "./GoalItem";
import { GoalStatus } from "../types";
import { Goal } from "./Goal";
import { goalsState } from "./GoalsState";

export class GoalsList extends Component < HTMLDivElement, HTMLElement > {
    goalsList: Goal[];

    constructor(private type: 'goal' | 'achievement') {
        super('list', 'app', false, `${type}`);
        this.goalsList = [];

        this.configure();
        this.renderContent();
    }


    private renderGoal() {
        const listEl = document.getElementById(`${this.type}-list`) !as HTMLUListElement;
        listEl.innerHTML = '';
        for (const goalItem of this.goalsList.sort((a, b) => a.reate - b.reate)) {
            new GoalItem(`${this.type}-list`, goalItem)
        }
    }


    configure() {
        goalsState.addListener((goals: Goal[]) => {
            const goalsFiltered = goals.filter(goal => {
                if (this.type === 'goal') {
                    return goal.status === GoalStatus.goal
                }
                return goal.status === GoalStatus.achievement
            });
            this.goalsList = goalsFiltered;
            this.renderGoal();
        });
    }

    renderContent() {
        const listId = `${this.type}-list`;
        this.element.querySelector('ul') !.id = listId;
        this.element.querySelector('h2') !.textContent = this.type.toLocaleUpperCase();
    }

}