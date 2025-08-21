import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  email: string = '';
  password: string = '';
  @Input() standalone: boolean = false;

  @Output() signInSuccess = new EventEmitter<void>();
  @Output() switchToSignUp = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private authService: AuthService,
    private notificationService: NotificationService) { }

  onSignIn(): void {
    if (this.email && this.password) {
      const success = this.authService.signIn(this.email, this.password);
      if (success) {
        this.signInSuccess.emit();
      } else {
        this.notificationService.show('Invalid credentials. Please try again.', 'error');
      }
    }
  }

  onSignUpClick(): void {
    this.switchToSignUp.emit();
  }

  onOverlayClick(event: Event): void {
    if (this.standalone) return;
    if (event.target === event.currentTarget) {
      this.closeModal.emit();
    }
  }
}
