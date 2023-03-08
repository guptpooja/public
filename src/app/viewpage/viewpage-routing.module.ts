import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpageComponent } from './viewpage.component';

const routes: Routes = [{ path: '', component: ViewpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewpageRoutingModule { }
