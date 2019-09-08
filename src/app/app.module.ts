import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import {MatDividerModule,MatInputModule, MatListModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    NewContactComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule, MatListModule,MatInputModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
