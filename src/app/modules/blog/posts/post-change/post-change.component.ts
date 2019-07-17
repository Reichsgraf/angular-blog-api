import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, tap } from 'rxjs/operators';

import { PostsService } from '../../services/posts.service';
import { Post } from '../../../../shared/models/post.interface';

@Component({
  selector: 'post-change',
  templateUrl: 'post-change.component.html'
})
export class PostChangeComponent implements OnInit {
  post: Post;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.post = this.route.snapshot.data.post;
  }

  updatePost(event: FormGroup) {
    const id = this.route.snapshot.params.id;
    const { value } = event;
    return this.postsService.updatePost(id, value)
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
