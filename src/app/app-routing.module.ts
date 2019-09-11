import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';


const routes: Routes = [
  // {path:'',component:AppComponent,pathMatch:'full'},
{path:'contact-list',component:ContactListComponent},
{path:'new-contact',component:NewContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
