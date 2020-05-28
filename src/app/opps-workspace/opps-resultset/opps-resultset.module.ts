import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OppsResultsetComponent } from './opps-resultset.component';
import { SdsActionsMenuModule } from '@gsa-sam/layouts';

@NgModule({
  declarations: [OppsResultsetComponent],
  imports: [
    CommonModule,
    SdsActionsMenuModule    
  ],
  exports: [OppsResultsetComponent]
})
export class OppsResultsetModule { }
