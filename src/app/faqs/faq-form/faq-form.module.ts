import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { SdsAccordionModule } from '@gsa-sam/components'

import { FaqFormRoutingModule } from './faq-form-routing.module';
import { FaqFormComponent } from './faq-form.component';

@NgModule({
  declarations: [FaqFormComponent],
  imports: [
    CommonModule,
	RouterModule,
	FormlyModule,
	ReactiveFormsModule,
    FormlySelectModule,
	FormlyModule.forRoot(),
    FormsModule,
	SdsFiltersModule,
	SdsAccordionModule,
    FaqFormRoutingModule
  ],
  exports: [FaqFormComponent]
})
export class FaqFormModule { }
