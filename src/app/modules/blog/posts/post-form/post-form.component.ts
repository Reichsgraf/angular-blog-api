import { OnChanges, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Post } from '../../../../shared/models/post.interface';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'post-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['post-form.component.scss'],
  templateUrl: 'post-form.component.html'
})
export class PostFormComponent implements OnChanges {
  toggled = false;

  @Input()
  post: Post;

  @Input()
  toggleReadWrite: boolean;

  @Input()
  exists: boolean;

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
    } else {
      this.toggleReadWrite = false;
    }
  }

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
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

  openDialog(): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
