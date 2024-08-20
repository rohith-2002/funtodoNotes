import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private LoginServiceService:LoginserviceService) {

   }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
      email:['',[Validators.required,Validators.email]],
    });
  }

  handleLogin(){
    if(this.loginForm.invalid) return;
    const {email}=this.loginForm.value;
    this.LoginServiceService.setEmail(email);
    console.log(email);
  }
  

}
