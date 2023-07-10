import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PostItemComponent } from './post-item.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PostItemComponent],
  exports: [PostItemComponent]
})
export class PostItemModule { }
