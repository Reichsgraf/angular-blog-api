import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Post } from '../shared/models/post.interface';

import { SharedModule } from '../shared/shared.module';

// components

// containers
import { PostsComponent } from './containers/posts/posts.component';
import { PostComponent } from './containers/post/post.component';

export const ROUTES: Routes = [
  { path: '', component: PostsComponent },
  { path: 'new', component: PostComponent },
  { path: ':id', component: PostComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ],
  declarations: [
    PostsComponent,
    PostComponent
  ]
})
export class PostsModule {}
