import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRegisterComponent } from './components/input-register/input-register.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class RegisterUserModule { }
