import { Component, OnInit } from '@angular/core';
import { Day } from '../../models/day';
import { Task } from '../../models/task';
import { tasksInDays } from '../../models/listOfTasks';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {

  days: Day[] = [];
  currentWeekNumber = 1;

  constructor() { }

  ngOnInit() {
    this.days = this.getDaysData();
  }

  sayHello(){
    alert('hello')
  }

  // TODO: load data from the server
  private getDaysData(): Day[] {
    const result = [];

    const day1 = new Day(1, 'Maanantai', 0);
    const day2 = new Day(1, 'Tiistai', 1);
    const day3 = new Day(1, 'Keskiviikko', 2);
    const day4 = new Day(1, 'Torstai', 3);
    const day5 = new Day(1, 'Perjantai', 4);
    const day6 = new Day(1, 'Lauantai', 5);
    const day7 = new Day(1, 'Sunnuntai', 6);

    //Replace with a for (taskEntry in tasksInDays[day_1]) {day1.tasks.push(new Task(taskEntry.name, taskEntry.done))}
  //  day1.tasks.push(new Task("Koiran aamulenkki + ruoka", false), new Task("Kissan aamupala", false));
  //  day1.tasks=tasksInDays.day_1;
  for (const task of tasksInDays.day_1) {
    day1.tasks.push(task);
  }
    result.push(day1);

    day2.tasks.push(new Task("Kissan aamupala", false));
    result.push(day2);


    day3.tasks.push(new Task("Tiskikone tyhjäksi", false));
    result.push(day3);

    day4.tasks.push(new Task("Kissanhiekka", false));
    result.push(day4);

    day5.tasks.push(new Task("Koiran iltalenkki", false));
    result.push(day5);

    day6.tasks.push(new Task("Pöytä puhtaaksi", false));
    result.push(day6);

    day7.tasks.push(new Task("Tilaa ruokaa viikoksi", false));
    result.push(day7);

    return result;
  }

  quotes = [
    'Töihin siitä -Nappaa se nakki!',
    'Koti kiittää kauniisti.', ,
    'Kohta on jo valmista!',
    'Much nakki      Wow     Very clean',
    'Ei voi siivota jos ei ensin vähän sotketa.',
    'Homma on hyvä aloittaa puhtaalta pöydältä.',
    'Villakoirille kyytiä!'
  ];

  selectedQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];

}