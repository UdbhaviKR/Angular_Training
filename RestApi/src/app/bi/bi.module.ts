import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [BarchartComponent, PieChartComponent, DashboardComponent],
  imports: [CommonModule,RouterModule, RouterOutlet, RouterLink ],
  exports:[BarchartComponent, PieChartComponent,DashboardComponent]
})
export class BIModule { }