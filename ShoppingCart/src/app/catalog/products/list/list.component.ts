import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, DetailsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}


  ngOnInit() {
    this.loadProducts();
  }
  
  loadProducts() {
     this.products=this.productService.getAll();
  };

}
