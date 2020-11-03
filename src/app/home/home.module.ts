import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { FarmListComponent } from './farm-list/farm-list.component';
import { FarmDashboardComponent } from './farm-dashboard/farm-dashboard.component';


@NgModule({
  declarations: [HomeComponent, FarmListComponent, FarmDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
