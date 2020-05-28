import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/workspace/faqs', pathMatch: 'full'
  },
  {
    path: 'workspace/faqs',
    loadChildren: () => import('./faqs/faqs-workspace/cms-workspace.module').then(m => m.CmsWorkspaceModule)
  },
  {
	path:'workspace/faqs/create',
    loadChildren: () => import('./faqs/faq-form/faq-form.module').then(m => m.FaqFormModule)
	  
  },
  {
    path: '**',
    redirectTo: '/workspace/faqs', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
