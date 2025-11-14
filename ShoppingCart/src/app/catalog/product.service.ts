import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private products: Product[] = [
      {"id": 12,  "title":"Lotus", "description": "Wedding flower","price":24 , "likes":800, "imageurl":"/assets/images/lotus.jpg"},
      {"id": 13,  "title":"Rose", "description": "Valentine flower","price":14, "likes":4000, "imageurl":"/assets/images/rose.jpg"},
      {"id": 14,  "title":"Jasmine", "description": "Smelling flower","price":3, "likes":9000, "imageurl":"/assets/images/jasmine.jpg"},
      {"id": 15,  "title":"Tulip", "description": "Beautiful flower","price":16, "likes":3000, "imageurl":"/assets/images/tulip.jpg"},
      {"id": 16,  "title":"Lily", "description": "Delicate flower","price":9,"likes":6000, "imageurl":"/assets/images/lily.jpg"},
      {"id": 17,  "title":"Marigold", "description": "Festival flower","price":4,"likes":56000, "imageurl":"/assets/images/marigold.jpg"},
  ]

  constructor() { }
 
  getAll():  Product[]{
    return this.products;
  }

  
  getById(id: number):Product {
    return this.products.find(p => p.id === id) as Product;
  }

  add(product: Product): Product {
    product.id = this.products.length + 1;
    this.products.push(product);
    return product;
  }

  update(product: Product): Product {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
    return product;
  }
  
  delete(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
  } 



  