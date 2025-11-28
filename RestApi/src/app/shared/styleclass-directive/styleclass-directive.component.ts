import { Component} from '@angular/core';

@Component({
  selector: 'branding-comp',
  templateUrl: './styleclass-directive.component.html',
  styleUrls: ['./styleclass-directive.component.css'],
})
export class BrandingComponent  {
 
  displayText:string;   
  visible:boolean;
  people: any[];

  constructor() {
    this.displayText = 'show-class'; 

    this.visible = true;    
    
    this.people= [
                {"name": "Michal Jackson","country": 'UK'},
                {"name": "Jerry Doyle","country": 'USA'},
                {"name": "Roger Smith","country": 'UK'},
                {"name": "Alan Border","country": 'USA'}
    ];
  }

  toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'show-class' : 'hide-class';
  }

  getColor(country:string): any { 
        let nationColor:string="black";

          switch (country) {
                  case 'UK':
                    nationColor= "green";
                    break;
                  case 'USA':
                     nationColor= "red";
                     break;          
          }
          return nationColor;
  }
}



//In OOP's:  Object

//
//Object is nothing but an instance of a Class
//Object is a real world entity which has 
// State: proptries  (@Input())
//
// Behaviour:  Class
//           static Behaviour:(early binding function)
//                             methods of component class
//                             constructors()

//           dynamic Behaviour:
//                              (Late binding functions)
//                             Callback function, listners, hook functions
//                             Hostlistners (event handlers)
//                             Component Life cycle event handlers
//                                Event hook:
//                                  ngOnInit, ngOnDestroy,
//                                    ngAfterViewIinit
//

//            Identity: name of selector
//            identifier: idBrand1








//Component  : UI Element
//State:
//Behaviour:
//Identity



//Clean Code Strategy;

//SOLID:
//S: Single Responsibility
//O: Open for extnesion and Closed for modication
//L: Liskove's substitution principle
//I: Interface saggrigation principle
//D: Dependecy Inversion principle


//DRY: Don't repeat yourself

//Holloywood principle:
//    Don't call me , I will call you


