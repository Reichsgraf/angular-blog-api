import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @ts-ignore
import { Blog } from 'blog';

export interface User {
  email: string;
  authenticated: boolean;
  // FIXME: id? name?
}

@Injectable()
export class AuthService {

  constructor(
    private blog: Blog,
    private http: HttpClient
  ) {}

  // TODO: authentication
  /* observable.do_if_non_auth: this.store.set('user', null)
  else: const user: User = { email: email, authenticated: true, id...}
  and this.store.set('user', user);
  another variants?
  ngOnInit/ngOnDestroy with observable - not available in Inject.
  RouteGuards? (--)
  BehaviorSubject?
  Interceptors?
  learn for AuthState from FireBase.*/

  // register
  createUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post('http://localhost:3000/api/auth/register', body);
    // TODO: add register
    // TODO: replace with api in future: /api/register?
    // TODO: add return Observable<any> and error
  }

  // login
  loginUser(email: string, password: string) {
    const body = { email, password };
    return this.http.post('http://localhost:3000/api/auth/login', body);
      /*.subscribe(res => {
        console.log(res);
        /!*if (JSON.stringify(body) === JSON.stringify(res)) {
            console.log('Find!');
          }*!/
      });*/
    // TODO: add another verification logic (?)/hash-password?
    // TODO: replace with api in future: /api/login?
    // TODO: add return Observable<any> and error
  }
}
