import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  passForm!:FormGroup;
  constructor(private pb:FormBuilder,private LoginServiceService:LoginserviceService,private userService:UserServiceService,private route:Router,
    private appComponent:AppComponent
  ) { }

  ngOnInit(): void {
    this.passForm=this.pb.group({
      pass:['',[Validators.required,Validators.minLength(8)]],
    });
  }
  handleLogin(){
    if(this.passForm.invalid) return;
    const {email1,pass}=this.passForm.value;
    this.LoginServiceService.setPassword(pass);
    const email=this.LoginServiceService.getEmail();
    const password=this.LoginServiceService.getPassword();
    // console.log(email1);
    // console.log(password1);
    console.log(email1,pass);
    this.userService.loginAPIcall({email,password}).subscribe({
      next:(res:any)=>{
       const {id} = res;
       console.log("response",id);
       localStorage.setItem("access_token",id);
        
       this.route.navigate(['./dashboard/notes']);
      },
      error:(err: any) => {
        console.log("response",err);
      }
    });
  }

}
