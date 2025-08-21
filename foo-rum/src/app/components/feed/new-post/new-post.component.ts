import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  newPostContent: string = '';
  
  @Output() postCreated = new EventEmitter<string>();
  @Output() authRequired = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  onPost(): void {
    const trimmed = this.newPostContent.trim();
    if (!trimmed) {
      return;
    }

    const isAuthenticated = this.authService.isUserAuthenticated();
    if (!isAuthenticated) {
      this.authRequired.emit();
      return;
    }
    this.postCreated.emit(trimmed);
    this.newPostContent = '';
  }

  notImplemented() {
    alert('Function not implemented');
  }
  
}
