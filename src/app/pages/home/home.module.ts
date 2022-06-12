import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
