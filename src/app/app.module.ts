import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { WidgetComponent } from './widget/widget.component';
import { CommonModule } from '@angular/common';
import { BasicinformationComponent } from './basicinformation/basicinformation.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WidgetComponent,
    BasicinformationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
