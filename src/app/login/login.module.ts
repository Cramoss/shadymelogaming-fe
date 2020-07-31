import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInputComponent } from './components/input/login-input.component';
import { MainLoginComponent } from './components/main-login/main-login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LoginInputComponent, MainLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class LoginModule { }
