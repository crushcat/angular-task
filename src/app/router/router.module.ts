import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../shared/components/login/login.component';
import { AuthGuardService } from '../core/services/authGuard/auth-guard.service';
import { NonContentComponentComponent } from './components/non-content-component/non-content-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    loadChildren: '../catalog/catalog.module#CatalogModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: '**',
    component: NonContentComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [NonContentComponentComponent]
})
export class AppRouterModule { }