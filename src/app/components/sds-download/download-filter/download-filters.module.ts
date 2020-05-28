import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsAccordionModule, SdsToolbarModule } from '@gsa-sam/components';
import { SdsFiltersModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { DownloadFiltersComponent } from './download-filters.component';

@NgModule({
  declarations: [
    DownloadFiltersComponent
  ],
  imports: [
    CommonModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsFiltersModule,
    SdsFormlyModule
  ],
  exports: [
  	DownloadFiltersComponent
  ]
})

export class DownloadFiltersModule{}