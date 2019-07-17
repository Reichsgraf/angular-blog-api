import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListItemComponent } from '../components/list-item/list-item.component';
import { PostsService } from '../../modules/blog/services/posts.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ListItemComponent
  ],
  exports: [
    ListItemComponent
  ]
})
export class SharedListModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedListModule,
      providers: [
        PostsService
      ]
    };
  }
}
