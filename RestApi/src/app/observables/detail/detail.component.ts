import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

    message:string="No Message";
  
  constructor(private svc: MessageService) { }

  ngOnInit(): void {
    this.svc.getMessage().subscribe(message => {
      this.message = message;
    });
  }

}
