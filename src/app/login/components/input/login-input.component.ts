import { Component, OnInit } from '@angular/core';
import { IUserLogin } from '../../../data/user-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent implements OnInit {

  userLogin: IUserLogin = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.userLogin.email);
    console.log(this.userLogin.password);

    //TODO Autenticar contra la BD
    this.router.navigate(['/home']);
  }

}
