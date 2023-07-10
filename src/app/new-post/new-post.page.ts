import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage {
  constructor(private blogService: BlogService) {}

  // Implement the necessary methods to handle form submission, image capture, and location data
}
