import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
import { Item } from '../models/Item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] // <-- fixed plural "styleUrls"
})
export class CartComponent implements OnInit {
  @Input() product: Product | undefined;
  cartItems: Item[] = [];
  totalPrice = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadCartFromLocalStorage();
  }

  /** ✅ Load all cart items from localStorage and get product details */
  loadCartFromLocalStorage(): void {
    const cartData = JSON.parse(localStorage.getItem('cart') || '{}');
    this.cartItems = [];
  
    for (const id in cartData) {
      if (cartData.hasOwnProperty(id)) {
        const quantity = cartData[id];
        const numericId = Number(id); // ✅ convert string -> number
  
        // Get product details by ID (expects number)
        const product = this.productService.getProductById(numericId);
  
        if (product) {
          this.cartItems.push({
            productId: product.id,
            title: product.title,
            price: product.price,
            quantity: quantity,
            imageUrl: product.imageurl
          });
        }
      }
    }
  
    this.calculateTotal();
  }

  /** ✅ Calculate total price of all items */
  calculateTotal(): void {
    this.totalPrice = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  /** ✅ Remove item completely */
  removeItem(id: number): void {
    const cartData = JSON.parse(localStorage.getItem('cart') || '{}');
    delete cartData[id];
    localStorage.setItem('cart', JSON.stringify(cartData));

    // Update view
    this.loadCartFromLocalStorage();
  }

  /** ✅ Clear all items from cart */
  clearCart(): void {
    localStorage.removeItem('cart');
    this.cartItems = [];
    this.totalPrice = 0;
  }

  /** ✅ Update item quantity manually */
  updateQuantity(id: number, event: any): void {
    const qty = +event.target.value;

    if (qty <= 0) {
      this.removeItem(id);
      return;
    }

    const cartData = JSON.parse(localStorage.getItem('cart') || '{}');
    cartData[id] = qty;
    localStorage.setItem('cart', JSON.stringify(cartData));

    // Update view
    this.loadCartFromLocalStorage();
  }
}
