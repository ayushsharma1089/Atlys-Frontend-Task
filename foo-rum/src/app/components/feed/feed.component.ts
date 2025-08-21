import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Post } from '../../models/post.interface';
import { PostsService } from '../../services/posts.service';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(-150px)' }),
          stagger(150, [
            animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('postAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-40px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class FeedComponent {
  posts: Post[] = [];
  @Output() feedInteraction = new EventEmitter<void>();
  private likeAnimations = new Set<number>();

  constructor(private postsService: PostsService, private authService: AuthService) {
    this.posts = this.postsService.getPosts();
  }

  onPostCreated(content: string): void {
    this.feedInteraction.emit();
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      return;
    }

    const newPost: Post = {
      username: currentUser,
      time: 'just now',
      content: content,
      likeCount: 0,
      likedBy: []
    };

    this.postsService.addPost(newPost);
    this.posts = this.postsService.getPosts();
  }

  onAuthRequired(): void {
    this.feedInteraction.emit();
  }

  onLikeClick(index: number): void {
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
      alert('You need to login first to perform this operation');
      return;
    }

    const likedBy = this.posts[index].likedBy;
    const isAlreadyLiked = likedBy.includes(currentUser);

    if (isAlreadyLiked) {
      this.posts[index].likeCount--;
      const userIndex = likedBy.indexOf(currentUser);
      likedBy.splice(userIndex, 1);
    } else {
      this.posts[index].likeCount++;
      likedBy.push(currentUser);
      this.triggerLikeAnimation(index);
    }
    
    this.feedInteraction.emit();
  }

  getCurrentUser(): string {
    return localStorage.getItem('currentUser') || '';
  }

  isLikeAnimating(index: number): boolean {
    return this.likeAnimations.has(index);
  }

  notImplemented(): void {
    alert('This feature is not implemented yet');
  }

  private triggerLikeAnimation(index: number): void {
    this.likeAnimations.add(index);
    setTimeout(() => {
      this.likeAnimations.delete(index);
    }, 600);
  }
}