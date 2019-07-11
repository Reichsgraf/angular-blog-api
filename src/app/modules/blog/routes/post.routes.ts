import { Routes } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { PostsResolver } from '../resolvers/posts.resolver';
import { PostComponent } from '../posts/post/post.component';
import { PostResolver } from '../resolvers/post.resolver';

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
    component: PostComponent,
  },
  {
    path: ':id',
    component: PostComponent,
    resolve: {
      post: PostResolver,
    }
  }
];
