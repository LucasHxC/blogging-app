import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostListPageRoutingModule } from './post-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PostListPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostListPageModule {}
