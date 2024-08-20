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
    const {email, password}=this.passForm.value;
    this.LoginServiceService.setPassword(password);
    const email1=this.LoginServiceService.getEmail();
    console.log(email1);
    console.log(email1,password);
    this.userService.loginAPIcall({email:"qwerty123@samp.com",password:"qwerty123"}).subscribe({
      next:(res:any)=>{
       const {id} = res;
       console.log("response",id);
       localStorage.setItem("access_token",id);
        this.appComponent.islogin=true;
       this.route.navigate(['./dashboard/notes']);
      },
      error:(err: any) => {
        console.log("response",err);
      }
    });
  }

}
