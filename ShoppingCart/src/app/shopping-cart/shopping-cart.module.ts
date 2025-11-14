import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [],
  imports: [CommonModule, CartComponent,ItemComponent],
  exports: [CartComponent,ItemComponent]
})
export class ShoppingCartModule { }
