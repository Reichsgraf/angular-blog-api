import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFormComponent } from '../../core/authentication/auth-form/auth-form.component';
import { TokenService } from '../../core/authentication/services/token.service';
import { AuthService } from '../../core/authentication/services/auth.service';
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
        TokenService,
        AuthService,
        AuthGuard
      ]
    };
  }
}
