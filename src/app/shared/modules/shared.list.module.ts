import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { ListItemComponent } from '../components/list-item/list-item.component';

// services
import { PostsService } from '../../blog/posts/services/posts.service';

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
