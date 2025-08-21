import { Injectable } from '@angular/core';
import testAccounts from '../models/test-accounts.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: string = '';

  constructor() {
    const savedUser = localStorage.getItem('currentUser');
    this.currentUser = savedUser || '';
  }

  signIn(email: string, password: string): boolean {
    const matchedUser = testAccounts.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );
  
    if (matchedUser) {
      this.currentUser = email;
      localStorage.setItem('currentUser', email);
      return true;
    }
  
    return false;
  }

  signUp(email: string, password: string): boolean {
    if (email && password) {
      const userExists = testAccounts.some((user: { email: string }) => user.email === email);
  
      if (userExists) {
        console.log('User already exists');
        return false;
      }

      testAccounts.push({ email, password });
  
      this.currentUser = email;
      localStorage.setItem('currentUser', email);
      return true;
    }
    return false;
  }

  signOut(): void {
    this.currentUser = '';
    localStorage.removeItem('currentUser');
  }

  isUserAuthenticated(): boolean {
    return this.currentUser !== '';
  }

  getCurrentUser(): string {
    return this.currentUser;
  }
}
