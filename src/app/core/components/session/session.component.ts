import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces';
import { Store } from '@ngrx/store';
import { IAuthState } from '../../state/models';
import { LogoutAction } from '../../state/actions';

@Component({
  selector: 'at-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  $username: Observable<IUser>;
  username: string;

  ngOnInit() {
    this.$username = this._authService.getUserInfo();
    this.$username.subscribe((data) => {
      this.username = data.login;
    });
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

  constructor(
    private _authService: AuthService,
    private store: Store<IAuthState>
  ) {}
}
