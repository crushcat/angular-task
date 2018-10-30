import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
} from '@angular/router';
import { AuthService } from '../authService/auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(): Observable<boolean> {
    if(!this.authService.IsAuthenticated()) {
      this.router.navigate(['auth']);
      return of(false);
    } 
    return of(true);
  }

  constructor(private authService: AuthService, private router: Router) {}
}
