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
    this.posts = this.route.snapshot.data.posts || [];
    if (!this.posts.length) {
      this.error = 'Empty list, add some post';
    }
  }

  sortByTitle() {
    this.posts = _.sortBy(this.posts, 'title').reverse();
  }
}

// TODO: sort with title, group with author, LoDASH
