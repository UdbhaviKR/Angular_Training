import { Component, OnInit , Input} from '@angular/core';

import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input () product: Product|undefined;


//Clean Code Strategy
  // DRY
  // KISS
  // SOLID


  //Event listener, Action listener, Event handler,

  //Callback function

  onUpdate(data:any){
    if(this.product != undefined)
        this.product.likes=data.count;
    }
}
