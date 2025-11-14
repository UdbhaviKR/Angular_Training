import { Component, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

    //data member

    @Input() count:number=0;
    @Output() update=new EventEmitter();

   //Event handlers, Event listeners, Callback functions

   //Event handlers
    increment(){ 
      this.count++;
      this.update.emit({count:this.count});
    }
    decrement(){
      this.count--;
      this.update.emit({count:this.count});
    }

}
