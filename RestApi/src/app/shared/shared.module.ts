import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionalComponent } from './conditional/conditional.component';
import { BrandingComponent } from './styleclass-directive/styleclass-directive.component';
 


@NgModule({
  declarations: [ConditionalComponent, BrandingComponent],
  imports: [
    CommonModule
  ],
  exports:[ConditionalComponent,BrandingComponent]
})
export class SharedModule { }
