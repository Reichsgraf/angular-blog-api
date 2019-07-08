import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Blog } from 'blog';

import { AuthService, User } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <app-header
        [user]="user$ | async"
        (logout)="onLogout()">
      </app-header>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {

  user$: Observable<User>;

  constructor(
    private blog: Blog,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user$ = this.blog.select<User>('user');
  }

  ngOnDestroy() {}

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
