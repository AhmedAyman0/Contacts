import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  cnt:Contact ={
    firstName:'',
    lastName:'',
    email:'',
    mobileNumber:undefined,
    image:null
  };
  country:number=20;
  constructor(public router:Router,private conserv:ContactService) { }

  ngOnInit() {
  }
  onFileComplete(data: any) {
    console.log(data);
  }
  goBack(){
    this.router.navigateByUrl('contact-list');
  }
  newContact(){
    let number="0"+this.cnt.mobileNumber;
    const newContact= new Contact(this.cnt.firstName,this.cnt.lastName,number,this.cnt.email,this.cnt.image);
    console.log(this.cnt);
    this.conserv.newContact(newContact);
    this.router.navigateByUrl('contact-list')
  }
}
