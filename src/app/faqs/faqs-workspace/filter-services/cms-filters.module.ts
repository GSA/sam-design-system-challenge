import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsFiltersService } from './cms-filters.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CMSFiltersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CMSFiltersModule,
      providers: [ CmsFiltersService ]
    };
  }

}
