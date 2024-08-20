import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BasicinformationComponent } from './basicinformation/basicinformation.component';
import { PasswordComponent } from './password/password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteComponentComponent } from './note-component/note-component.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';

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
    component:DashboardComponent,
    children:[
      {
        path:"notes",
        component:NoteComponentComponent
      },{
        path:"archive",
        component:ArchiveComponent
      },{
        path:"trash",
        component:TrashComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
