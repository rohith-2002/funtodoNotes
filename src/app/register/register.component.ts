import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
    });
  }

}
