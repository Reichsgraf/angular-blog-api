import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// shared models
import { SharedModule } from './shared/shared.module';

// guards
import { AuthGuard } from '../auth/shared/guards/auth.guard';

export const ROUTES: Routes = [
  { path: 'blog', canActivate: [AuthGuard], loadChildren: './posts/posts.module#PostsModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ]
})
export class BlogModule {}
