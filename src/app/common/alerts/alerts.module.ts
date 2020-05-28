import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SdsDialogModule } from '@gsa-sam/components';
import { AlertComponent } from './alerts.component';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsDialogModule
  ],
  exports: [AlertComponent],
})
export class AlertsModule { }
