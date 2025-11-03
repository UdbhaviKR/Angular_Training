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
    model = new Customer('Ravi','Tambade','ravi.tambade@transflower.in',9881735801,28,
                     new Date(1975,18,8),'Pune',
                     'S',
                     false,['T', 'B']);
    constructor() {  }

}
