import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AuthService } from '../authentication/services/auth.service';

@Component({
  selector: 'app-header',
  styleUrls: ['app-header.component.scss'],
  templateUrl: 'app-header.component.html'
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
