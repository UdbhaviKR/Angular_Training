import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  message:string="Welcome";

  constructor( private svc: MessageService) { }

  ngOnInit(): void {
  
  }

  sendMessage():void{
    console.log("Send Message Clicked");
    this.svc.sendMessage(this.message);
  }


  clearMessage():void{
    console.log("Clear Message Clicked");
    this.svc.clearMessage();
  }
}
