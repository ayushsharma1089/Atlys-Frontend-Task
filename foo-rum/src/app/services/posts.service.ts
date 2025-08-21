import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface';
import postsData from '../models/posts.json';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];

  constructor() {
    this.posts = [...postsData];
  }

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post): void {
    this.posts = [post, ...this.posts];
  }
}
