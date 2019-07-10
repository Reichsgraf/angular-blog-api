import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedAuthModule } from '../../../shared/modules/shared.auth.module';
import { RegisterComponent } from './register.component';

export const ROUTES: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedAuthModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {}
