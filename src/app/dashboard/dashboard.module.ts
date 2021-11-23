import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPanelComponent } from './dashboard-panel/dashboard-panel.component';
import { DashboardRoutingModule } from './dashboard-route/dashboard-routing.module';
import { DashboardContentComponent } from './dashboard-panel/dashboard-content/dashboard-content.component';


@NgModule({
  declarations: [
    DashboardPanelComponent,
    DashboardContentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
