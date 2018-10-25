import { HttpErrorResponse } from "@angular/common/http";

export interface IAuthState {
    token: string,
    error: HttpErrorResponse
}