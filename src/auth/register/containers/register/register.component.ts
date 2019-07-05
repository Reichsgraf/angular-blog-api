import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'register',
  template: `
  <div>
    <auth-form (submitted)="registerUser($event)">
      <h1>Register</h1>
      <a routerLink="/login">Already have an account?</a>
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

  temp: Temp;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async registerUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      this.authService.createUser(email, password)
        .subscribe(res => console.log('Result:', res));
      this.router.navigate(['/']); // navigate to index in future (?)
    } catch (err) {
      this.error = err.message;
    }
  }

}

export class Temp {
  email: string;
  password: string;
}
