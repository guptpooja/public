import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export const formObj = [{
  id:'',
  firstname: '',
  middlename: '',
  lastname: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  zip: '',
  add1: '',
  add2: ''
}];

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {
  formArr: any = [];
  formObj: any = {
    id:'',
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
    add1: '',
    add2: ''
  };


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router) { }

  SaveData(form: NgForm) {
    console.log(formObj);
    console.log(this.formObj);
    if (localStorage.getItem('session') != null) {
      let tempSession: any = localStorage.getItem('session');
      this.formArr = JSON.parse(tempSession)
      this.formArr.push(this.formObj);
    } else {
      this.formArr.push(this.formObj);
    }
    localStorage.setItem('session', JSON.stringify(this.formArr));
    this.router.navigate(['/viewpage'])
  }

  ngOnInit(): void {
  }

}
