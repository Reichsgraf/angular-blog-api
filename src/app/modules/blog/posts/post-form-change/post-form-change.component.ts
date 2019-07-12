import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { catchError, tap } from 'rxjs/operators';
import { PostsService } from '../../services/posts.service';
import {Post} from '../../../../shared/models/post.interface';

@Component({
  selector: 'post-form-create',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'post-form-change.component.html'
})
export class PostFormChangeComponent {
  constructor(
    private postsService: PostsService,
    private router: Router
  ) {}

  updatePost(event: FormGroup) {
    /*const id = this.router.snapshot.params.id;
    const { ...body } = event.value;
    return this.postsService.updatePost(id, event)
      .pipe(
        tap(() => this.backToBlog()),
        catchError(err => {
          console.log(err);
          return err;
        })
      )
      .subscribe();*/
  }

  backToBlog() {
    this.router.navigate(['blog']);
  }
}
