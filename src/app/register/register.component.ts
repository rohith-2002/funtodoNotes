import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  constructor( private fb:FormBuilder,private signupservice:SignupService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      lname:['',[]]
    });
  }

  handleregister(){
    if(this.registerForm.invalid) return;
    const {name,lname}=this.registerForm.value;
    this.signupservice.setFname(name);
    this.signupservice.setLname(lname);
    const fname=this.signupservice.getFname();
    const laname=this.signupservice.getLname();
    console.log(fname,laname);
  }

}
