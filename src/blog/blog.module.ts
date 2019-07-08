import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// shared models

// guards


export const ROUTES: Routes = [
  { path: 'blog', loadChildren: './schedule/schedule.module#ScheduleModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    // SharedModule.forRoot()
  ]
})
export class BlogModule {}
