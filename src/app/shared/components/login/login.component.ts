import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAuthState } from 'src/app/core/state/models';
import { AuthAction } from 'src/app/core/state/actions';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'at-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public authForm: FormGroup;
  public loginControl = new FormControl('', [Validators.required]);
  public passwordControl = new FormControl('', [Validators.required]);

  public auth(): void {
    const { login, password } = this.authForm.value;
    this.store.dispatch(new AuthAction({login, password}));
  }

  public get controls(): {[key: string]: AbstractControl} {
    return this.authForm.controls;
  }

  constructor(
    private store: Store<IAuthState>,
    private fb: FormBuilder
    ) {
    this.authForm = this.fb.group({
      login: this.loginControl,
      password: this.passwordControl
    });
  }
}
