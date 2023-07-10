import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlogService } from './services/blog.service';
import { SharedModule } from './shared/shared.module';
import { PostListPage } from './post-list/post-list.page';
import { NewPostPage } from './new-post/new-post.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, PostListPage, NewPostPage],
  imports: [BrowserModule, IonicModule.forRoot(), SharedModule, AppRoutingModule],
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
