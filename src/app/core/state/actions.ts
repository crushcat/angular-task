import { Action } from '@ngrx/store';
import { AUTH_ACTIONS } from './constants';
import { HttpErrorResponse } from '@angular/common/http';

export class AuthAction implements Action {
    readonly type = AUTH_ACTIONS.AUTH;
    constructor(public payload: {login: string, password: string}) { }
}

export class LoginAction implements Action {
    readonly type = AUTH_ACTIONS.LOGIN;
    constructor(public payload: {token: string}) { }
}

export class LoginFailedAction implements Action {
    readonly type = AUTH_ACTIONS.LOGIN_FAILED;
    constructor(public payload: {error: HttpErrorResponse}) { }
}

export class LogoutAction implements Action {
    readonly type = AUTH_ACTIONS.LOGOUT;
}

export class FinalAction implements Action {
    readonly type = AUTH_ACTIONS.FINAL;
}

export type Actions = 
            AuthAction | 
            LoginAction | 
            LoginFailedAction |
            LogoutAction |
            FinalAction;