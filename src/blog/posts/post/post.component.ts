import { Component } from '@angular/core';
import { Post } from '../../shared/models/post.interface';

@Component({
  selector: 'post',
  styleUrls: ['post.component.scss'],
  template: `
    <div class="post">
      <div class="post__title">
        <h1>
          <span>Create post</span>
        </h1>
      </div>
      <div>
        <post-form
          (create)="addPost($event)">
        </post-form>
      </div>
    </div>
  `
})
export class PostComponent {
  constructor() {}

  addPost(event: Post) {
    console.log('Post: ', event);
  }
}
