import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../interfaces';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

const SERVER_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(
    private http: HttpClient,
    private store: Store<any>
    ) {
      this.store
          .select(state => state.auth.token)
          .subscribe((newToken) => {
            this.token = newToken;
          });
    }

  public logIn(login: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(`${SERVER_URL}/login`, {login, password});
  }

  public IsAuthenticated(): boolean {
    return !!this.token;
  }

  public getUserInfo(): Observable<IUser> {
    const { token } = this;
    return this.http.post<IUser>(`${SERVER_URL}/userinfo`, {token});
  }

  public getToken(): string {
    return this.token;
  }
}
