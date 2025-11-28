import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { CounterComponent } from '../counter/counter.component';
import { ProductresapiService } from '../productresapi.service';
import { Product } from '../product';

@Component({
  selector: 'app-list',
  standalone:true,
  imports:[CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
products:Product[]=[]
   

  constructor(private svc:ProductService,
              private svc2:ProductresapiService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit() {

  //Non Blocking

  //Publisher--Subscriber model
   this.svc.getAllProducts().subscribe(
      (data)=>{
        console.log(data);
        this.products=data;
      });
  }


  goToProduct(id:number): void {
    console.log(id);
    //every method should be  used as listener
    
    this.router.navigate(['./details',id]);
  }
}
