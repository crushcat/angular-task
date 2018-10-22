import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../shared/components/login/login.component';
import { AuthGuardService } from '../core/services/authGuard/auth-guard.service';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }