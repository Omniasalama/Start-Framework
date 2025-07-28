import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  userName: string = '';
  userAge: number | null = null;
  userEmail: string = '';
  userPassword: string = '';

  userNameLabelVisible = false;
  userAgeLabelVisible = false;
  userEmailLabelVisible = false;
  userPasswordLabelVisible = false;

  onUserNameKeyDown(): void {
    this.userNameLabelVisible = true;
  }

  onUserAgeKeyDown(): void {
    this.userAgeLabelVisible = true;
  }

  onUserEmailKeyDown(): void {
    this.userEmailLabelVisible = true;
  }

  onUserPasswordKeyDown(): void {
    this.userPasswordLabelVisible = true;
  }

  onUserNameInput(event: Event): void {
    this.userName = (event.target as HTMLInputElement).value;
  }

  onUserAgeInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.userAge = value ? parseInt(value, 10) : null;
  }

  onUserEmailInput(event: Event): void {
    this.userEmail = (event.target as HTMLInputElement).value;
  }

  onUserPasswordInput(event: Event): void {
    this.userPassword = (event.target as HTMLInputElement).value;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form Submitted!', {
      userName: this.userName,
      userAge: this.userAge,
      userEmail: this.userEmail,
      userPassword: this.userPassword
    });
  }
}
