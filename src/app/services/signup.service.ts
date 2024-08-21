import { Injectable } from '@angular/core';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
 private fname: string = '';
  private lname: string = '';
  private service:string='advance';
  private email: string = '';
  private password: string = '';

  getFname(): string {
    return this.fname;
  }
  setFname(fname: string): void {
    this.fname = fname;
  }
  getLname(): string {
    return this.lname;
  }
  setLname(lname: string): void {
    this.lname = lname;
  }
  getEmail(): string {
    return this.email;
  }
  getService():string{
    return this.service;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  getPassword(): string {
    return this.password;
  }
  setPassword(password: string): void {
    this.password = password;
  }
    
  constructor(private Httpservice:HttpserviceService) { }
  SignUpapi(data:any){
    console.log("data",data);
    return this.Httpservice.postAPIcall("/user/userSignUp",data);
  }
  
 
}
