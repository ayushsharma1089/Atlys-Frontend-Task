import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(NavigationComponent) navigationComponent!: NavigationComponent;
  
  showSignInModal = false;
  showSignUpModal = false;

  constructor(private authService: AuthService) {}

  get isAuthenticated(): boolean {
    return this.authService.isUserAuthenticated();
  }

  onLoginClick(): void {
    if (!this.isAuthenticated) {
      this.showSignInModal = true;
    }
  }

  onSignInSuccess(): void {
    this.showSignInModal = false;
    this.showSignUpModal = false;
    if (this.navigationComponent) {
      this.navigationComponent.updateAuthState();
    }
  }

  onSignUpSuccess(): void {
    this.showSignInModal = false;
    this.showSignUpModal = false;
    if (this.navigationComponent) {
      this.navigationComponent.updateAuthState();
    }
  }

  onSwitchToSignUp(): void {
    this.showSignInModal = false;
    this.showSignUpModal = true;
  }

  onSwitchToSignIn(): void {
    this.showSignUpModal = false;
    this.showSignInModal = true;
  }

  onCloseModal(): void {
    this.showSignInModal = false;
    this.showSignUpModal = false;
  }

  onFeedInteraction(): void {
    if (!this.isAuthenticated) {
      this.showSignInModal = true;
    }
  }
}
