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
      <div *ngIf="this.postsService.postsList as posts">
        <div class="message" *ngIf="error || !posts.length">
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

  error = 'Empty list, add some post';

  constructor(
    private blog: Blog,
    private router: Router,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.postsService.getPostInfo().subscribe(
      res => this.error = '',
      err => this.error = err.statusText
    );
  }

  ngOnDestroy() {}

}
