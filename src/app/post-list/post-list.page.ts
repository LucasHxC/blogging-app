import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.page.html',
  styleUrls: ['./post-list.page.scss'],
})
export class PostListPage {
  posts: any[] | undefined;

  constructor(private blogService: BlogService) {}

  ionViewWillEnter() {
    this.posts = this.blogService.getPosts();
  }
}
