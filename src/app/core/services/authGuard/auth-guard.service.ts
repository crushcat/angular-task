import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
} from '@angular/router';
import { AuthService } from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(): boolean {
    if(!this._authService.IsAuthenticated()) {
      this.router.navigate(['auth']);
      return false;
    } 
    return true;
  }

  constructor(private _authService: AuthService, private router: Router) {}
}
