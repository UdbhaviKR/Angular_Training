import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CounterComponent } from '../counter/counter.component';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule,CounterComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

currentProductId:any;
  @Input () product: Product|undefined;

  constructor(private router:Router,private route: ActivatedRoute, 
              private productService: ProductService) {  }
  
  ngOnInit() { 
    this.currentProductId=this.route.snapshot.paramMap.get("id");
    this.product=this.productService.getProductById(this.currentProductId);
  };
 
  onUpdate(data:any){
     if(this.product != undefined)
        this.product.likes=data.count;
      this.productService.updateProduct(this.product);
   }
   
   addToCart(): void {
    const id = this.currentProductId;
    console.log("Adding to cart product with id:", id);
  
    if (!id) {
      console.error("No product ID found!");
      return;
    }
  
    // Retrieve existing cart data from localStorage
    let cart: { [key: string]: number } = JSON.parse(localStorage.getItem('cart') || '{}');
  
    // Check if this product already exists
    if (cart[id]) {
      // Increase quantity
      cart[id] += 1;
    } else {
      // Add new product with quantity 1
      cart[id] = 1;
    }
  
    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Show user message
    const quantity = cart[id];
    alert(`✅ ${quantity} item${quantity > 1 ? 's' : ''} added to cart!`);
    
    console.log("Cart updated:", cart);
  }
  
  

  goToUpdate(): void {
   let  id=this.currentProductId;
   console.log("Updating product with id:", id);
   this.router.navigate(['./update/', id]);
  }

  goToDelete(id:number): void {
    console.log("Deleting product with id:", id);
    this.router.navigate(['./delete/', id]);
  }














   // ngIf
  isLoggedIn = true;
  userName = 'Ravi';

  // ngFor
  products = [
    { name: 'Rose', price: 12 },
    { name: 'Lotus', price: 25 },
    { name: 'Gerbera', price: 8 },
  ];

  // ngSwitch
  status = 'outofstock';

  // ngModel
  promoCode = '';

  // Dynamic styling
  //product = { name: 'Rose', price:9};

}
