import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emailpass',
  templateUrl: './emailpass.component.html',
  styleUrls: ['./emailpass.component.scss']
})
export class EmailpassComponent implements OnInit {
  emailpassForm!:FormGroup;
  constructor(private fb:FormBuilder,private signupservices:SignupService,private router:Router) { 

  }

 
  ngOnInit(): void {
    this.emailpassForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    });
  }
  signUp(){
    if(this.emailpassForm.invalid) return;
    const {email,password}=this.emailpassForm.value;
    this.signupservices.setEmail(email);
    this.signupservices.setPassword(password);
    const email1=this.signupservices.getEmail();
    const password1=this.signupservices.getPassword();
    const fname=this.signupservices.getFname();
    const lname=this.signupservices.getLname();
    const service=this.signupservices.getService();
   
    this.signupservices.SignUpapi({
      firstName:fname,
      lastName:lname,
      service:service,
      email:email1,
      password:password1
    }).subscribe({
      next:(res:any)=>{
        console.log(res);
        console.log("success");
        this.router.navigate(['']);

      },error(err:any){
        console.log(err);
      }
    });
    
    

  }

}
