import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pluck, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/do';

import { User } from '../../../shared/models/user.interface';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  user$ = new Subject<User>();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  createUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post('/auth/register', body)
      .pipe(
        pluck('token'),
        tap((token: string) => {
          this.tokenService.setToken(token);
          this.user$.next({email, token});
        })
      );
  }

  loginUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post('/auth/login', body)
      .pipe(
        pluck('token'),
        tap((token: string) => {
          this.tokenService.setToken(token);
          this.user$.next({ email, token });
        })
      );
  }

  logoutUser() {
    localStorage.clear();
  }
}

