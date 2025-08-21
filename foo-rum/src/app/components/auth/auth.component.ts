import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  showSignInModal = true;
  showSignUpModal = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.showSignInModal = true;
  }

  onSignInSuccess(): void {
    this.showSignInModal = false;
    this.showSignUpModal = false;
    this.router.navigate(['/']);
  }

  onSignUpSuccess(): void {
    this.showSignInModal = false;
    this.showSignUpModal = false;
    this.router.navigate(['/']);
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
    this.router.navigate(['/']);
  }
}


