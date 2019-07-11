import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/authentication/services/auth.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <app-header
        [authService]="authService"
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
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe();
  }

  ngOnDestroy() {
    this.authService.user$.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
