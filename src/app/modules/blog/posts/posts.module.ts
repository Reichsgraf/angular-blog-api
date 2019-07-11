import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { Post } from '../../../shared/models/post.interface';

import { SharedListModule } from '../../../shared/modules/shared.list.module';

// components
import { PostFormComponent } from './post-form/post-form.component';

// containers
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';

// resolvers
import { PostsResolver } from '../resolvers/posts.resolver';
import { PostResolver } from '../resolvers/post.resolver';

// routes
import { POST_ROUTES } from '../routes/post.routes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(POST_ROUTES),
    SharedListModule.forRoot()
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostFormComponent
  ],
  providers: [
    PostsResolver,
    PostResolver
  ]
})
export class PostsModule {}
