import { Component,OnInit } from '@angular/core';
import { Item as CartItem } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  // model for add form
  newItem: CartItem = { productId: 0, name: '', price: 0, quantity: 1, image: '' };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (this.cartService.getCartItems().length === 0) {
      this.cartService.addToCart({ productId: 1, name: 'Rose', price: 15, quantity: 2, image: '/assets/images/rose.jpg' });
      this.cartService.addToCart({ productId: 2, name: 'Lotus', price: 30, quantity: 4, image: '/assets/images/lotus.jpg' });
    }
    this.load();
  }

  load(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  addToCart(): void {
    if (!this.newItem.productId) return;
    this.cartService.addToCart({ ...this.newItem });
    this.newItem = { productId: 0, name: '', price: 0, quantity: 0, image: '' };
    this.load();
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) {
      this.removeFromCart(productId);
      return;
    }
    this.cartService.updateQuantity(productId, quantity);
    this.load();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.load();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.load();
  }

  getTotalItems(): number {
    return this.cartService.getTotalItems();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}