import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../components/home/home.page';
import { NewPostPage } from '../pages/new-post/new-post.page';
import { PostListPage } from '../pages/post-list/post-list.page';

const routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', component: HomePage },
      { path: 'new-post', component: NewPostPage },
      { path: 'post-list', component: PostListPage },
      { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [IonicModule, RouterModule.forChild(routes)],
  declarations: [TabsPage, HomePage, NewPostPage, PostListPage],
  exports: [RouterModule],
})
export class TabsPageModule {}
