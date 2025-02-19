import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LoadJobsComponent} from './load-jobs/load-jobs.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    LoadJobsComponent
  ]
})
export class DashboardModule { }
