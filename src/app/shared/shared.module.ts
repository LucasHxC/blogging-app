import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPostItemComponent } from '../components/post-item/post-item.component';

@NgModule({
  declarations: [AppPostItemComponent],
  imports: [CommonModule],
  exports: [AppPostItemComponent]
})
export class SharedModule { }
