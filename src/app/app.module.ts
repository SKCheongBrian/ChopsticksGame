import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountLoginSectionComponent } from './pages/home/account-login-section/account-login-section.component';
import { WelcomeBoxComponent } from './pages/home/welcome-box/welcome-box.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateUserComponent } from './pages/user-account/create-user/create-user.component';
import { SignInComponent } from './pages/user-account/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountLoginSectionComponent,
    WelcomeBoxComponent,
    ButtonComponent,
    HomeComponent,
    CreateUserComponent,
    SignInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
