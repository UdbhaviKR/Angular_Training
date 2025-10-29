import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule,SignInComponent, RegisterComponent],
  exports: [SignInComponent, RegisterComponent]
})
export class MembershipModule { }