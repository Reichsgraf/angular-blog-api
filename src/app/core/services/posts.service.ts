import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable, Subject} from 'rxjs';

import { Blog } from 'blog';
import { Post } from '../../shared/models/post.interface';

import { AuthService } from './auth.service';

@Injectable()
export class PostsService {

  posts$ = new Subject<Post>();
  postsList = new Array<Post>();

  constructor(
    private blog: Blog,
    private http: HttpClient
  ) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('http://localhost:3000/api/posts');
  }

  // TODO: Get Post with API
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

  updatePost(post: Post) {
    // TODO: not tested
    return this.http.put(`http://localhost:3000/api/posts/${ post._id }`, post);
  }

  removePost(key: string) {
    // TODO: not tested
    return this.http.delete(`http://localhost:3000/api/posts/${ key }`);
  }

}
