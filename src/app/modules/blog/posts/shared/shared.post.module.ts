import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { PostFormComponent } from './components/post-form/post-form.component';

// services
import { PostsService } from '../../services/posts.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostFormComponent
  ],
  exports: [
    PostFormComponent
  ]
})
export class SharedPostModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedPostModule,
      providers: [
        PostsService
      ]
    };
  }
}
