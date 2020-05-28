import { Component, OnInit, Input } from '@angular/core';
import {FaqsService} from '../../faqs-service/faqs.service';

@Component({
  selector: 'faq-item',
  templateUrl: './faq-tem.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent implements OnInit {

  @Input() model;

  menu = {
    trigger: 'primary',
    actions: [
      {id: 'ViewBtn', icon: 'bars', text: 'View'},
      {id: 'UpdateBtn', icon: 'bars', text: 'Update'},
      {id: 'DeactivateBtn', icon: 'bars', text: 'Deactivate'}
    ]
  };

  constructor(public service: FaqsService) {
  }

  ngOnInit() {
  }

  menuClicked(action) {
    console.log(`%cLog: clicked action`, 'color: blue; font-weight: bold');
  }
}
