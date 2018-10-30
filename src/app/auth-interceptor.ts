import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from './core/services/authService/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();
        if(token) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', token),
            });
            return next.handle(authReq);
        }

        return next.handle(req);
    }

    constructor(private authService: AuthService) {}
}
