import { Routes } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { PostsResolver } from '../resolvers/posts.resolver';
import { PostComponent } from '../posts/post/post.component';
import { PostResolver } from '../resolvers/post.resolver';
import { PostCreateComponent } from '../posts/post-create/post-create.component';
import { PostChangeComponent } from '../posts/post-change/post-change.component';


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
    component: PostCreateComponent,
  },
  {
    path: ':id',
    resolve: {
      post: PostResolver,
    },
    children: [
      { path: '', component: PostComponent },
      { path: 'update', component: PostChangeComponent }
    ],
  },
];
