import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string  | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  login() {
    // Implement login logic here
    console.log(
      `Logging in with username: ${this.username} and password: ${this.password}`
    );

    // Example: Navigate to dashboard after successful login
    this.router.navigate(['/dashboard']);
  }
}
