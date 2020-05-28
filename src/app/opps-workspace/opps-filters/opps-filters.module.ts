import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OppsFiltersComponent } from './opps-filters.component';
import { SdsFormlyModule, SdsFiltersModule } from '@gsa-sam/sam-formly';



@NgModule({
  declarations: [OppsFiltersComponent],
  imports: [
    CommonModule,
    SdsFiltersModule,
    SdsFormlyModule
  ],
  exports: [OppsFiltersComponent]
})
export class OppsFiltersModule { }
