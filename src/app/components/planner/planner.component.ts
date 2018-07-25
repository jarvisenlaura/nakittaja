import { Component, OnInit } from '@angular/core';
import { Day } from '../../models/day';
import { Task } from '../../models/task';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  days: Day[] = [];
  currentWeek = 1;

  constructor() { }

  
  ngOnInit() {
  this.days = this.getDaysData();
  }

  // TODO: load data from the server
  private getDaysData(): Day[] {
    const result = [];

    const day1 = new Day('Monday', 0);
    const day2 = new Day('Tuesday', 1);
    const day3 = new Day('Wednesday', 2);
    const day4 = new Day('Thursday', 3);
    const day5 = new Day('Friday', 4);
    const day6 = new Day('Saturday', 5);
    const day7 = new Day('Sunday', 6);

    day1.tasks.push(new Task(1, "Koiran aamulenkki + ruoka", false));
    result.push(day1);

    day2.tasks.push(new Task(1, "Kissan aamupala", false));
    result.push(day2);


    day3.tasks.push(new Task(1, "Tiskikone tyhjäksi", false));
    result.push(day3);

    day4.tasks.push(new Task(1, "Kissanhiekka", false));
    result.push(day4);

    day5.tasks.push(new Task(1, "Koiran iltalenkki", false));
    result.push(day5);

    day6.tasks.push(new Task(1, "Pöytä tyhjäksi ja puhtaaksi", false));
    result.push(day6);

    day7.tasks.push(new Task(1, "Tilaa ruokaa viikoksi", false));
    result.push(day7);

    return result;
  }
}
