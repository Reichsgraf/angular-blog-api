import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

import { Blog } from 'blog';
import { Post } from '../../models/post.interface';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

@Injectable()
export class PostsService {

  posts$ = new Subject<Array<Post>>();

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

}
