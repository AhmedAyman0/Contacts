import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Contact} from '../contacts/contact';
import { data } from '../../assets/data/contacts.json';
import datar from '../../assets/data/recent-contact.json';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
contacts = [];
rContacts=[];
  constructor() { 
    this.contacts=data;
    this.rContacts=datar.data;
  }
  getContacts(){
    console.log(this.contacts);
    return this.contacts;
     
  }
  getRecentContacts(){
    return  this.rContacts;
  }

  newContact(cont:Contact){
    this.contacts.push(cont);
    return this.contacts;
  }
}
