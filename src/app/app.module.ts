import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { PlannerComponent } from './components/planner/planner.component';
import { WeekComponent } from './components/week/week.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    WeekComponent,
    SettingsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
