import { Component, Input } from '@angular/core';

import { Post } from '../../../../../shared/models/post.interface';
import { PostFormComponent } from '../post-form.component';

@Component({
  selector: 'post-form-read',
  styleUrls: ['../post-form.component.scss'],
  templateUrl: 'post-form-read.component.html'
})
export class PostFormReadComponent {
  @Input()
  post: Post;

  constructor(
    private postFormComponent: PostFormComponent
  ) {}
}
