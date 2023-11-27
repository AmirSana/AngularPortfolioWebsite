import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortrfolioComponent } from './portrfolio/portrfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PortrfolioComponent,
    ResumeComponent,
    ContactComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
})
export class AppModule {}
