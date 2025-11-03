import { Component, OnInit , Input} from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  @Input () product: Product|undefined;
  ngOnInit(): void { }

  onUpdate(data:any){
    if(this.product != undefined)
        this.product.likes=data.count;
    }
}
