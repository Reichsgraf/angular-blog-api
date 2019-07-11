import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div>
    <auth-form (submitted)="loginUser($event)">
      <h1>Login</h1>
      <a routerLink="/auth/register">Not registered?</a>
      <button type="submit">Login</button>
      <div class="error" *ngIf="error">
        {{ error }}
      </div>
    </auth-form>
  </div>
  `
})
export class LoginComponent {
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  loginUser(event: FormGroup) {
    const { email, password } = event.value;
    this.authService.loginUser(email, password)
      .subscribe(
        () => {
          this.error = '';
          this.router.navigate(['/']);
        },
        err => this.error = err.statusText
      );
  }
}
