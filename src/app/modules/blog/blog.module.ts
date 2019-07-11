import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// shared models
import { SharedListModule } from '../../shared/modules/shared.list.module';

// guards
import { AuthGuard } from '../../core/guards/auth.guard';

export const ROUTES: Routes = [
  { path: 'blog', canActivate: [AuthGuard], loadChildren: './posts/posts.module#PostsModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedListModule.forRoot()
  ]
})
export class BlogModule {}
