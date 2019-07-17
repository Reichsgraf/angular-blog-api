import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as _ from 'lodash';

import { Post } from '../../../shared/models/post.interface';

@Component({
  selector: 'posts',
  styleUrls: ['posts.component.scss'],
  templateUrl: 'posts.component.html'
})
export class PostsComponent implements OnInit {
  error = '';
  posts: Array<Post>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.posts = [...this.route.snapshot.data.posts] || [];
    if (!this.posts.length) {
      this.error = 'Empty list, add some post';
    }
  }

  sortByTitle(direction: string) {
    switch (direction) {
      case 'asc':
        return this.posts
          .sort((currentPost, nextPost) => {
            return nextPost.title.localeCompare(currentPost.title);
          });
      case 'desc':
        return this.posts
          .sort((currentPost, nextPost) => {
            return currentPost.title.localeCompare(nextPost.title);
          });
      default:
        return this.posts = [...this.route.snapshot.data.posts];
    }
  }

  groupBy() {
    return this.posts =
      _.flatten(_.values(_.groupBy(this.posts, 'author')));
  }
}
