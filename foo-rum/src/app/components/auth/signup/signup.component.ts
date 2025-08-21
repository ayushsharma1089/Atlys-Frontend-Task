import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  @Input() standalone: boolean = false;

  @Output() signUpSuccess = new EventEmitter<void>();
  @Output() switchToSignIn = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private authService: AuthService,
    private notificationService: NotificationService) { }

  onSignUp(): void {
    if (this.email && this.password && this.repeatPassword) {
      if (this.password === this.repeatPassword) {
        const success = this.authService.signUp(this.email, this.password);
        if (success) {
          this.signUpSuccess.emit();
        } else {
          this.notificationService.show('Failed to create account. Please try again.', 'error');
        }
      } else {
        this.notificationService.show('Passwords do not match!', 'error');
      }
    }
  }

  onSignInClick(): void {
    this.switchToSignIn.emit();
  }

  onOverlayClick(event: Event): void {
    if (this.standalone) return;
    if (event.target === event.currentTarget) {
      this.closeModal.emit();
    }
  }
}
