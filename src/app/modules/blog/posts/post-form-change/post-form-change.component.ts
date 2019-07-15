import { Component, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, tap } from 'rxjs/operators';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../../../shared/models/post.interface';

@Component({
  selector: 'post-form-create',
  templateUrl: 'post-form-change.component.html'
})
export class PostFormChangeComponent implements OnInit {
  @Output()
  post: Post;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.postsService
      .getPost(this.route.snapshot.params.id)
      .subscribe(post => {
        this.post = post;
      });
  }

  updatePost(event: FormGroup) {
    const id = this.route.snapshot.params.id;
    const { ...body } = event.value;
    return this.postsService.updatePost(id, body)
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
