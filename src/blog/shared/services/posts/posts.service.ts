import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import {catchError, pluck, tap} from 'rxjs/operators';

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

  // TODO: it's time to some change
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

  createPostsList() {
    const postsList = new Array<Post>();
    this.posts$
      .subscribe(post => {
        postsList.push(post);
      });
    return postsList;
  }

  addPost(post: Post) {
    console.log('Sending post:', post);
    const body = {
      title: post.title,
      author: post.author,
      content: post.content,
      image: post.image,
      description: post.description
    };
    return this.http.post('http://localhost:3000/api/posts', body);
  }

  removePost(id: string) {
    return console.log('Delete?..');
    // http.post
  }

}
