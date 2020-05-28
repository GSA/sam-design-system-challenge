import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import {AppService} from 'src/app/app-service/app.service';

@Component({
  selector: 'opps-resultset',
  templateUrl: './opps-resultset.component.html',
  styleUrls: ['./opps-resultset.component.scss']
})
export class OppsResultsetComponent implements OnInit {

  menu = {
    trigger: 'primary',
    actions: [
      { id: 'ActiveBtn', icon: 'bars', text: 'Activate' },
      { id: 'InActivateBtn', icon: 'bars', text: 'InActivate' }     
    ]
  };
  constructor(private appservice: AppService ) { }  
  oppsdata:any;
  ngOnInit() {
    this.appservice.getOppsData().subscribe(data=>this.oppsdata = data['results']);
  }
  menuClicked(action) {
    console.log(`%cLog: clicked action`, 'color: blue; font-weight: bold');
    }
}
