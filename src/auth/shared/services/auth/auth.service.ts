import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

// @ts-ignore
import { Blog } from 'blog';

export interface User {
  email: string;
  authenticated: boolean;
  // id? name?
}

@Injectable()
export class AuthService {

  constructor(
    private blog: Blog,
    private http: HttpClient
  ) {}

  // authentication
  // observable.do_if_non_auth: this.store.set('user', null)
  // else: const user: User = { email: email, authenticated: true, id...}
  // and this.store.set('user', user);
  // another variants? ngOnInit/ngOnDestroy with observable.

  // register
  createUser(email: string, password: string) {
    const body = { email, password };
    this.http.get('temp.json')
      .subscribe(res => console.log(res));
    // add register
    // replace with api in future: /api/register?
    // add return-error
  }

  // login
  loginUser(email: string, password: string) {
    const body = { email, password };
    this.http.get('temp.json')
      .subscribe(res => {
        if (JSON.stringify(body) === JSON.stringify(res)) {
            console.log('Find!');
          }
      });
    // add another verification logic (?)
    // replace with api in future: /api/login?
    // add return-error
  }

}
