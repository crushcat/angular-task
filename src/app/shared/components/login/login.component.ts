import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAuthState } from 'src/app/core/state/models';
import { AuthAction } from 'src/app/core/state/actions';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'at-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authForm: FormGroup;
  loginControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  auth() {
    const { login, password } = this.authForm.value;
    this.store.dispatch(new AuthAction({login, password}));
  }

  get controls() { return this.authForm.controls; }

  constructor(
    private store: Store<IAuthState>,
    private fb: FormBuilder
    ) { 
    this.authForm = this.fb.group({
      login: this.loginControl,
      password: this.passwordControl
    })
  }
}
