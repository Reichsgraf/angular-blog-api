import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatDialogModule} from '@angular/material';

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
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import {PostFormCreateComponent} from './post-form-create/post-form-create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(POST_ROUTES),
    SharedListModule.forRoot(),
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    PostFormComponent,
    PostDialogComponent,
    PostFormCreateComponent
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
