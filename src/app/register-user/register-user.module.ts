import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRegisterComponent } from './components/main-register/main-register.component';
import { InputRegisterComponent } from './components/input-register/input-register.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainRegisterComponent, InputRegisterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class RegisterUserModule { }
