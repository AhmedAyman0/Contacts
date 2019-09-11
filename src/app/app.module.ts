import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import {MatDividerModule,MatInputModule, MatListModule,MatButtonModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MaterialFileUploadComponent } from './material-file-upload/material-file-upload.component';
import {MaterialModule} from './modules/material/material.module';
import { ButtonComponent } from './button/button.component';
import { HlineComponent } from './hline/hline.component'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FilterNamesPipe } from './filter-names.pipe';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    NewContactComponent,
    MaterialFileUploadComponent,
    ButtonComponent,
    HlineComponent,
    FilterNamesPipe
  ],
  imports: [
    NgxPageScrollCoreModule,
    AngularFontAwesomeModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule, MatListModule,MatInputModule,MatButtonModule,MatFileUploadModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
