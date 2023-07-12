import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'new-post',
    loadComponent: () => import('./pages/new-post/new-post.page').then( m => m.NewPostPage)
  },
  {
    path: 'post-list',
    loadComponent: () => import('./pages/post-list/post-list.page').then( m => m.PostListPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage)
  }
];
