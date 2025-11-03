import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule,ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{
products:any;

constructor(){

  // initialize data members
  // for dependency injection

}


// UI Component  : object


ngOnInit(): void {   
  this.products=[
      {"id": 12,  "title":"Lotus", "description": "Wedding flower","price":24 , "likes":800, "imageurl":"/assets/images/lotus.jpg"},
      {"id": 13,  "title":"Rose", "description": "Valentine flower","price":14, "likes":4000, "imageurl":"/assets/images/rose.jpg"},
      {"id": 14,  "title":"Jasmine", "description": "Smelling flower","price":3, "likes":9000, "imageurl":"/assets/images/jasmine.jpg"},
      {"id": 15,  "title":"Tulip", "description": "Beautiful flower","price":16, "likes":3000, "imageurl":"/assets/images/tulip.jpg"},
      {"id": 16,  "title":"Lily", "description": "Delicate flower","price":9,"likes":6000, "imageurl":"/assets/images/lily.jpg"},
      {"id": 17,  "title":"Marigold", "description": "Festival flower","price":4,"likes":56000, "imageurl":"/assets/images/marigold.jpg"},
  ]
}
}



//There are  14 instances of components are inside component Tree

// Server Side UI Programming
// asp.net -----------------Razor View-------.cshml
// java---(Spring MVC)-----Spark View Egine----.jsp

//Client Side UI Rendering

// pure java script code------ V8 javascript  Engine

// Angular---------Angular View Engine  (Ivy)--- zone.js
// React   ----------react view Engine----------



//Component Hierachy maintained by  Angular View Engine


/// Root Component  (AppComponent)----1
/// Product List-----------------------1
/// number of instances of ProductDetails Components---6
/// each product Details component contains Counter -------6






