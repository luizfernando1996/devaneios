import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PasswordComponent } from './components/password/password.component';
import { PasswordUploadComponent } from './components/password-upload/password-upload.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'password-upload', component: PasswordUploadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
