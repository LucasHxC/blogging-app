import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewPostPage } from './new-post/new-post.page';
import { PostListPage } from './post-list/post-list.page';

const routes: Routes = [
  { path: '', redirectTo: 'post-list', pathMatch: 'full' },
  { path: 'post-list', component: PostListPage },
  { path: 'new-post', component: NewPostPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
