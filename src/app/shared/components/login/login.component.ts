import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth.service';

@Component({
  selector: 'at-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: string;
  password: string;

  auth() {
    this._authService.logIn(this.login, this.password);
  }

  constructor(private _authService: AuthService) {}
}
