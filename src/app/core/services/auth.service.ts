import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pluck, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/do';

import { Blog } from 'blog';
import { User } from '../../shared/models/user.interface';

@Injectable()
export class AuthService {

  user$ = new Subject<User>();

  constructor(
    private blog: Blog,
    private http: HttpClient
  ) {}

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  // register
  // FIXME: register and login are equivalent
  createUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post('http://localhost:3000/api/auth/login', body)
      .pipe(
        pluck('token'),
        tap((token: string) => {
          this.setToken(token);
          this.user$.next({email, token});
          this.blog.set('user', this.user$);
        })
      );
  }

  // login
  loginUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post('http://localhost:3000/api/auth/login', body)
      .pipe(
        pluck('token'),
        tap((token: string) => {
          this.setToken(token);
          this.user$.next({ email, token });
          this.blog.set('user', this.user$);
        })
      );
  }

  // logout
  logoutUser() {
    localStorage.clear();
  }
}

