import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-post-item',
  template: `
    <ion-item>
      <!-- Your post item content here -->
      <ion-label>{{ post.title }}</ion-label>
    </ion-item>
  `,
})
export class AppPostItemComponent {
  @Input() post: any;
}

@Component({
  selector: 'app-post-list',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Post List</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ion-content>
      <ion-list>
        <app-post-item *ngFor="let post of posts" [post]="post"></app-post-item>
      </ion-list>
    </ion-content>
  `,
})
export class PostListPage {
  posts: any[] = []; // Replace with your actual data

  @NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  constructor() {
    // Initialize the posts array with data
  }
}
