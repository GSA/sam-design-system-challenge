import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/workspace/downloads', pathMatch: 'full'
  },
  {
    path: 'workspace/downloads',
    loadChildren: () => import('./components/sds-download/sds-download.module').then(m => m.SdsDownloadModule)
  },
  {
      path: '**',
      redirectTo: '/workspace/downloads', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
