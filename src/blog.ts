import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

import { User } from './auth/shared/models/user.interface';

export interface State {
  user: User;
  [key: string]: any;
}

const state: State = {
  user: undefined
};

export class Blog {

  private subject = new BehaviorSubject<State>(state);
  private blog = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.blog.pluck(name);
  }

  // tslint:disable-next-line:no-shadowed-variable
  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
