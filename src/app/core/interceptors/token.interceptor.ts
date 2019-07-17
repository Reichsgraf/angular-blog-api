import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { TokenService } from '../authentication/services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    public tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/logout')) {
      return next.handle(request);
    } else {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenService.getToken()}`
        }
      });
      return next.handle(request);
    }
  }
}
