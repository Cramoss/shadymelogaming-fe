import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLoginComponent } from './login/components/main-login/main-login.component';
import { MainHomeComponent } from './home/components/main-home/main-home.component';
import {MainRegisterComponent} from './register-user/components/main-register/main-register.component';

const routes: Routes = [
  { path: 'login', component: MainLoginComponent },
  { path: 'home', component: MainHomeComponent },
  { path: 'newuser', component: MainRegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
