import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlannerComponent } from './components/planner/planner.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component'

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'planner', component: PlannerComponent },
    { path: 'settings', component: SettingsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router)