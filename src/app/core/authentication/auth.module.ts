import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Http
import { HttpClientModule } from '@angular/common/http';

// shared models
import { SharedAuthModule } from '../../shared/shared.auth.module';


export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'register' },
        { path: 'login', loadChildren: './login/login.module#LoginModule' },
        { path: 'register', loadChildren: './register/register.module#RegisterModule' }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedAuthModule.forRoot(),
    HttpClientModule
  ],
  declarations: [],
  providers: []
})
export class AuthModule {}
