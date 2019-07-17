import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from '../../../../../../shared/models/post.interface';

@Component({
  selector: 'post-form',
  styleUrls: ['post-form.component.scss'],
  templateUrl: 'post-form.component.html'
})
export class PostFormComponent implements OnInit {
  @Input()
  post: Post;

  @Output()
  submitted = new EventEmitter<FormGroup>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
    if (this.post) {
      this.form.patchValue(this.post);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }
}
