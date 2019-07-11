import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from '../../../shared/models/post.interface';

@Injectable()
export class PostsService {
  constructor(
    private http: HttpClient
  ) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('/posts')
      .pipe(
        catchError(() => of([]))
      );
  }

  getPost(key: string): Observable<Post> {
    if (!key) {
      return {} as Observable<Post>;
    }
    return this.http.get<Post>(`/posts/${ key }`);
  }

  addPost(post: Post) {
    return this.http.post('/posts', post);
  }

  updatePost(id: string, post: Post) {
    return this.http.put(`/posts/${ id }`, post);
  }

  removePost(id: string) {
    return this.http.delete(`/posts/${ id }`);
  }
}
