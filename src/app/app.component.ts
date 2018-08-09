import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NAKITTAJA';

  quotes = [
    'Töihin siitä! Nappaa se nakki!',
    'Koti kiittää huoltajaansa!',, 
    'Kohta on jo valmista!',
    'Much nakki    Wow   Very clean'
  ];
  
  selectedQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
}
