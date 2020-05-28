import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadItemComponent } from './download-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SdsActionsMenuModule } from '@gsa-sam/layouts';

@NgModule({
  declarations: [DownloadItemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsActionsMenuModule
  ],
  exports: [DownloadItemComponent]
})
export class DownloadItemModule { 
  constructor() {
  }
}