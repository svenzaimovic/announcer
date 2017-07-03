import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UsersService } from './users.service';
import { AnnouncementService } from './announcement.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './signup/signup.component';
import { AnnounceComponent } from './announce/announce.component';
import { AnnouncementListComponent } from './announcement-list/announcement-list.component';
import { LoginComponent } from './login/login.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'new-announcement',
    component: AnnounceComponent
  },
  {
    path: 'all-announcements',
    component: AnnouncementListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignupComponent,
    AnnounceComponent,
    AnnouncementListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [UsersService, AnnouncementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
