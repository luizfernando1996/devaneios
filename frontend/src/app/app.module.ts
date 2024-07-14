import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/about/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PasswordComponent } from './components/password/password.component';
import { PasswordUploadComponent } from './components/password-upload/password-upload.component';
import { PasswordStatisticsComponent } from './components/password-statistics/password-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    LoginComponent,
    CoursesComponent,
    PasswordComponent,
    PasswordUploadComponent,
    PasswordStatisticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,

    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
