import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { PostsService } from '../services/posts.service';
import { Post } from '../../../shared/models/post.interface';

@Injectable()
export class PostResolver implements Resolve<Observable<Post>> {
  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    return this.postsService.getPost(route.params.id);
  }
}
