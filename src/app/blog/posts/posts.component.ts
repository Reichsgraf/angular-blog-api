import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from '../../shared/models/post.interface';

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
      <div>
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
  error = '';
  posts: Array<Post>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.posts = this.route.snapshot.data.posts || [];
    if (!this.posts.length) {
      this.error = 'Empty list, add some post';
    }
  }

  ngOnDestroy() {}
}
