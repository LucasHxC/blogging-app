import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PostListPageRoutingModule } from './post-list-routing.module';
import { PostListPage } from './post-list.page';
import { PostItemComponent } from '../components/post-item/post-item.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PostListPageRoutingModule
  ],
  declarations: [PostListPage, PostItemComponent]
})
export class PostListPageModule {}
