import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  newPostContent: string = '';

  @Output() postCreated = new EventEmitter<string>();
  @Output() authRequired = new EventEmitter<void>();

  isBoldActive: boolean = false;
  isItalicActive: boolean = false;
  isUnderlineActive: boolean = false;

  private currentCursorPosition: number = 0;
  private formattingMap: Map<number, string[]> = new Map();

  constructor(private authService: AuthService,
    private notificationService: NotificationService) { }

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

    const formattedContent = this.generateFormattedHTML();

    this.postCreated.emit(formattedContent);
    this.newPostContent = '';
    this.formattingMap.clear();

    this.isBoldActive = false;
    this.isItalicActive = false;
    this.isUnderlineActive = false;
  }

  notImplemented() {
    this.notificationService.show('Function not implemented', 'error');
  }

  clearAllContent(): void {
    if (this.newPostContent.trim()) {
      const confirm = window.confirm('Are you sure you want to clear all content?');
      if (confirm) {
        this.newPostContent = '';
        this.formattingMap.clear();
        // Reset formatting states
        this.isBoldActive = false;
        this.isItalicActive = false;
        this.isUnderlineActive = false;
      }
    }
  }

  toggleBold(): void {
    this.isBoldActive = !this.isBoldActive;
  }

  toggleItalic(): void {
    this.isItalicActive = !this.isItalicActive;
  }

  toggleUnderline(): void {
    this.isUnderlineActive = !this.isUnderlineActive;
  }

  onTextInput(event: any): void {
    const textarea = event.target;
    const currentPos = textarea.selectionStart;

    if (event.inputType === 'insertText') {
      const activeFormats: string[] = [];
      if (this.isBoldActive) activeFormats.push('bold');
      if (this.isItalicActive) activeFormats.push('italic');
      if (this.isUnderlineActive) activeFormats.push('underline');

      this.formattingMap.set(currentPos - 1, activeFormats);
    }
  }

  private generateFormattedHTML(): string {
    let html = '';
    const text = this.newPostContent;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const formats = this.formattingMap.get(i) || [];

      let openTags = '';
      let closeTags = '';

      if (formats.includes('bold')) {
        openTags += '<strong>';
        closeTags = '</strong>' + closeTags;
      }
      if (formats.includes('italic')) {
        openTags += '<em>';
        closeTags = '</em>' + closeTags;
      }
      if (formats.includes('underline')) {
        openTags += '<u>';
        closeTags = '</u>' + closeTags;
      }

      html += openTags + char + closeTags;
    }

    return html;
  }
}
