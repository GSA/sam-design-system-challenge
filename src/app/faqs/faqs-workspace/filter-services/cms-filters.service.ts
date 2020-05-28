import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {SDSFormlyUpdateComunicationService} from '@gsa-sam/sam-formly';
import {
  SDSAutocompleteServiceInterface,
  SDSHiercarchicalServiceResult,
  SDSSelectedItemModel,
  SDSAutocompletelConfiguration,
  SelectionMode
} from '@gsa-sam/components';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CmsFiltersService implements SDSAutocompleteServiceInterface {

  public model: SDSSelectedItemModel = new SDSSelectedItemModel();
  public settings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  private data: object[] = [];

  constructor() {
    this.settings.id = 'keyword';
    this.settings.primaryKeyField = 'keyField';
    this.settings.primaryTextField = 'textField';
    this.settings.secondaryTextField = null;
    this.settings.labelText = 'Keyword';
    this.settings.selectionMode = SelectionMode.SINGLE;
    this.settings.autocompletePlaceHolderText = '';
    this.settings.debounceTime = 100;
    this.settings.isFreeTextEnabled = true;
  }

  config: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      wrappers: ['filterwrapper'],
      type: 'autocomplete',
      templateOptions: {
        label: 'Keyword',
        inputType: 'string',
        service: this,
        configuration: this.settings,
        model: this.model
      }
    },
    {
      key: 'type',
      wrappers: ['filterwrapper'],
      type: 'multicheckbox',
      templateOptions: {
        label: 'Type',
        service: this,
        model: this.model,
        options: [
          {
            key: 'faq',
            value: 'FAQs'
          },
          {
            key: 'term',
            value: 'Glossary'
          },
          {
            key: 'video',
            value: 'Video'
          }
        ]
      }
    }
  ];

  getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
    return undefined;
  }

  // getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
  //   return this.searchTitles(searchValue, '', '2', '').pipe(map(data => {
  //     const result = {
  //       items: data,
  //       totalItems: data.length
  //     };
  //     return result;
  //   }));
  // }

  // getDataByType(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
  //   return this.searchTitles('', searchValue, '2', '').pipe(map(data => {
  //     const result = {
  //       items: data,
  //       totalItems: data.length
  //     };
  //     return result;
  //   }));
  // }

  // searchTitles(query: string, typeIds?: string, statusId?: string, domains?: string) {
  //   const oApiParam = {
  //     name: 'cms',
  //     suffix: '/data/title',
  //     oParam: {
  //       q: query
  //     },
  //     method: 'GET'
  //   };
  //   if (typeIds) {
  //     oApiParam.oParam.typeIds = typeIds;
  //   }
  //
  //   if (statusId) {
  //     oApiParam.oParam.statusid = statusId;
  //   }
  //
  //   if (domains) {
  //     oApiParam.oParam.domains = domains;
  //   }
  //   return this.oAPIService.call(oApiParam);
  // }

}
