import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAuthState } from '../../state/models';
import { LogoutAction } from '../../state/actions';

@Component({
  selector: 'at-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit, OnDestroy {
  userInfoSub: Subscription;
  username: string;

  ngOnInit() {
    this.userInfoSub = this._authService
                           .getUserInfo()
                           .subscribe((data) => {
                              this.username = data.login;
                           });
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

  ngOnDestroy() {
    this.userInfoSub.unsubscribe();
  }

  constructor(
    private _authService: AuthService,
    private store: Store<IAuthState>
  ) {}
}
