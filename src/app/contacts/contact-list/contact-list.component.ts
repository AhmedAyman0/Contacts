import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts = [];
  constructor(private contserv:ContactService) { }

  ngOnInit() {
    this.contserv.getContacts().subscribe(
      (data:any)=>{console.log(data.data);this.contacts=data.data.sort(a=>a.name);}
    )
  }

}
