import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedAuthModule } from '../../../shared/modules/shared.auth.module';
import { LoginComponent } from './login.component';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedAuthModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {}
