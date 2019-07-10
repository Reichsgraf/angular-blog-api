import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Blog } from 'blog';
import { Post } from '../../app/shared/models/post.interface';
import { PostsService } from '../shared/services/posts/posts.service';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'posts',
  styleUrls: ['posts.component.scss'],
  template: `
    <div class="posts">
      <div class="posts__title">
        <h1>Posts</h1>
        <a
          class="btn__add"
          [routerLink]="['../blog/new']">
          <img src="/assets/img/add-white.svg">
          Create
        </a>
      </div>
      <div *ngIf="postsList as posts">
        <div class="message" *ngIf="error">
          {{ error }}
        </div>
        <list-item
          *ngFor="let post of posts"
          [item]="post">
        </list-item>
      </div>
    </div>
  `
})
export class PostsComponent implements OnInit, OnDestroy {

  error: string;
  postsList = new Array<Post>();

  constructor(
    private blog: Blog,
    private router: Router,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.postsService.getPostInfo().subscribe(
      res => {
        this.error = '';
      },
      err => this.error = err.statusText
    );
    this.postsList = this.postsService.createPostsList();
    console.log(this.postsList);
  }

  ngOnDestroy() {
    // this.postsService.posts$.unsubscribe();
  }

}
