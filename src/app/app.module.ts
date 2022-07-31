import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountLoginSectionComponent } from './account-login-section/account-login-section.component';
import { WelcomeBoxComponent } from './welcome-box/welcome-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountLoginSectionComponent,
    WelcomeBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
