import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from 'blog';

import { AuthService } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <app-header
        (logout)="onLogout()">
      </app-header>
      <div class="wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private blog: Blog,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
