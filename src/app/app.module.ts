import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HowToBoxComponent } from './how-to-box/how-to-box.component';
import { AccountLoginSectionComponent } from './account-login-section/account-login-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HowToBoxComponent,
    AccountLoginSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
