import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../catalog/models/product';
import { Item } from './models/Item';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: Item[] = [];
  private cartSubject = new BehaviorSubject<Item[]>(this.cartItems);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    const existing = this.cartItems.find(i => i.productId === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      const newItem = new Item(
        product.id,
        product.title,
        product.price,
        1,
        product.imageurl // make sure this matches your Product model key
      );
      this.cartItems.push(newItem);
    }
    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter(i => i.productId !== id);
    this.cartSubject.next([...this.cartItems]);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
  }

  updateQuantity(id: number, qty: number) {
    const item = this.cartItems.find(i => i.productId === id);
    if (item) {
      item.quantity = qty > 0 ? qty : 1;
      this.cartSubject.next([...this.cartItems]);
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}
