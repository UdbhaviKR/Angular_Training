import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  login(user: string, password: string): boolean {

    if (!this.isBrowser) return false; // prevent SSR crash

    if (user === 'ravi' && password === 'seed') {
      localStorage.setItem('username', user);

      let status = localStorage.getItem("loggedInStatus");

      if (status === "false" || status === null) {
        localStorage.setItem("loggedInStatus", "true");
      }

      return true;
    }

    return false;
  }

  logout(): void {
    if (!this.isBrowser) return;
    localStorage.removeItem('username');
    localStorage.setItem("loggedInStatus", "false");
  }

  getUser(): string | null {
    if (!this.isBrowser) return null;
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    if (!this.isBrowser) return false;
    return this.getUser() !== null;
  }
}