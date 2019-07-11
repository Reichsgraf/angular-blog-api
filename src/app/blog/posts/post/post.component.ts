import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Post } from '../../../shared/models/post.interface';
import { PostsService } from '../services/posts.service';
import {catchError, tap} from 'rxjs/operators';

@Component({
  selector: 'post',
  styleUrls: ['post.component.scss'],
  templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit, OnDestroy {
  post: Post;
  toggleReadWrite = true;
  exists = false;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.post = this.route.snapshot.data.post || {};
    if (this.post.title) {
      this.exists = true;
    }
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

  toggle() {
    this.toggleReadWrite = !this.toggleReadWrite;
  }
}
