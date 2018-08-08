import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlannerComponent } from './components/planner/planner.component';
import { WeekComponent } from './components/week/week.component';
import { HomeComponent } from './components/home/home.component'

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'planner', component: PlannerComponent },
    { path: 'week', component: WeekComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router)