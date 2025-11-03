import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  status:boolean=false;

  validate(user: string, password: string): boolean {

    //Access rest API /DB to validate user credentials
    
    if (user === 'ravi.tambade@transflower.in' && password === 'seed') {
      this.status=true;
      console.log("checked True");
      localStorage.setItem('username', user);
      return true;
    }
    else{
      console.log(" service Invalid User");
      return false;
    }   
 }

 logout(): any {   localStorage.removeItem('username'); }
 getUser(): any {   return localStorage.getItem('username'); }
 isLoggedIn(): boolean {    return this.getUser() !== null;  }
}