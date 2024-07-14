import { Component } from '@angular/core';

export interface PasswordChrome {
  name: string;
  url: string;
  username: string;
  password: string;
  note: string;
}

// password.interface.ts
export interface Password {
  id: number;
  category: string;
  url: string;
  name: string;
  username: string;
  password: string;
  additionalDetails: string; // Example additional detail field
  origin:string;
}

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss',
})
export class PasswordComponent {
  passwords: Password[] | undefined;

  categories: string[] = [];
  groupedPasswords: { [category: string]: Password[] } = {};
  selectedPassword: Password | null = null;
  private readonly storageKey = 'passwords';

  ngOnInit() {
    const data = localStorage.getItem(this.storageKey);
    this.passwords = data
      ? this.createPassword(data)
      : [
          // Example passwords
          {
            id: 1,
            name: 'Email Gmail',
            category: 'Email',
            username: 'user@example.com',
            password: 'password123',
            additionalDetails: 'Some additional details',
            url: '',
            origin:'mock'
          },
        ];

    this.groupPasswordsByCategory();
  }

  createPassword(data: string): Password[] {
    var passwordLocalStorage: PasswordChrome[] = JSON.parse(data);

    return passwordLocalStorage
      .filter((p) => p.url) // Filter out entries without a URL
      .map((p, index) => {
        let pass: Password = {
          id: index + 1,
          category: this.extractCategory(p.url),
          url: p.url,
          name: p.name,
          username: p.username,
          password: p.password,
          additionalDetails: p.note,
          origin: 'chrome passwords'
        };
        return pass;
      });
  }

  extractCategory(url: string): string {
    // Remove 'https://' from the beginning of the URL
    let category = url.replace(/^https:\/\//i, '');

    // Remove everything after the first forward slash '/'
    const index = category.indexOf('/');
    if (index !== -1) {
      category = category.substring(0, index);
    }

    return category;
  }

  groupPasswordsByCategory() {
    this.passwords!.forEach((password) => {
      if (!this.groupedPasswords[password.category]) {
        this.groupedPasswords[password.category] = [];
        this.categories.push(password.category);
      }
      this.groupedPasswords[password.category].push(password);
    });
  }

  togglePasswordDetails(password: Password) {
    if (this.selectedPassword === password) {
      this.selectedPassword = null;
    } else {
      this.selectedPassword = password;
    }
  }
}
