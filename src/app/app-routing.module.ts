import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './components/home/home.page';
import { NewPostPage } from './pages/new-post/new-post.page';
import { PostListPage } from './pages/post-list/post-list.page';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
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
  {
    path: 'tabs',
    component: TabsPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
