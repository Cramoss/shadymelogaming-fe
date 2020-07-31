import { Component, OnInit } from '@angular/core';
import { IUserRegister } from '../../../data/user-register';

@Component({
  selector: 'app-input-register',
  templateUrl: './input-register.component.html',
  styleUrls: ['./input-register.component.css']
})
export class InputRegisterComponent implements OnInit {

  userRegister: IUserRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  passwordRetry = '';

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(): void {
    console.log(this.userRegister.firstName);
    console.log(this.userRegister.lastName);
    console.log(this.userRegister.email);
    console.log(this.userRegister.password);
    console.log(this.passwordRetry);

    //TODO validate retry password
    //TODO Actually register user
  }
}
