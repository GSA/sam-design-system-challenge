import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CmsWorkspaceComponent} from './cms-workspace.component';

const routes: Routes = [
  {
    path: '',
    component: CmsWorkspaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsWorkspaceRoutingModule { }
