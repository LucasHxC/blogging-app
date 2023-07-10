import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'new-post',
    loadComponent: () => import('./new-post/new-post.page').then( m => m.NewPostPage)
  },
  {
    path: 'post-list',
    loadComponent: () => import('./post-list/post-list.page').then( m => m.PostListPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
];
