import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'register',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div>
    <auth-form (submitted)="registerUser($event)">
      <h1>Register</h1>
      <a routerLink="/auth/login">Already have an account?</a>
      <button type="submit">Create account</button>
      <div class="error" *ngIf="error">
        {{ error }}
      </div>
    </auth-form>
  </div>
  `
})
export class RegisterComponent {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async registerUser(event: FormGroup) {
    const { email, password } = event.value;
    this.authService.createUser(email, password)
      .subscribe(
        () => {
          this.error = '';
          this.router.navigate(['/']);
        },
        err => this.error = err.statusText
      );
  }

}
