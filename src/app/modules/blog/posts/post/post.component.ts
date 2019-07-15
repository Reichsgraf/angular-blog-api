import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';

import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';

import { Post } from '../../../../shared/models/post.interface';
import { PostsService } from '../../services/posts.service';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'post',
  styleUrls: ['post.component.scss'],
  templateUrl: 'post.component.html'
})
export class PostComponent implements OnInit, OnDestroy {

  @Output()
  post: Post;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.post = this.route.snapshot.data.post || {};
  }

  ngOnDestroy() {}

  removePost() {
    const id = this.route.snapshot.params.id;
    return this.postsService.removePost(id)
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

  private openDialog(): void {
    const dialogRef = this.dialog
      .open(PostDialogComponent, { width: '250px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removePost();
      }
    });
  }
}
