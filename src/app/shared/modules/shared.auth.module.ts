import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AuthFormComponent } from '../../core/authentication/auth-form.component';

// services
import { AuthService } from '../../core/authentication/services/auth.service';

// guards
import { AuthGuard } from '../../core/guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthFormComponent
  ],
  exports: [
    AuthFormComponent
  ]
})
export class SharedAuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedAuthModule,
      providers: [
        AuthService, AuthGuard
      ]
    };
  }
}
