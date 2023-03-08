import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewpageRoutingModule } from './viewpage-routing.module';
import { ViewpageComponent } from './viewpage.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ViewpageComponent
  ],
  imports: [
    CommonModule,
    ViewpageRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class ViewpageModule { }
