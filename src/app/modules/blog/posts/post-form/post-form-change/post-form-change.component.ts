import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Post } from '../../../../../shared/models/post.interface';
import { PostFormComponent } from '../post-form.component';

@Component({
  selector: 'post-form-change',
  styleUrls: ['../post-form.component.scss'],
  templateUrl: 'post-form-change.component.html'
})
export class PostFormChangeComponent {
  @Input()
  post: Post;

  constructor(
    private postFormComponent: PostFormComponent
  ) {}
}
