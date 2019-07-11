import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'login.component.html'
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
