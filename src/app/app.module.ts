import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
