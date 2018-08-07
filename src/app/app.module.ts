import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { PlannerComponent } from './components/planner/planner.component';
import { WeekComponent } from './components/week/week.component';


@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    WeekComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
