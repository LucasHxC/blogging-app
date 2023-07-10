import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  posts: any[] = [];

  constructor() {}

  getPosts(): any[] {
    return this.posts;
  }

  addPost(post: any): void {
    this.posts.push(post);
  }
}
