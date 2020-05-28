import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  menuClicked($event){

  }

}