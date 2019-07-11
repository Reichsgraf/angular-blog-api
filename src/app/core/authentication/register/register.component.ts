import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'register',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  registerUser(event: FormGroup) {
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
