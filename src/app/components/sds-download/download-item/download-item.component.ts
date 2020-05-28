import { Component, OnInit, Input } from '@angular/core';
import { AlertComponent } from '../../../common/alerts/alerts.component';
import {
  SdsDialogService,
  SdsDialogRef,
  SDS_DIALOG_DATA
} from '@gsa-sam/components';

@Component({
  selector: 'download-item',
  templateUrl: './download-item.component.html',
  styleUrls: ['./download-item.component.scss']
})
export class DownloadItemComponent implements OnInit {

  @Input() model;
  
  menu = {
    trigger: 'primary',
    actions: [
      { id: 'DeleteBtn', icon: 'bars', text: 'Delete' }
    ]
  };

  constructor(public dialog: SdsDialogService) { }

  ngOnInit() {
  }

  menuClicked($event){
    const dialogRef = this.dialog.open(AlertComponent, {
      alert: 'warning',
      width: 'small',
      data: { title: 'Confirm Delete', content: 'Are you sure you want to delete this record?' }
    });
  }

}