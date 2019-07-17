import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import 'rxjs/add/operator/map';

import { AuthService } from '../authentication/services/auth.service';
import { TokenService } from '../authentication/services/token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService
  ) {}

  canActivate() {
    const key = this.tokenService.getToken();
    if (!key) {
      this.router.navigate(['/auth/login']);
    }
    return !!key;
  }

}

// TODO: Upgrade without block of main page
