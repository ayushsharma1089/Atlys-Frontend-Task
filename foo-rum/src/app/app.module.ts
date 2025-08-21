import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { FeedComponent } from 'src/app/components/feed/feed.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { FormsModule } from '@angular/forms';
import { NewPostComponent } from 'src/app/components/feed/new-post/new-post.component';
import { SigninComponent } from 'src/app/components/auth/signin/signin.component';
import { SignupComponent } from 'src/app/components/auth/signup/signup.component';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedComponent,
    HomeComponent,
    NewPostComponent,
    SigninComponent,
    SignupComponent,
    AuthComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
