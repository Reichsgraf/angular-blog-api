import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// shared modules
import { SharedModule } from './shared/shared.module';

// Http
import { HttpClientModule } from '@angular/common/http';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'login' },
        { path: 'login', loadChildren: './login/login.module#LoginModule' },
        { path: 'register', loadChildren: './register/register.module#RegisterModule' }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot(),
    HttpClientModule
  ],
  declarations: [],
  providers: []
})
export class AuthModule {}
