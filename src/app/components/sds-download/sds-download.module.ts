import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule
} from '@gsa-sam/components';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';

import { DownloadItemModule } from './download-item/download-item.module';
import { SdsDownloadComponent } from './sds-download.component';
import { SdsDownloadRoutingModule } from './sds-download-routing.module';
import { DownloadFiltersModule } from './download-filter/download-filters.module'


@NgModule({
  declarations: [SdsDownloadComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsFiltersModule,
    SdsSubheaderModule, 
    SearchListServiceModule,
    DownloadItemModule,
    SdsDownloadRoutingModule,
    DownloadFiltersModule
  ],
  exports: [SdsDownloadComponent],
  providers: [SDSFormlyUpdateComunicationService]
})
export class SdsDownloadModule { }