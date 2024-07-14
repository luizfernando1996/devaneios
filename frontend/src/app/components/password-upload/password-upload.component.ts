import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';

interface Password {
  name: string;
  url: string;
  username: string;
  password: string;
  note: string;
}

@Component({
  selector: 'app-password-upload',
  templateUrl: './password-upload.component.html',
  styleUrl: './password-upload.component.scss'
})
export class PasswordUploadComponent {
  selectedFile: File | null = null;

  constructor(private papa: Papa) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csv = e.target?.result as string;
        this.parseCsv(csv);
      };
      reader.readAsText(this.selectedFile);
    }
  }

  parseCsv(csv: string) {
    this.papa.parse(csv, {
      header: true,
      complete: (result:any) => {
        const passwords: Password[] = result.data as Password[];
        this.saveToLocalStorage(passwords);
      },
    });
  }

  saveToLocalStorage(passwords: Password[]) {
    localStorage.setItem('passwords', JSON.stringify(passwords));
    alert('Passwords uploaded successfully!');
  }
}
