import { GoalStatus } from "../types";

export class Goal {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public reate: number,
        public status: GoalStatus
    ) {}
}