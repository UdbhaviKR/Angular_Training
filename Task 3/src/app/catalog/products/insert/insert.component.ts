import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [FormsModule,CounterComponent],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {

  product = {
    title: '',
    description: '',
    imageurl: '',
    likes: 0
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Product Saved:', this.product);
      // You can emit or call service to save product
    }
  }

  onUpdate(updatedLikes: number) {
    this.product.likes = updatedLikes;
  }

}
