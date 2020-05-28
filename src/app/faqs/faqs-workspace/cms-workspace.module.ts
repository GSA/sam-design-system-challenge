import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { BaseAwardeeFilterService,
//   AwardeeNameFilterService,
//   AwardeeUeidunsFilterService,
//   AwardeeCageFilterService,
//   IntegrityTypeFilter,
//   HierarchyFilterService } from '../../common/public-apis';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule
} from '@gsa-sam/components';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';

// import { IntegrityInfoWsItemModule } from './integrity-info-ws-item/integrity-info-ws-item.module';
// import { IntegrityInfoWorkspaceRoutingModule } from './integrity-info-workspace-routing.module';
// import { IntegrityInfoWorkspaceComponent } from './integrity-info-workspace.component';
import {CmsWorkspaceComponent} from './cms-workspace.component';
import {CmsFiltersService} from './filter-services/cms-filters.service';
import {CMSFiltersModule} from './filter-services/cms-filters.module';
import {FaqItemModule} from './faq-item/faq-item.module';
import {CmsWorkspaceRoutingModule} from "./cms-workspace-routing.module";

@NgModule({
  declarations: [CmsWorkspaceComponent],
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
    CMSFiltersModule,
    FaqItemModule,
    CmsWorkspaceRoutingModule
  ],
  exports: [CmsWorkspaceComponent],
  providers: [SDSFormlyUpdateComunicationService]
})
export class CmsWorkspaceModule { }
