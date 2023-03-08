import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export const formObj = [{
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
  formArr: any[] = [];
  formObj: any = {
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
  session: any;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router) { }

  SaveData(form: NgForm) {
    this.router.navigate(['/viewpage'])
    this.formArr.push(this.formObj);
    localStorage.setItem('session', JSON.stringify(this.formArr));
  }

  ngOnInit(): void {
  }

}
