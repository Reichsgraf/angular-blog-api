import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostFormCreateComponent } from './post-form-create.component';

export const ROUTES: Routes = [
  { path: '', component: PostFormCreateComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    PostFormCreateComponent
  ]
})
export class PostFormCreateModule {}
