import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../components/home/home.page';
import { NewPostPage } from '../pages/new-post/new-post.page';
import { PostListPage } from '../pages/post-list/post-list.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'home', component: HomePage },
      { path: 'new-post', component: NewPostPage },
      { path: 'post-list', component: PostListPage },
      { path: '', redirectTo: '/tabs/home', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' }
];

@NgModule({
  imports: [IonicModule, HomePage, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TabsPage, PostListPage]
})
export class TabsPageModule {}
