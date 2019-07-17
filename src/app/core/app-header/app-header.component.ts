import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TokenService } from '../authentication/services/token.service';
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

  constructor(
    private tokenService: TokenService
  ) {}

  logoutUser() {
    this.logout.emit();
  }
}
