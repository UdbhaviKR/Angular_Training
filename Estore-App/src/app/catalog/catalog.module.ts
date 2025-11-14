import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './products/details/details.component';
import { ListComponent } from './products/list/list.component';
import { CounterComponent } from './products/counter/counter.component';
import { InsertComponent } from './products/insert/insert.component';

@NgModule({
  declarations: [],
  imports: [ CommonModule ,ListComponent,DetailsComponent,CounterComponent,InsertComponent],

  exports: [ ListComponent, InsertComponent]
})
export class CatalogModule { }
