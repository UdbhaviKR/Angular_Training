import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 import { RouterModule } from '@angular/router';
import { SignInComponent } from './membership/sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
 
import { CatalogModule } from './catalog/catalog.module';
import { SharedModule } from './shared/shared.module';
import { CustomModule } from './custom/custom.module';
import { GraphicsModule } from './graphics/graphics.module';
import { ObservablesModule } from './observables/observables.module';
import { BIModule } from './bi/bi.module';
 @Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,CatalogModule,
             GraphicsModule,
            SharedModule,CustomModule, 
            BIModule,
            ObservablesModule,
            SignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estorespa';

  loggedInStatus:boolean|undefined;
 
  links:any=[];

  constructor(){
    this.links=["home","about","services", "protected"];
  }
  convertToBoolean(result:string):boolean{
    let status=false;
    if(result=="true"){
      status=true;
    }
    return status;
  }

  ngOnInit() {
    console.log("Router container component ngOnint is getting invoked");
      let strStatus:string|null=localStorage.getItem("loggedInStatus");
      console.log( " in routerocntainer strStatus ="+strStatus);
      if(strStatus!=null){
        this.loggedInStatus=true;
        //this.convertToBoolean(strStatus);
        console.log(this.loggedInStatus);
      }

  }
}
