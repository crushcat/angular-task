import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../interfaces'
import { Observable } from 'rxjs';

const SERVER_URL = "http://localhost:3004/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logIn(login: string, password: string) {
    this.http.post<any>(`${SERVER_URL}/login`,{login, password})
        .subscribe((data) => {
              localStorage.setItem('token', data.token);
              this.router.navigate(['']);
          }, (error: HttpErrorResponse) => console.error(error));
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth');
  }

  IsAuthenticated() : boolean {
    return !!localStorage.getItem('token');
  }

  getUserInfo(): Observable<IUser> {
    const token = localStorage.getItem('token');
    return this.http.post<IUser>(`${SERVER_URL}/userinfo`, {token});
  }

  constructor(
    private router: Router,
    private http: HttpClient
    ) {}
}
