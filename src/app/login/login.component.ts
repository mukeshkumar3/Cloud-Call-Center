import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  loginForm=new FormGroup({
    username:this.username,
    password:this.password
  })

  constructor(private loginService: LoginService) {}

  login() {
    this.loginService
      .login(this.loginForm.value)
      .subscribe({ next: (data) => {}, error: (err) => {

      } });
  }
}
