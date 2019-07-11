import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Post } from '../../../shared/models/post.interface';
import { PostsService } from '../services/posts.service';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'post',
  styleUrls: ['post.component.scss'],
  template: `
    <div class="post">
      <div class="post__title">
        <h1>
          <span>
            {{ post.title ? 'Edit' : 'Create' }} post
          </span>
        </h1>
      </div>
      <div>
        <post-form
          [post]="post"
          (create)="addPost($event)"
          (update)="updatePost($event)"
          (remove)="removePost($event)">
        </post-form>
      </div>
    </div>
  `
})
export class PostComponent implements OnInit, OnDestroy {

  post: Post;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.post = this.route.snapshot.data.post || {};
  }

  ngOnDestroy() {

  }

  addPost(event: Post) {
    return this.postsService.addPost(event)
      .pipe(
        tap(() => this.backToBlog()),
        catchError(err => {
          console.log(err);
          return err;
        })
      )
      .subscribe();
  }

  updatePost(event: Post) {
    const id = this.route.snapshot.params.id;
    return this.postsService.updatePost(id, event)
      .pipe(
        tap(() => this.backToBlog()),
        catchError(err => {
          console.log(err);
          return err;
        })
      )
      .subscribe();
  }

  removePost(event: Post) {
    const id = this.route.snapshot.params.id;
    return this.postsService.removePost(id)
      .pipe(
        tap(() => this.backToBlog()),
        catchError(err => {
          console.log(err);
          return err;
        })
      )
      .subscribe();
  }

  backToBlog() {
    this.router.navigate(['blog']);
  }

}
