import { Injectable } from '@angular/core';
import { HttpserviceService } from './httpservice.service';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  Email: string = '';
  Password: string = '';


  constructor(private Httpservice: HttpserviceService) { }
     
     loginAPIcall(data:any){
      console.log("data",data);
      return this.Httpservice.postAPIcall("/user/login",data);
     } 
  // Remove the closing curly brace
}
