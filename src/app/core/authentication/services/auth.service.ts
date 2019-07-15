import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pluck, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/do';

import { User } from '../../../shared/models/user.interface';

@Injectable()
export class AuthService {
  user$ = new Subject<User>();

  constructor(
    private http: HttpClient
  ) {}

  // TODO: replace to outer class?
  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  createUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post('/auth/register', body)
      .pipe(
        pluck('token'),
        tap((token: string) => {
          this.setToken(token);
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
          this.setToken(token);
          this.user$.next({ email, token });
        })
      );
  }

  logoutUser() {
    localStorage.clear();
  }
}

