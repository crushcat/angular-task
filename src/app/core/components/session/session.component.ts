import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces';

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
    this._authService.logOut();
  }

  constructor(private _authService: AuthService) {}
}
