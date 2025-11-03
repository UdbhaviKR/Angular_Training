import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  status:boolean=false;

  validate(user: string, password: string): boolean {
     
      return false;
     
 }

 logout(): any {   }
 getUser(): any {   }
 isLoggedIn(): boolean {   return false;  }
}