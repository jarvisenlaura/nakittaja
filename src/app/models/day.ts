import { Task } from './task';

export class Day {
    tasks: Task[] = [];

    constructor(
        public weekNumber: number, 
        public name: string, 
        index: number){}
}
