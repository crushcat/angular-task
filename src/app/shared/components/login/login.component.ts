import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAuthState } from 'src/app/core/state/models';
import { AuthAction } from 'src/app/core/state/actions';

@Component({
  selector: 'at-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: string;
  password: string;

  auth() {
    const { login, password } = this;
    this.store.dispatch(new AuthAction({login, password}));
  }

  constructor(private store: Store<IAuthState>) { }
}
