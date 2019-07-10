import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

import { Blog } from 'blog';
import { Post } from '../../../../app/shared/models/post.interface';

import { AuthService } from '../../../../app/core/services/auth.service';

@Injectable()
export class PostsService {

  posts$ = new Subject<Post>();

  constructor(
    private blog: Blog,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getPostInfo() {
    const request = this.http.get('http://localhost:3000/api/posts');
    request
      .subscribe(value => {
        for (const item in value) {
          if (value[item]) {
            this.posts$.next(value[item]);
          }
        }
      });
    return request;
  }

  // TODO: postsIsExist -- how to verify isEmpty?

  addPost(post: Post) {
    console.log('Sending post:', post);
    // http.post
    return this.http.post('http://localhost:3000/api/posts', post);
  }

  removePost(id: string) {
    return console.log('Delete?..');
    // http.post
  }

}
