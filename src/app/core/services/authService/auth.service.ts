import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../interfaces'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

const SERVER_URL = "http://localhost:3004/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  logIn(login: string, password: string) {
    return this.http.post<any>(`${SERVER_URL}/login`,{login, password})
  }

  IsAuthenticated() : boolean {
    return !!this.token;
  }

  getUserInfo(): Observable<IUser> {
    const { token } = this;
    return this.http.post<IUser>(`${SERVER_URL}/userinfo`, {token});
  }

  getToken() {
    return this.token;
  }

  constructor(
    private http: HttpClient,
    private store: Store<any>
    ) {
      this.store
          .select(state => state.auth.token)
          .subscribe((newToken) => {
            this.token = newToken;
          })
    }
}
