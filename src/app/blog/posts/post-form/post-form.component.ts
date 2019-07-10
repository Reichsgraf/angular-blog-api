import {OnChanges, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Post } from '../../../shared/models/post.interface';

@Component({
  selector: 'post-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['post-form.component.scss'],
  template: `
    <div class="post-form">
      <form [formGroup]="form">
        <div class="post-form__title">
          <label>
            <h3>
              Post title
            </h3>
            <input
              type="text"
              formControlName="title">
          </label>
          <label>
            <h3>
              Post author
            </h3>
            <input
              type="text"
              formControlName="author">
          </label>
        </div>

        <div class="post-form__content">
          <label>
            <h3>
              Content
            </h3>
            <textarea
              type="text"
              rows="5"
              formControlName="content"></textarea>
          </label>
          <label>
            <h3>
              Description
            </h3>
            <input
              type="text"
              formControlName="description">
          </label>
          <label>
            <h3>
              Image
            </h3>
            <input
              type="text"
              placeholder="e.g. https://goo.gl/img/1.jpg"
              formControlName="image">
          </label>
        </div>

        <div class="post-form__submit">
          <div>
            <button
              *ngIf="!exists"
              type="button"
              class="button"
              (click)="createPost()">
              Create post
            </button>
            <button
              *ngIf="exists"
              type="button"
              class="button"
              (click)="updatePost()">
              Update post
            </button>
            <a
              class="button button--cancel"
              [routerLink]="['../']">
              Cancel
            </a>
          </div>
          <div class="post-form__delete" *ngIf="exists">
            <div *ngIf="toggled">
              <p>Delete item?</p>
              <button
                class="confirm"
                type="button"
                (click)="removePost()">
                Yes
              </button>
              <button
                class="cancel"
                type="button"
                (click)="toggle()">
                No
              </button>
            </div>
            <button class="button button--delete" type="button" (click)="toggle()">
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  `
})
export class PostFormComponent implements OnChanges {

  exists = false;
  toggled = false;

  @Input()
  post: Post;

  @Output()
  create = new EventEmitter<Post>();

  @Output()
  update = new EventEmitter<Post>();

  @Output()
  remove = new EventEmitter<Post>();

  form = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    content: ['', Validators.required],
    image: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnChanges(changes: SimpleChanges) {
    if (this.post && this.post.title) {
      this.exists = true;
      const value = this.post;
      this.form.patchValue(value);
    }
  }

  constructor(
    private fb: FormBuilder
  ) {}

  createPost() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updatePost() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  removePost() {
    this.remove.emit(this.form.value);
  }

  toggle() {
    this.toggled = !this.toggled;
  }

}
