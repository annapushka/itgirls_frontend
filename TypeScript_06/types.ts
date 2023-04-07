import { Goal } from "./classes/Goal";

export interface Validation {
    value: string | number;
    min: number;
    max: number;
}

export enum GoalStatus {
    goal,
    achievement
}

// Goals State Management
export type Listener = (items: Goal[]) => void;