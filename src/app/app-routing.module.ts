import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './components/home/home.page';
import { NewPostPage } from './pages/new-post/new-post.page';
import { PostListPage } from './pages/post-list/post-list.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'new-post',
    component: NewPostPage
  },
  {
    path: 'post-list',
    component: PostListPage
  },
  // Add more routes for other components/pages here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
