import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailpagesRoutingModule } from './detailpages-routing.module';
import { DetailpagesComponent } from './detailpages.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {  MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    DetailpagesComponent
  ],
  imports: [
    CommonModule,
    DetailpagesRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ]
})
export class DetailpagesModule { }
