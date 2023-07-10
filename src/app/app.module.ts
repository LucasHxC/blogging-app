import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostItemComponent } from './components/post-item/post-item.component';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [AppComponent, PostItemComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
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
