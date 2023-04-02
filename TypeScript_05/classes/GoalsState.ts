import { GoalStatus } from "../types";
import { Goal } from "./Goal";

export class GoalsState {
    private listeners: any[] = [];
    private goals: any[] = [];
    private static instance: GoalsState;

    private constructor() {}

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new GoalsState();
        return this.instance;
    }

    addListener(listenerFn: Function) {
        this.listeners.push(listenerFn);
    }

    addGoal(title: string, description: string, rate: number, type: string) {
        const newGoal = new Goal(
            Math.random().toString(),
            title,
            description,
            rate,
            type === 'goal' ? GoalStatus.goal : GoalStatus.achievement

        );
        this.goals.push(newGoal);
        for (const listenerFn of this.listeners) {
            listenerFn(this.goals.slice());
        }
    }
}

export const goalsState = GoalsState.getInstance();
