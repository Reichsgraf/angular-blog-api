import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { SharedListModule } from '../../../shared/modules/shared.list.module';
import { SharedPostModule } from './shared/shared.post.module';

// components
import { PostCreateComponent } from './post-create/post-create.component';
import { PostChangeComponent } from './post-change/post-change.component';

// containers
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

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
    SharedListModule.forRoot(),
    SharedPostModule.forRoot(),
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostDialogComponent,
    PostCreateComponent,
    PostChangeComponent
  ],
  entryComponents: [
    PostDialogComponent
  ],
  providers: [
    PostsResolver,
    PostResolver
  ]
})
export class PostsModule {}
