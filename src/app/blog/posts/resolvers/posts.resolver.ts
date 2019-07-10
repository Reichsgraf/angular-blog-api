import {Injectable} from '@angular/core';
import {PostsService} from '../../../core/services/posts.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Post} from '../../../shared/models/post.interface';

@Injectable()
export class PostsResolver implements Resolve<Observable<Array<Post>>> {
  constructor(private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Post>>{
    return this.postsService.getPosts();
  }
}
