import { Component, OnInit } from '@angular/core';
import { formObj } from '../formpage/formpage.component';

let getform = formObj;

@Component({
  selector: 'app-detailpages',
  templateUrl: './detailpages.component.html',
  styleUrls: ['./detailpages.component.css']
})
export class DetailpagesComponent implements OnInit {

  dataSource = getform;
  getform = getform;

  constructor() { }

  ngOnInit(): void {
    let getData: any = localStorage.getItem('session');
    if (getData != null) {
      this.getform = JSON.parse(getData);
    }
    console.log('some data ', this.getform);
  }

}
