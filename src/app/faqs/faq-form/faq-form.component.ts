import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import {FAQForm} from './faqForm.config';

@Component({
  selector: 'app-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.scss']
})
export class FaqFormComponent implements OnInit {
 
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] =  [
    {
      key: 'faq.question',
      type: 'input',
      templateOptions: {
        label: 'Question',
        description: 'Please provide the FAQ',
        required: true,
      }
    },

{
      key: 'faq.response',
      type: 'input',
      templateOptions: {
        label: 'Response',
        description: 'Please provide the complete answer for the FAQ',
        required: true,
      }
    },
	{
      key: 'faq.domain',
      type: 'select',
      templateOptions: {
		className: 'grid-col-7',
        label: 'Domain',
        description: 'Select the Domain(s).',
        required: true,
        options: [
          { label: 'Contract Opportunities', value: 'co' },
          { label: 'Entity Information', value: 'ei' },
          { label: 'Assistance Listings', value: 'al' },
          { label: 'Contract Data', value: 'cd' },
          { label: 'Federal Hierarchy', value: 'fh' },
          { label: 'Wage Determination', value: 'wd' },
        ],
      },
    },
	

{
      key: 'faq.keyword',
      type: 'input',
      templateOptions: {
        label: 'Keyword',
        description: 'Provide keywords to be associated with the FAQ, key words are words or phrases that help to define what the FAQ is about.',
        required: true,
      }
    },
	{
		key: 'faq.display',
		type: 'checkbox',
		templateOptions:{
			className: 'usa-checkbox__input',
			description:'Display on homepage.',
			required: true
	}
	}
	
  ];
  

  constructor() {}

  ngOnInit() {
  }

}
