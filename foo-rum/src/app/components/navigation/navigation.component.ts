import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Output() loginClick = new EventEmitter<void>();
  currentUser = '';
  isOnAuthRoute = false;

  constructor(private authService: AuthService, private router: Router) {
    this.updateAuthState();
    this.isOnAuthRoute = this.router.url.startsWith('/auth');
    this.router.events.subscribe(() => {
      this.isOnAuthRoute = this.router.url.startsWith('/auth');
    });
  }

  updateAuthState(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  get isAuthenticated(): boolean {
    return this.currentUser !== '';
  }

  onLoginClick(): void {
    if (this.isOnAuthRoute) {
      this.router.navigate(['/']);
      return;
    }
    if (!this.isAuthenticated) {
      this.loginClick.emit();
      this.router.navigate(['/auth']);
    }
  }

  onSignOut(): void {
    this.authService.signOut();
    this.updateAuthState();
  }
}
