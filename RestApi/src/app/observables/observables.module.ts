import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { MasterComponent } from './master/master.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MasterComponent, DetailComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [MasterComponent, DetailComponent]
})
export class ObservablesModule { }
