import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedAuthModule } from '../../shared/modules/shared.auth.module';
import { AUTH_ROUTES } from './routes/auth.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    SharedAuthModule.forRoot(),
    HttpClientModule
  ],
  declarations: [],
  providers: []
})
export class AuthModule {}
