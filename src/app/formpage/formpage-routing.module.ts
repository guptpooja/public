import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormpageComponent } from './formpage.component';

const routes: Routes = [{ path: '', component: FormpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormpageRoutingModule { }
