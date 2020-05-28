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
 
  /**
   * Event when something is checked/selected in the grid
   */
  public filterChange$ = new BehaviorSubject<object>(null);

  fields: FormlyFieldConfig[] = [
    {
      
      fieldGroup: [
        {
          key: 'keyword',
          type: 'input',
          templateOptions: {
            placeholder: '',
            inputType: 'text',
            label: 'Keyword'
            
          }
        }
      ]
    },
   
    {
      key: 'status',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Status'},
      fieldGroup: [
        {
          key: 'status',
          type: 'multicheckbox',
          templateOptions: {
            options: [
              {
                key: 'active_only',
                value: 'Active Only'
              },
              {
                key: 'draft_only',
                value: 'Draft Only'
              }
            ]
          }
        }
      ]
    },
    
    {
      key: 'published date',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Published Date' },
      fieldGroup: [
        {
          key: 'published date',
          type: 'multicheckbox',
          templateOptions: {
            options: [
              {
                key: 'any_time',
                value: 'Any Time'
              },
              {
                key: 'past_day',
                value: 'Past Day'
              }
            ]
          }
        }
      ]
    }
  ];


  constructor(private router: Router) { }

  ngOnInit() {
    this.filterChange$.subscribe(res => {
      if (res) {
        this.search(res);
      }
    });

  }

   /**
   * executes search when ever there is a change in filter
   * @param model 
   */
  search(model: any) {
    Object.keys(model).map(key => {
      const values = model[key][key];
      let param = {};
      if (values) {
        if (key === 'status') {
          const status = this.getSelectedStatus(values);
          param = {
            [key]: (status.length > 0) ? status : null
          }
        } else if (key === 'published date') {
          param = this.getSelectedPublishedDates(values);
        }
        else {
          param = { [key]: values };
        }
        
      }else{
        param = { [key]: null };
      }
      this.queryParams = Object.assign({}, this.queryParams, param);
    });
    this.router.navigate(['/workspace/opps'], {
      queryParams: this.queryParams,
      queryParamsHandling: 'merge'
    });
  }


  /**
   * 
   * @param selections selected options in filter
   * @returns string of comma selected values
   */
  getSelectedStatus(selections: any): string {
    return this.getMulticheckboxSelections(selections).join(",")
  }

   /**
   * 
   * @param selections 
   * @returns string [] of selected values
   */
  getMulticheckboxSelections(selections: any): string[] {
    return Object.keys(selections).reduce((acc, key) => {
      selections[key] ? acc.push(key) : null;
      return acc;
    }, []);
  }


   /**
   * 
   * @param selections selected options in filter
   * @returns object with selected values ex: {any time: true, past date: null}
   */
  getSelectedPublishedDates(selections: any): any {
    return Object.keys(selections)
      .reduce((acc, key) => {
        selections[key] ? (acc[key] = selections[key]) : (acc[key] = null);
        return acc;
      }, {});
  }


}
