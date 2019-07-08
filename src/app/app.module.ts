import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../auth/shared/services/interceptors/api.interceptor';

// @ts-ignore
import { Blog } from 'blog';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components
import { AppHeaderComponent } from './components/app-header/app-header.component';

// services
import { AuthService } from '../auth/shared/services/auth/auth.service';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  providers: [
    Blog,
    AuthService, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
