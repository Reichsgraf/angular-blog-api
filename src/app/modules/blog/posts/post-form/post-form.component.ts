import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from '../../../../shared/models/post.interface';

@Component({
  selector: 'post-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['post-form.component.scss'],
  templateUrl: 'post-form.component.html'
})
export class PostFormComponent implements OnChanges {
  @Input()
  post: Post;

  @Output()
  submitted = new EventEmitter<FormGroup>();

  @Output()
  create = new EventEmitter<Post>();

  @Output()
  update = new EventEmitter<Post>();

  form = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    content: ['', Validators.required],
    image: ['', Validators.compose([
      Validators.required
    ])],
    description: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder
  ) {}


  ngOnChanges(changes: SimpleChanges) {
    if (this.post && this.post.title) {
      const value = this.post;
      this.form.patchValue(value);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }
}
