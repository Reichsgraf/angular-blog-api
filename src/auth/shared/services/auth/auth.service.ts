import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pluck, tap } from 'rxjs/operators';
import 'rxjs/add/operator/do';

import { Blog } from 'blog';

export interface User {
  email: string;
  uid: string;
}

// post structure
/*export interface Post {
  title: string;
  author: string;
  content: string;
  image: string;
  description: string;
}*/

@Injectable()
export class AuthService {

  isAuthenticated$;

  constructor(
    private blog: Blog,
    private http: HttpClient
  ) {
    this.isAuthenticated$ = false;
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
    this.isAuthenticated$ = true;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  /*public isAuthenticated() {
    const token = this.getToken();
    console.log(token);
    return !!token;
  }*/

  /*const user: User = {
    email: next.email,
    uid: this.getToken()
  };
  this.blog.set('user', user);*/

  // register
  createUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post('http://localhost:3000/api/auth/login', body)
      .pipe(
        pluck('token'),
        tap((token: string) => this.setToken(token))
      );
  }

  // login
  loginUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post('http://localhost:3000/api/auth/login', body)
      .pipe(
        pluck('token'),
        tap((token: string) => this.setToken(token))
      );
  }

  // logout
  logoutUser() {
    localStorage.clear();
    this.isAuthenticated$ = false;
  }
}

