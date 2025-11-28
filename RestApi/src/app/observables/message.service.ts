import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


//Communication : IPC, RPC, Sockets, HTTP, WebRTC, WebSockets,RabbitMQ, Kafka
//Frontend Communication: RxJS Observables, EventEmitters, Services, 
//State Management Libraries (NgRx, Akita,NgXs)

//NgRx: Redux pattern + RxJS + Angular .......

//Angular.min.js
//Conroller as a function
// $scope.$broadcast()  --- Publisher
// $scope.$on()        --- Subscriber
// asynchronous using promise / callback function


// asynchronous using  RxJS Observables

// Communication;
// Source--- Medium (Channel)-----Destination

// difference between promise and observable
// Promise : return single value asynchronously
// Observable : return multiple values asynchronously over a period of time

// Master Component --- MessageService (Subject) ---- Detail Component


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject=new Subject<string>();
  constructor() {
  
  }

  sendMessage(message:string){
    this.subject.next(message);
  }

  clearMessage(){
    this.subject.next("");
  }

  getMessage():Observable<string>{
    return this.subject.asObservable(); 
  }
}
