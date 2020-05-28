import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OppsComponent} from './opps-workspace/opps.component';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'workspace/opps',
    pathMatch: 'full'
  },
  {  path: 'workspace/opps', component:OppsComponent } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
