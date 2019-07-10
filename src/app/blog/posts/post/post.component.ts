import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Post} from '../../../shared/models/post.interface';
import {PostsService} from '../../../core/services/posts.service';

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
          (create)="addPost($event)">
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
    this.route.params
      .subscribe(param => {
        this.post = this.postsService.getPost(param.id);
      });
  }

  ngOnDestroy() {

  }

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
