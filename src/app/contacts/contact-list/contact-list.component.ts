import { Component, OnInit, Inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts = [];
  rContacts =[];
  filtered=[];
  names = [];
  dict = [];
  isFiltered:boolean=false;
   letters: any = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
  constructor(private contserv: ContactService,private router:Router,
    private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
    this.letters = this.letters.split(' ');
    console.log('let', this.letters);
   }

  ngOnInit() {
    let i = 0;
    this.contacts = this.contserv.getContacts();
    this.rContacts=this.contserv.getRecentContacts();
    console.log('con', this.contacts)
    this.filtered=this.contacts;


        
    let dict = this.filtered.reduce((a, c) => {
      // c[0] should be the first letter of an entry
      let k = c['firstName'][0].toLocaleUpperCase()

      // either push to an existing dict entry or create one
      if (a[k]) a[k].push(c)
      else a[k] = [c]

      return a
    }, {})

    console.log(dict)
    this.dict=dict;

    // Get the A's
    console.log(dict['A'])


}

goTo(dest:string){
  // console.log('d',dest)
  // window.location.hash = '';
  // window.location.hash = dest;
  this.pageScrollService.scroll({
    document:this.document,
    scrollTarget:`.${dest}`
  })
}


newContact(){
  this.router.navigateByUrl('new-contact');
}

filter(event){
  console.log(event.target.value)
  if(event.target.value ==''){
    this.isFiltered=false;
    console.log('false');
    
  }
  else{
    this.isFiltered=true;
     this.filtered=this.filtered.filter(a=>(a.firstName.toLowerCase()).includes(event.target.value.toLowerCase()));
    // 
    // this.filtered=Object.values(this.dict);
    // console.log(this.filtered);
  
  }
}

}
