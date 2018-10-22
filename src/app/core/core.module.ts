import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SessionComponent } from './components/session/session.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import { AuthService } from './services/authService/auth.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [HeaderComponent, LogoComponent, SessionComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: [AuthGuardService, AuthService]
})
export class CoreModule { }
