import { Routes } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { PostsResolver } from '../resolvers/posts.resolver';
import { PostComponent } from '../posts/post/post.component';
import { PostResolver } from '../resolvers/post.resolver';
import { PostFormCreateComponent } from '../posts/post-form-create/post-form-create.component';
import { PostFormChangeComponent } from '../posts/post-form-change/post-form-change.component';


export const POST_ROUTES: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {
      posts: PostsResolver,
    }
  },
  {
    path: 'new',
    component: PostFormCreateComponent,
  },
  {
    path: ':id',
    component: PostComponent,
    resolve: {
      post: PostResolver,
    }
  },
  {
    path: ':id/update',
    component: PostFormChangeComponent }
];
