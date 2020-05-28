import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OppsComponent } from './opps.component';
import {SdsPageModule, SdsToolbarModule, SdsAccordionModule} from '@gsa-sam/components';
import {FormsModule} from '@angular/forms';
import {OppsFiltersModule} from './opps-filters/opps-filters.module';
import {OppsResultsetModule} from './opps-resultset/opps-resultset.module'



@NgModule({
  declarations: [OppsComponent],
  imports: [
    CommonModule,
    SdsPageModule,
    FormsModule,
    SdsToolbarModule,
    SdsAccordionModule,
    OppsFiltersModule,
    OppsResultsetModule
  ],
  exports: [OppsComponent]
})
export class OppsModule { }
