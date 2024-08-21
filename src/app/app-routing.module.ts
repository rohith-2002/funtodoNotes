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
import { AuthGuard } from './services/auth.guard';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
  {path:"",
    component:WidgetComponent
  },{
    path:"register",
    component:WidgetComponent
  },{
    path:"info",
    component:WidgetComponent
  },{
    path:"pass",
    component:WidgetComponent
  },{
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[AuthGuard],
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
