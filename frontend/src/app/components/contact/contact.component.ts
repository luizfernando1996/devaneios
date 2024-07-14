import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formData = {
    subject: '',
    message: '',
  };

  submitForm() {
    const { subject, message } = this.formData;
    // Replace with your actual logic to send the email or process the form data
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // Optionally, you can reset the form after submission
    this.formData.subject = '';
    this.formData.message = '';
  }
}
