import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,LoginComponent,RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
