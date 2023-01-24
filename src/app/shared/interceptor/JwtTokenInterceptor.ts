import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("inside intercept")
        
        if (this.authService.token != ''){
            request = request.clone({ setHeaders: { Authorization: 'Bearer '  + this.authService.token}});
        }
        
        return next.handle(request)
            .pipe(tap((event) => {
                console.log("inside interceptor" + event);
            }));

    }
}