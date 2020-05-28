import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';
import {faqsData} from './faqs.data';
import {faqItemData} from './faq-items.data';


/**
 *  The faq service emulates basic sorting and filtering for most of the filters (except keyword).
 */
@Injectable()
export class FaqsService {

  data: any;
  currentItems: any[];
  lastSearchParams: SearchParameters;

  constructor() {
    this.data = faqItemData;
  }

  public configuration: SearchListConfiguration = {
    defaultSortValue: 'relevance',
    pageSize: 25,
    sortList: [
      {text: 'Relevance', value: 'relevance'},
      {text: 'Latest Update', value: 'lastmodifieddate'},
      {text: 'Alphabetical (A-Z)', value: 'title-asc'},
      {text: 'Alphabetical (Z-A)', value: 'title-desc'}
    ]
  };

  getData(search: SearchParameters): Observable<SearchResult> {
    let records = faqItemData.contentDataList;

    /* Filter */
    if (search && search.filter) {
      records = faqItemData.contentDataList.filter(record => this.filterRecord(record, search.filter));
    }

    /* Sort */
    this.sortRecords(records, search);

    /* Return slice */
    const start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
    const end = start + search.page.pageSize;
    return of({
      items: records.slice(start, end),
      totalItems: records.length
    });
  }

  filterByType(result, types) {
    if (types.article && result.type == 4) { return true; }
    if (types.video && result.type == 3) { return true; }
    if (types.faq && result.type == 2) { return true; }
    if (types.term && result.type == 1) { return true; }
    return false;
  }

  filterRecord(record, filters) {
    if (filters.type) {
      if (!this.filterByType(record, filters.type)) {
        return false;
      }
    }
    if (filters.keyword) {
      if (!this.filterByKeyword(record, filters.keyword)) {
        return false;
      }
    }
    return true;
  }

  filterByKeyword(result, keyword) {
    for (let i = 0; i < keyword.items.length; i++) {
      if (result.title.toLowerCase().includes(keyword.items[0].value.toLowerCase()) ||
        result.description.toLowerCase().includes(keyword.items[0].value.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  filterRecordType(record, recordTypes) {
    for (let i = 0; i < recordTypes.length; i++) {
      if (record.recordType === recordTypes[i].label) {
        return true;
      }
    }
    return false;
  }

  sortRecords(records, search: SearchParameters) {
    records.sort((a, b) => {
      switch (search.sortField) {
        case 'relevance':
          return (a.title > b.title) ? 1 : -1;
        case 'lastmodifieddate':
          return ((new Date(a.lastModifiedDate)) > (new Date(b.lastModifiedDate))) ? 1 : -1;
        default: {
          return (a.title > b.title) ? 1 : -1;
        }
      }
    });
  }
}
