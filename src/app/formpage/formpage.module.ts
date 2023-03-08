import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormpageRoutingModule } from './formpage-routing.module';
import { FormpageComponent } from './formpage.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormpageComponent
  ],
  imports: [
    CommonModule,
    FormpageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormpageModule { }
