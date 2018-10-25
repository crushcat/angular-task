import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AUTH_ACTIONS } from './constants';
import { AuthService } from '../services/authService/auth.service';
import { AuthAction, LoginAction, LoginFailedAction, FinalAction, LogoutAction } from './actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  auth$ = this.actions$.pipe(
    ofType(AUTH_ACTIONS.AUTH),
    switchMap((action: AuthAction) => {
        return this.authService.logIn(action.payload.login, action.payload.password)
            .pipe(
                map((data) => {
                    return data.token;
                }),
                map((token: string) => {
                    this.router.navigate(['catalog']);
                    return new LoginAction({token});
                }),
                catchError((error: HttpErrorResponse) => of(new LoginFailedAction(error)))
            );
    })
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AUTH_ACTIONS.LOGOUT),
    map(() => new FinalAction()),
    tap(() => this.router.navigate(['auth'])),
  );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ) { }
}