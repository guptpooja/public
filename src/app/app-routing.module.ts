import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'formpage', 
  loadChildren: () => import('./formpage/formpage.module').then(m => m.FormpageModule)
 },

  { 
    path: 'viewpage', 
    loadChildren: () => import('./viewpage/viewpage.module').then(m => m.ViewpageModule) 
  },
  
  { 
    path: 'detailpages', 
    loadChildren: () => import('./detailpages/detailpages.module').then(m => m.DetailpagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
