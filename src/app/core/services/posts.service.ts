import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

import { Blog } from 'blog';
import { Post } from '../../shared/models/post.interface';

import { AuthService } from './auth.service';

@Injectable()
export class PostsService {

  posts$ = new Subject<Post>();
  postsList = new Array<Post>();

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
    this.createPostsList();
    return request;
  }

  getPost(key: string) {
    if (!key) {
      return {} as Post;
    }
    return this.postsList
      .find(item => item._id === key);
  }

  createPostsList() {
    // FIXME: this is barbaric, all of this and if -- more then others
    this.posts$
      .subscribe(post => {
        if (!this.postsList.find(item => item._id === post._id)) {
          this.postsList.push(post);
        }
      });
    return this.postsList;
  }

  addPost(post: Post) {
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
