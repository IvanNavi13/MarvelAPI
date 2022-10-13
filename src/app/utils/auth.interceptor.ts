import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

import { AuthService } from '../services/auth.service';
import StorageHelper from './storage.helper';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        // console.log(request)
        if (request.url.includes("/api/") || request.url.includes("/v1/")) {    //API_MARVEL or API_AUTH

            let originalRequest = request;
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + StorageHelper.getItem('session').token
                }
            })

            console.log("original:", originalRequest.url)
            // console.log("request=:",request)

            return next.handle(request).pipe(
                catchError((err: any) => {
                    console.log("catch", err)
                    if (err instanceof HttpErrorResponse && err.status === 401) {
                        console.log("IN RESPONSE ERROR")
                        return this.expiredHandler(originalRequest, next)
                    }
                    return throwError(() => err)
                })
            );
        }

        return next.handle(request);
    }

    private expiredHandler(originalRequest: HttpRequest<unknown>, next: HttpHandler) {
        return this.authService.refreshTokenV2().pipe(
            // tap(console.log)
            switchMap((respToken) => {  //Sirve para controlar lo del catchError y volver al flujo original(principal). por eso mismo siempre se utiliza switchmap
                StorageHelper.setItem('session', respToken)
                originalRequest = originalRequest.clone({
                    setHeaders: {
                        Authorization: 'Bearer ' + StorageHelper.getItem('session').token
                    }
                })
                return next.handle(originalRequest)
            })
        )
    }
}
