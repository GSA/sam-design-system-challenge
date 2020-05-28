import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SdsActionsMenuModule } from '@gsa-sam/layouts';
import {FaqItemComponent} from './faq-item.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FaqItemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsActionsMenuModule,
    RouterModule
  ],
  exports: [FaqItemComponent]
})
export class FaqItemModule {
  constructor() {
    library.add(fas, sds);
  }
}
