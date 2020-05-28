import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject, ObjectUnsubscribedError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'opps-filters',
  templateUrl: './opps-filters.component.html',
  styleUrls: ['./opps-filters.component.scss']
})
export class OppsFiltersComponent implements OnInit {

  queryParams: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  $status: string[] = [];
  /**
   * Event when something is checked/selected in the grid
   */
  public filterChange$ = new BehaviorSubject<object>(null);

  fields: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [
        {
          key: 'keyword',
          type: 'input',
          modelOptions: {
            updateOn: 'blur',
          },
          templateOptions: {
            placeholder: '',
            inputType: 'text',
            label: 'Keyword',
            labelClass: 'usa-sr-only'
          }
        }
      ]
    },
   
    {
      key: 'Active Only',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Request Types' },
      fieldGroup: [
        {
          key: 'Active Only',
          type: 'multicheckbox',
          templateOptions: {
            options: [
              {
                key: 'federal',
                value: 'Federal'
              },
              {
                key: 'non-federal',
                value: 'Non-Federal'
              }
            ]
          }
        }
      ]
    },
    {
      key: 'status',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Status' },
      fieldGroup: [
        {
          key: 'status',
          type: 'multicheckbox',
          templateOptions: {
            options: [
              {
                key: 'draft',
                value: 'Draft'
              },
              {
                key: 'pending review',
                value: 'Pending Review'
              },
              {
                key: 'pending permissions approval',
                value: 'Pending Permissions Approval'
              },

              {
                key: 'pending approval',
                value: 'Pending Approval' 
              },
              {
                key: 'approved',
                value: 'Published'
              },
              {
                key: 'deactivated',
                value: 'Deactivated'
              },
              {
                key: 'change request',
                value: 'Change Request'
              }
            ]
          }
        }
      ] 
    },
    {
      key: 'domain',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Domain' },
      fieldGroup: [
        {
          key: 'domain',
          type: 'multicheckbox',
          templateOptions: {
            options: [
              {
                key: 'assistanceListings',
                value: 'Assistance Listings'
              },
              {
                key: 'contractData',
                value: 'Contract Data'
              },
              {
                key: 'contractOpportunities',
                value: 'Contract Opportunities'
              },
              {
                key: 'entityInformation',
                value: 'Entity Information'
              },
              {
                key: 'federalHierarchy',
                value: 'Federal Hierarchy'
              },
              {
                key: 'referenceData',
                value: 'Reference Data'
              },
              {
                key: 'wageDeterminations',
                value: 'Wage Determinations'
              }
            ]
          }
        }
      ]
    }
  ];


  constructor() { }

  ngOnInit() {

    console.log("qqqqqqq");
  }

}
