import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AuthService } from '../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  styleUrls: ['app-header.component.scss'],
  template: `
    <div class="app-header">
      <div class="wrapper">
        <img src="/assets/favicon.ico">
        <div
          class="app-header__user-info"
          *ngIf="authService.getToken()">
          <span (click)="logoutUser()"></span>
        </div>
      </div>
    </div>
  `
})
export class AppHeaderComponent {

  @Input()
  authService: AuthService;

  @Output()
  logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }
}
