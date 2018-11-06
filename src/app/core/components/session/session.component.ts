import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { LogoutAction } from '../../state/actions';
import { IAppState } from 'src/app/app.state';

@Component({
  selector: 'at-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit, OnDestroy {
  public userInfoSub: Subscription;
  public username: string;

  constructor(
    private authService: AuthService,
    private store: Store<IAppState>
  ) { }

  public ngOnInit(): void {
    this.userInfoSub = this.authService
                           .getUserInfo()
                           .subscribe((data) => {
                              this.username = data.login;
                           });
  }

  public ngOnDestroy(): void {
    this.userInfoSub.unsubscribe();
  }

  public logout(): void {
    this.store.dispatch(new LogoutAction());
  }
}
