import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BasicinformationComponent } from './basicinformation/basicinformation.component';
import { PasswordComponent } from './password/password.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"",
    component:LoginComponent
  },{
    path:"register",
    component:RegisterComponent
  },{
    path:"info",
    component:BasicinformationComponent
  },{
    path:"pass",
    component:PasswordComponent
  },{
    path:"dashboard",
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
