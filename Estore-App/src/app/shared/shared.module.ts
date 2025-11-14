import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionalComponent } from './conditional/conditional.component';
 


@NgModule({
  declarations: [ConditionalComponent],
  imports: [
    CommonModule
  ],
  exports:[ConditionalComponent]
})
export class SharedModule { }
