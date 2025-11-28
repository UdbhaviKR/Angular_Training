import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDirective } from './customdirectiveif';
import { HiddenDirective } from './customdirectivehidden';
import { UnderlineDirective } from './customdirectiveunderline';

@NgModule({
  declarations: [IfDirective,HiddenDirective,UnderlineDirective],
  imports: [CommonModule],
  exports:[IfDirective,HiddenDirective,UnderlineDirective]
})
export class CustomModule { }