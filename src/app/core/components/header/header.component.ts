import { Component } from '@angular/core';
import { AuthService } from '../../services/authService/auth.service';

@Component({
  selector: 'at-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 
  isAuth(): boolean {
    return this.authService.IsAuthenticated();
  }
  
  constructor(private authService: AuthService) {}
}
