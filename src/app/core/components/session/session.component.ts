import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'at-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  username: string;

  ngOnInit() {
    this.username = this._authService.getUserInfo();
  }

  logout() {
    this._authService.logOut();
  }

  constructor(private _authService: AuthService) {}
}
