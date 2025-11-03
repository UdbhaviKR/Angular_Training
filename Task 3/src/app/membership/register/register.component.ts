import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   
  submitted = false;
  locations = ['Pune','Mumbai','Delhi','Bangalore','Nashik','Chennai'];
  memberShips = [
                 {value:'G',display:'Gold'},
                 {value:'S',display:'Silver'},
                 {value:'P',display:'Platinum'}
  ];
 
  social =[
             {value:'T',display:'Twitter'},
             {value:'F',display:'Facebook'},
             {value:'B',display:'Blog'},
             {value:'I',display:'Instagram'},
             {value:'L',display:'LinkedIn'}
  ];
 
 
  socialStatus = ['T', 'B'];


  model=new Customer('Ravi','Tambade','ravi.tambade@transflower.in',9881735801,28,
                     new Date(1975,18,8),this.locations[0],
                     this.memberShips[1].value,
                     false,this.socialStatus);
   constructor() {  }
 
 
  onSubmit(form: any): void {
       this.submitted=true;
       console.log('you submitted value:', form);
  }
 
  showCustomer(form:any){
         return form && form.controls['firstName'] && form.controls['firstName'].value;
  }
 
  showFormControls(form:any){
     return form && form.controls['firstName'] && form.controls['firstName'].value;
  }


}
