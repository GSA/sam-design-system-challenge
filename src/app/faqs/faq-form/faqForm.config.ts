import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


export class FAQForm {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
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
      key: 'faq.keyword',
      type: 'input',
      templateOptions: {
        label: 'Keyword',
        description: 'Provide keywords to be associated with the FAQ, key words are words or phrases that help to define what the FAQ is about',
        required: true,
      }
    }
  ];
}