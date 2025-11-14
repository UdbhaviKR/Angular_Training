import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, SignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'estorespa';

  loggedInStatus: boolean | undefined;
  links: any[] = [];

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.links = ["home", "about", "services", "protected"];
    this.isBrowser = isPlatformBrowser(this.platformId);  // <-- IMPORTANT
  }

  convertToBoolean(result: string): boolean {
    return result === "true";
  }

  ngOnInit() {
    console.log("Router container component ngOnInit invoked");

    // 🚫 localStorage is undefined on server
    // ✅ Only use in browser
    if (this.isBrowser) {
      
      const strStatus: string | null = localStorage.getItem("loggedInStatus");

      console.log("in router container strStatus =", strStatus);

      if (strStatus != null) {
        this.loggedInStatus = this.convertToBoolean(strStatus);
        console.log("loggedInStatus = ", this.loggedInStatus);
      }

    } else {
      console.log("Running on server (SSR / Vite build) → localStorage disabled");
    }
  }
}