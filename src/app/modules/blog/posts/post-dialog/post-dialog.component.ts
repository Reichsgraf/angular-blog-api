import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'post-dialog',
  styleUrls: ['post-dialog.component.scss'],
  templateUrl: 'post-dialog.component.html'
})
export class PostDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
}
