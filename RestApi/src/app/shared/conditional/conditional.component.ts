import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent implements OnInit {

 //public :number;

 public billingPrice;
 public productionCost:number;
 public flower:string;
 public bestflower:string;
 

 //state 
 constructor() {
   this.productionCost=400;
   this.billingPrice=123;
   this.flower='lily';
   this.bestflower='marigold';
 }


 //logic
 isFlowerAvailable():boolean{  return true; }

 ngOnInit() {  }
}