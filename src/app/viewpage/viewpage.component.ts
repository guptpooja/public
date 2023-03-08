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
  viewData:any = [];
  displayedColumns: string[] = ['firstname', 'middlename', 'lastname','Action'];
  dataSource:any = [];
  // dataSource = new ExampleDataSource(this.viewform);
  constructor() { }

  ngOnInit(): void {
    this.viewData = localStorage.getItem('session') || null;
    if(this.viewData != null){
    this.viewData = JSON.parse(this.viewData);
    }
    console.log('some data ', this.viewData)
  this.dataSource = this.viewData;

  }

  deleteData(index:any){
    this.viewData.splice(0,index+1);
    console.log(this.viewData);
    // this.dataSource = [...this.viewData];
    this.dataSource.next(this.viewData);
    // this.dataSource.refresh()
    // localStorage.setItem('session', JSON.stringify(this.viewData));
    // console.log(index);
    // this.viewData = localStorage.getItem('session');
    // this.dataSource = this.viewData;
  //  this.dataSource.setData(this.viewData);
    // this.dataSource = this.dataSource.data.filter((i:any) => i !== index)
  }
}
