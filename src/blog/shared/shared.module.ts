import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { ListItemComponent } from './components/list-item/list-item.component';

// services
import { PostsService } from './services/posts/posts.service';

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
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        PostsService
      ]
    };
  }
}
