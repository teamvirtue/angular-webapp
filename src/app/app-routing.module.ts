import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';

import {
  HomeComponent
} from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportsComponent } from './reports/reports.component';
import {HomeDetailsComponent} from './home/home-details/home-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/1', pathMatch: 'full' },
  { path: 'home', redirectTo: '/home/1', pathMatch: 'full' },
  { path: 'home/:id', component: HomeComponent },
  //   children: [
  //     { path: '', redirectTo: '1', pathMatch: 'full' },
  //     { path: 'my-linq', component: HomeDetailsComponent },
  //     { path: 'atrium', component: HomeDetailsComponent },
  //     { path: 'building', component: HomeDetailsComponent },
  //   ]
  // },
  // { path: '**', redirectTo: '/product1', pathMatch: 'full' }
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },
  // { path: 'settings/:id', component: SettingsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
