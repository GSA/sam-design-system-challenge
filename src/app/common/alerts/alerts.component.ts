import { Component, Inject } from '@angular/core';
import {
  SdsDialogService,
  SdsDialogRef,
  SDS_DIALOG_DATA
} from '@gsa-sam/components';

export interface AlertData {
  title: string;
  content: string;
}

@Component({
  selector: 'sds-dialog-sample-alert',
  templateUrl: './alerts.component.html'
})
export class AlertComponent {
  constructor(@Inject(SDS_DIALOG_DATA) public data: AlertData) {}
}