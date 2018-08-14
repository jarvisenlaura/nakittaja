import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quotes = [
    'Töihin siitä -Nappaa se nakki!',
    'Koti kiittää kauniisti.', ,
    'Kohta on jo valmista!',
    'Much nakki   !   Wow  !   Very clean',
    'Ei voi siivota jos ei ensin vähän sotketa.',
    'Homma on hyvä aloittaa puhtaalta pöydältä.',
    'Villakoirille kyytiä!'
  ];

  selectedQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];

}