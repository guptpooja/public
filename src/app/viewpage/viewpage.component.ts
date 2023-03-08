import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  viewform = [{
    'firstname': '',
    'middlename': '',
    'lastname': ''
  }];

  displayedColumns: string[] = ['firstname', 'middlename', 'lastname'];
  dataSource = this.viewform;

  constructor() { }



 

  ngOnInit(): void {
    let viewData: any = localStorage.getItem('session');
    if(viewData != null){
    this.viewform = JSON.parse(viewData);
    }
    console.log('some data ', this.viewform);
  }

}
