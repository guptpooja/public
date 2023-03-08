import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailpagesComponent } from './detailpages.component';

const routes: Routes = [{ path: '', component: DetailpagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailpagesRoutingModule { }
