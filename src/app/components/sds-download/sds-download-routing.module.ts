import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SdsDownloadComponent } from './sds-download.component';

const routes: Routes = [
	{
		path: '',
		component: SdsDownloadComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SdsDownloadRoutingModule { }