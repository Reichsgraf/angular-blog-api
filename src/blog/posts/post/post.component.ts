import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../../app/shared/models/post.interface';
import { PostsService } from '../../shared/services/posts/posts.service';

@Component({
  selector: 'post',
  styleUrls: ['post.component.scss'],
  template: `
    <div class="post">
      <div class="post__title">
        <h1>
          <span>Create post</span>
        </h1>
      </div>
      <div>
        <post-form
          (create)="addPost($event)">
        </post-form>
      </div>
    </div>
  `
})
export class PostComponent {
  constructor(
    private postsService: PostsService,
    private router: Router
  ) {}

  async addPost(event: Post) {
    await this.postsService.addPost(event)
      .subscribe(
        next => next,
        err => console.log(err.message));
    this.backToBlog();
  }

  backToBlog() {
    this.router.navigate(['blog']);
  }

}
