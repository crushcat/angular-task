import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logIn(login: string) {
    localStorage.setItem('token', login);
    this.router.navigate(['']);
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth');
  }

  IsAuthenticated() : boolean {
    return !!localStorage.getItem('token');
  }

  getUserInfo(): string {
    return localStorage.getItem('token');
  }

  constructor(private router: Router) {}
}
