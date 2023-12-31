import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlogService } from './services/blog.service';
import { SharedModule } from './shared/shared.module';
import { PostListPage } from './pages/post-list/post-list.page';
import { NewPostPage } from './pages/new-post/new-post.page';
import { CommonModule } from '@angular/common';
import { HomeModule } from './components/home/home.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, PostListPage, NewPostPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, HomeModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BlogService,
  ],
})
export class AppModule {
  constructor(private appComponent: AppComponent) {}
  
  ngDoBootstrap() {
    this.appComponent.bootstrapApplication();
  }
}
