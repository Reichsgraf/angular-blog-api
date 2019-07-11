import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'post-dialog',
  template: `
    <h1 mat-dialog-title>Hi</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button>Ok</button>
    </div>
  `
})
export class PostDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
