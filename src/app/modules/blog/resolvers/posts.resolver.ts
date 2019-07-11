import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { PostsService } from '../services/posts.service';
import { Post } from '../../../shared/models/post.interface';

@Injectable()
export class PostsResolver implements Resolve<Observable<Array<Post>>> {
  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Post>> {
    return this.postsService.getPosts();
  }
}
