import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hline',
  templateUrl: './hline.component.html',
  styleUrls: ['./hline.component.css']
})
export class HlineComponent implements OnInit {

  @Input() in:any;
  constructor() { }

  ngOnInit() {
  }

}
