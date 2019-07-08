import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { User, AuthService } from '../../../auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-header.component.scss'],
  template: `
    <div class="app-header">
      <div class="wrapper">
        <div
          class="app-header__user-info"
          *ngIf="(authService | async)?.isAuthenticated$">
          <span (click)="logoutUser()"></span>
        </div>
      </div>
    </div>
  `
})
export class AppHeaderComponent {

  @Input()
  user: User;
  authService: AuthService;

  @Output()
  logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }
}
