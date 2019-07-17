import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { catchError, tap } from 'rxjs/operators';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'post-create',
  templateUrl: 'post-create.component.html'
})
export class PostCreateComponent {
  constructor(
    private postsService: PostsService,
    private router: Router
  ) {}

  addPost(event: FormGroup) {
    const { ...post } = event.value;
    return this.postsService.addPost(post)
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
