import { Component, OnInit } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { AutocompleteService } from '../download-service/autocomplete.service';

@Component({
  selector: 'app-download-filters',
  templateUrl: './download-filters.component.html',
  styleUrls: ['./download-filters.component.scss']
})
export class DownloadFiltersComponent implements OnInit {

  public filterChange$ = new BehaviorSubject<object>(null);
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  keywordSettings = new SDSAutocompletelConfiguration();
  keywordModel = new SDSSelectedItemModel();
  typeSettings = new SDSAutocompletelConfiguration();
  typeModel = new SDSSelectedItemModel();

  fields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',     
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Search by Keyword' },
      fieldGroup: [{
        key: 'keywordSearch',
        id: 'key',
        type: 'autocomplete',
        templateOptions: {
          label: 'Keyword',
          placeholder: '',
          inputType: 'text',
          configuration: this.keywordSettings,
          model: this.keywordModel,
          service: this.autocompleteService,
          change: (field, $event) => {
            this.applyFilters(field);
          }
        }
      }]
    },
    {
      key: 'status',     
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Status'}, 
      fieldGroup: [{
        key: 'status',
        id: 'status',
        type: 'multicheckbox',
        templateOptions: {
          label: 'Status',
          labelClass: 'usa-sr-only',
          options: [
            {
              key: 'Active',
              value: 'Available Only'
            }
          ]
        }
      }]
    },
    {
      key: 'searchType',     
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Search by Type' },
      fieldGroup: [{
        key: 'typeSearch',
        id: 'type',
        type: 'autocomplete',
        templateOptions: {
          label: 'Type',
          placeholder: '',
          inputType: 'text',
          configuration: this.typeSettings,
          model: this.typeModel,
          service: this.autocompleteService,
          isTagModeEnabled: true,
          change: (field, $event) => {
            this.applyFilters(field);
          }
        }
      }]
    },
    {
      key: 'domain',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Domain' },
      fieldGroup: [{
        key: 'domain',
        id: 'domain',
        type: 'multicheckbox',
        templateOptions: {
          label: 'Domain',
          labelClass: 'usa-sr-only',
          options: [
            {
              key: 'Select All',
              value: 'Select All'
            },
            {
              key: 'Assistance Listings',
              value: 'Assistance Listings'
            },
            {
              key: 'Contract Opportunities',
              value: 'Contract Opportunities'
            },
            {
              key: 'Contract Data',
              value: 'Contract Data'
            },
            {
              key: 'Entity Information',
              value: 'Entity Information'
            },
            {
              key: 'Federal Hierarchy',
              value: 'Federal Hierarchy'
            },
            {
              key: 'Wage Determination',
              value: 'Wage Determination'
            }
          ]
        },
      }]
    },
    {
      key: 'ExpireDate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Expire Date' },
      fieldGroup: [
        {
          key: 'expireDateFrom',
          id: 'exp',
          type: 'input',
          templateOptions: {
            label: 'From',
            inputType: 'date',
            change: (field, $event) => {
              this.applyFilters(field);
            }
          }
        },
        {
          key: 'expireDateTo',
          type: 'input',
          templateOptions: {
            label: 'To',
            inputType: 'date',
            change: (field, $event) => {
              this.applyFilters(field);
            }
          }
        }
      ]
    },
    {
      key: 'CreateDate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Create Date' },
      fieldGroup: [
        {
          key: 'createDateFrom',
          id: 'create',
          type: 'input',
          templateOptions: {
            label: 'From',
            inputType: 'date',
            change: (field, $event) => {
              this.applyFilters(field);
            }
          }
        },
        {
          key: 'createDateTo',
          type: 'input',
          templateOptions: {
            label: 'To',
            inputType: 'date',
            change: (field, $event) => {
              this.applyFilters(field);
            }
          }
        }
      ]
    }
  ]
  constructor( private autocompleteService: AutocompleteService) {
    this.setup();
   }

  setup(){
    
    this.keywordSettings.id = 'Keyword';
    this.keywordSettings.primaryKeyField = 'fileName';
    this.keywordSettings.primaryTextField = 'userId';
    this.keywordSettings.selectionMode = SelectionMode.MULTIPLE;
    this.keywordSettings.isFreeTextEnabled = true;
    this.keywordSettings.debounceTime = 250;
    this.keywordSettings.isTagModeEnabled = true;
    
    this.typeSettings.id = 'Keyword';
    this.typeSettings.primaryKeyField = 'fileName';
    this.typeSettings.primaryTextField = 'userId';
    this.typeSettings.selectionMode = SelectionMode.MULTIPLE;
    this.typeSettings.isFreeTextEnabled = true;
    this.typeSettings.debounceTime = 250;
    this.typeSettings.isTagModeEnabled = true;
  }
  ngOnInit() {
  }

  clearFilters(){
  }

  applyFilters(field: any){

  }
}
