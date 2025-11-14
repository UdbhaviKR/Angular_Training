import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Item as CartItem } from './models/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'shoppingCart';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private initStorage() {
    if (this.isBrowser && !sessionStorage.getItem(this.storageKey)) {
      sessionStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  addToCart(item: CartItem): void {
    if (!this.isBrowser) return;
    this.initStorage();

    const items = this.getCartItems();
    items.push(item);
    this.saveCart(items);
  }

  getCartItems(): CartItem[] {
    if (!this.isBrowser) return [];
    this.initStorage();

    const data = sessionStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  updateQuantity(productId: number, quantity: number): void {
    if (!this.isBrowser) return;
    this.initStorage();

    const items = this.getCartItems();
    const index = items.findIndex(x => x.productId === productId);
    if (index !== -1) {
      items[index].quantity = quantity;
      this.saveCart(items);
    }
  }

  removeFromCart(productId: number): void {
    if (!this.isBrowser) return;
    this.initStorage();

    const items = this.getCartItems().filter(x => x.productId !== productId);
    this.saveCart(items);
  }

  clearCart(): void {
    if (!this.isBrowser) return;
    sessionStorage.setItem(this.storageKey, JSON.stringify([]));
  }

  getTotalItems(): number {
    if (!this.isBrowser) return 0;
    return this.getCartItems().length;
  }

  getTotalPrice(): number {
    if (!this.isBrowser) return 0;

    return this.getCartItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  private saveCart(cart: CartItem[]): void {
    if (!this.isBrowser) return;
    sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}