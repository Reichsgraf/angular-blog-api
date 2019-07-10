import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Post } from '../../shared/models/post.interface';

import { SharedListModule } from '../../shared/modules/shared.list.module';

// components
import { PostFormComponent } from './post-form/post-form.component';

// containers
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import {PostsResolver} from './resolvers/posts.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {
      posts: PostsResolver
    }
  },
  { path: 'new', component: PostComponent },
  { path: ':id', component: PostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedListModule.forRoot()
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostFormComponent
  ],
  providers: [
    PostsResolver
  ]
})
export class PostsModule {}
