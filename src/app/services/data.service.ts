import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   private subject= new BehaviorSubject<any>('');
   currentMessage=this.subject.asObservable();
  constructor() { }
  sendData(message:any){
    this.subject.next(message);
  }
}
